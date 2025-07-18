import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, X, Download, ArrowRight } from 'lucide-react';

interface ExtractedData {
  fields: Record<string, string>;
  summary: string;
}

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile(file);
        setError(null);
      } else {
        setError('Please upload a PDF file');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile(file);
        setError(null);
      } else {
        setError('Please upload a PDF file');
      }
    }
  };

  const handleConvert = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process PDF');
      }

      const result = await response.json();
      setExtractedData(result);
      setIsComplete(true);
    } catch (err) {
      console.error('Error processing PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to process the PDF');
    } finally {
      setIsProcessing(false);
    }
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setIsComplete(false);
    setExtractedData(null);
    setError(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl animate-pulse-neon"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            Convert Physical Forms
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform scanned PDFs into smart, fillable digital versions 
            powered by ZapFill.AI's advanced technology.
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-gray-700">
          {!uploadedFile && !isComplete && (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-primary-400 bg-gray-700/30' 
                  : 'border-gray-600 hover:border-primary-300 hover:bg-gray-700/20'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Drop your PDF form here
              </h3>
              <p className="text-gray-400 mb-6">
                Or click to browse and select a scanned form or PDF document
              </p>
              <label htmlFor="file-upload" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors cursor-pointer shadow-lg hover:shadow-primary-500/20">
                <FileText className="h-5 w-5 mr-2" />
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-sm text-gray-500 mt-4">
                Supports PDF files up to 10MB
              </p>
              {error && <p className="text-red-400 mt-2">{error}</p>}
            </div>
          )}

          {/* File Selected */}
          {uploadedFile && !isComplete && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between p-4 bg-gray-700/40 rounded-lg mb-6 border border-gray-600">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-200">{uploadedFile.name}</div>
                    <div className="text-sm text-gray-400">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                </div>
                <button
                  onClick={resetUpload}
                  className="p-2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {!isProcessing && (
                <div className="text-center">
                  <button
                    onClick={handleConvert}
                    className="group bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Convert to Digital Form</span>
                  </button>
                </div>
              )}

              {/* Processing */}
              {isProcessing && (
                <div className="text-center animate-fade-in">
                  <div className="inline-flex items-center px-6 py-4 bg-primary-900/30 text-primary-200 rounded-lg border border-primary-800">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-400 mr-3"></div>
                    Processing your form with AI... This may take a few moments.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Conversion Complete */}
          {isComplete && extractedData && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Conversion Complete!
                </h3>
                {extractedData.summary && (
                  <p className="text-gray-300 mb-2 max-w-2xl mx-auto">
                    {extractedData.summary}
                  </p>
                )}
              </div>
              
              {/* Extracted Data Preview */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-200 mb-4">Extracted Form Fields:</h4>
                <div className="bg-gray-700/40 rounded-lg p-4 border border-gray-600">
                  {Object.entries(extractedData.fields).map(([field, value]) => (
                    <div key={field} className="mb-3 last:mb-0">
                      <div className="font-medium text-gray-300">{field}</div>
                      <div className="mt-1 p-2 bg-gray-800/50 border border-gray-600 rounded text-gray-200">
                        {value || <span className="text-gray-400">Not specified</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/30"
                  onClick={() => {
                    // Create a downloadable JSON file
                    const dataStr = JSON.stringify(extractedData, null, 2);
                    const blob = new Blob([dataStr], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${uploadedFile?.name.replace('.pdf', '')}_extracted.json` || 'extracted_data.json';
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Extracted Data
                </button>
                <button
                  onClick={resetUpload}
                  className="flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-200 rounded-lg font-medium hover:bg-gray-700/50 transition-colors"
                >
                  Upload Another Form
                </button>
              </div>
            </div>
          )}

          {error && !isProcessing && (
            <div className="text-center text-red-400 mt-4 animate-fade-in">
              {error}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-700 hover:border-primary-500/30 transition-colors">
            <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-green-800">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">AI Recognition</h3>
            <p className="text-gray-400 text-sm">
              Powered by Gemini AI to intelligently identify and map form fields with 95%+ accuracy.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-700 hover:border-primary-500/30 transition-colors">
            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-800">
              <FileText className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">Smart Fields</h3>
            <p className="text-gray-400 text-sm">
              Converted forms work perfectly with ZapFill.AI's auto-fill capabilities.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-700 hover:border-primary-500/30 transition-colors">
            <div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-purple-800">
              <Upload className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-200 mb-2">Quick Process</h3>
            <p className="text-gray-400 text-sm">
              Convert most forms in under 30 seconds with our optimized pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;