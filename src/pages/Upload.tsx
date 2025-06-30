import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, X, Download, ArrowRight } from 'lucide-react';

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

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
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile(file);
      }
    }
  };

  const handleConvert = () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 3000);
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setIsComplete(false);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Convert Physical Forms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform scanned PDFs and physical forms into smart, fillable digital versions 
            that work seamlessly with Form Filler's AI technology.
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {!uploadedFile && !isComplete && (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-primary-400 bg-primary-50' 
                  : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Drop your PDF form here
              </h3>
              <p className="text-gray-600 mb-6">
                Or click to browse and select a scanned form or PDF document
              </p>
              <label htmlFor="file-upload" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors cursor-pointer">
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
            </div>
          )}

          {/* File Selected */}
          {uploadedFile && !isComplete && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{uploadedFile.name}</div>
                    <div className="text-sm text-gray-500">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                </div>
                <button
                  onClick={resetUpload}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {!isProcessing && (
                <div className="text-center">
                  <button
                    onClick={handleConvert}
                    className="group bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Convert to Digital Form</span>
                  </button>
                </div>
              )}

              {/* Processing */}
              {isProcessing && (
                <div className="text-center animate-fade-in">
                  <div className="inline-flex items-center px-6 py-4 bg-primary-100 text-primary-800 rounded-lg">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 mr-3"></div>
                    Processing your form... This may take a few moments.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Conversion Complete */}
          {isComplete && (
            <div className="text-center animate-fade-in">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conversion Complete!
              </h3>
              <p className="text-gray-600 mb-8">
                Your physical form has been successfully converted to a smart digital format.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  <Download className="h-5 w-5 mr-2" />
                  Download Digital Form
                </button>
                <button
                  onClick={resetUpload}
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Upload Another Form
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">AI Recognition</h3>
            <p className="text-gray-600 text-sm">
              Advanced OCR technology identifies and maps form fields automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Fields</h3>
            <p className="text-gray-600 text-sm">
              Converted forms work perfectly with Form Filler's auto-fill capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Upload className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Process</h3>
            <p className="text-gray-600 text-sm">
              Convert most forms in under 30 seconds with high accuracy rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;