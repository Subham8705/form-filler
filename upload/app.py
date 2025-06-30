from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import pdfplumber
import google.generativeai as genai
import os
import logging
import json
import re
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Configure Gemini API
try:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    if not GEMINI_API_KEY:
        raise ValueError("No GEMINI_API_KEY found in environment variables")
    
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel("gemini-1.5-flash")
    logger.info("Gemini API initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize Gemini API: {str(e)}")
    raise

# System instructions for Gemini
SYSTEM_INSTRUCTIONS = """
You are a form data summarizer designed to process text extracted from PDF forms. Your task is to extract all key-value pairs (e.g., "Label: Value") and summarize any non-structured text. Follow these steps:

1. Extract Key-Value Pairs:
   - Identify all fields in the input text that follow a key-value format
   - Clean any corrupted text (like '(cid:...)') before processing
   - Return "Not found" for missing or unclear values

2. Summarize Non-Structured Text:
   - Generate a concise summary (2-3 sentences) of important information
   - Return empty string if no non-structured text exists

3. Output Format:
   - Return valid JSON with "fields" (key-value pairs) and "summary" keys

Example Output:
{
  "fields": {
    "Name": "John Doe",
    "Email": "john@example.com"
  },
  "summary": "Candidate has 5 years of experience in web development"
}
"""

def clean_extracted_text(text: str) -> str:
    """Clean common PDF extraction artifacts"""
    text = re.sub(r'\(cid:\d+\)', '', text)  # Remove PDF CID markers
    text = re.sub(r'\s+', ' ', text)  # Normalize whitespace
    return text.strip()

@app.route('/')
def serve_index():
    try:
        index_path = os.path.join(os.getcwd(), 'index.html')
        if not os.path.exists(index_path):
            logger.error(f"index.html not found at {index_path}")
            return jsonify({'error': 'index.html not found'}), 404
        return send_file(index_path)
    except Exception as e:
        logger.error(f"Error serving index.html: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/upload', methods=['POST'])
def upload_pdf():
    if 'file' not in request.files:
        logger.error("No file uploaded")
        return jsonify({'error': 'No file uploaded'}), 400
        
    file = request.files['file']
    if not file.filename.lower().endswith('.pdf'):
        logger.error("Invalid file type uploaded")
        return jsonify({'error': 'File must be a PDF'}), 400

    try:
        # Extract text from PDF
        text = ''
        with pdfplumber.open(file) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text() or ''
                text += clean_extracted_text(page_text) + '\n'

        if not text.strip():
            logger.error("No text extracted from PDF")
            return jsonify({'error': 'No extractable text found in PDF'}), 400

        # Process with Gemini
        prompt = f"{SYSTEM_INSTRUCTIONS}\n\nInput text:\n{text}"
        response = model.generate_content(prompt)
        
        # Parse and validate response
        try:
            result = response.text.strip()
            result = re.sub(r'^```json|```$', '', result).strip()  # Remove markdown wrappers
            result_json = json.loads(result)
            
            if not isinstance(result_json, dict) or 'fields' not in result_json:
                raise ValueError("Invalid response format from Gemini")
                
            return jsonify(result_json)
            
        except (json.JSONDecodeError, ValueError) as e:
            logger.error(f"Failed to parse Gemini response: {str(e)}\nResponse: {response.text}")
            return jsonify({'error': 'Failed to process form data'}), 500

    except Exception as e:
        logger.error(f"Error processing PDF: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    try:
        port = int(os.getenv("PORT", 5001))
        app.run(host='0.0.0.0', port=port, debug=os.getenv("FLASK_DEBUG", "false").lower() == "true")
    except Exception as e:
        logger.critical(f"Failed to start server: {str(e)}")
        raise