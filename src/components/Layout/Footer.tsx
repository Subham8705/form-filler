import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-dark-950 to-dark-900 text-white border-t border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-xl shadow-lg shadow-neon-blue/30">
                <Zap className="h-6 w-6 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-lg"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-white bg-clip-text text-transparent">
                Form Filler
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Making digital forms effortless with AI-powered automation, voice assistance, 
              and real-time translation capabilities. Built for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-lg bg-dark-800 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 border border-neon-blue/20 hover:border-neon-blue/50">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-dark-800 text-gray-400 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 border border-neon-purple/20 hover:border-neon-purple/50">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-dark-800 text-gray-400 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-300 border border-neon-pink/20 hover:border-neon-pink/50">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Download Extension
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Upload Physical Form
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-purple transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-blue/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Form Filler. All rights reserved. Made with <Heart className="inline h-4 w-4 text-neon-pink mx-1" /> for easier forms.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Built by:</span>
              <div className="flex space-x-2">
                {['Subham', 'Naina', "Gowthami", "Venkat"].map((name, index) => (
                  <span 
                    key={name} 
                    className="px-2 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded text-neon-blue text-xs border border-neon-blue/20"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;