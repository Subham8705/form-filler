import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Play, Sparkles, Zap, Bot, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl animate-pulse-neon"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-neon-blue/30 text-neon-blue text-sm font-medium mb-8 animate-glow">
            <Bot className="h-4 w-4 mr-2 animate-pulse" />
            AI-Powered Form Automation
            <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-glow">
              Effortless Forms.
            </span>
            <span className="block text-white mt-2">
              AI-Powered.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Save time and eliminate repetitive data entry with our intelligent browser extension. 
            Complete forms instantly with <span className="text-neon-blue font-semibold">voice guidance</span> and 
            <span className="text-neon-purple font-semibold"> real-time translation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              to="/download"
              className="group relative bg-gradient-to-r from-neon-blue to-neon-purple text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-neon-blue/50 hover:scale-105 transition-all duration-300 flex items-center space-x-3 border border-neon-blue/50 backdrop-blur-sm"
            >
              <Download className="h-6 w-6 group-hover:animate-bounce-subtle" />
              <span>Download Extension</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </Link>
            
            <button className="group flex items-center text-neon-blue hover:text-neon-purple font-bold text-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-full p-4 shadow-lg group-hover:shadow-neon-blue/50 transition-all duration-300 mr-4 border border-neon-blue/30 backdrop-blur-sm">
                <Play className="h-6 w-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
              </div>
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-lg shadow-neon-green/50"></div>
              <span className="text-sm group-hover:text-neon-green transition-colors">Works with 50+ popular sites</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse shadow-lg shadow-neon-blue/50"></div>
              <span className="text-sm group-hover:text-neon-blue transition-colors">Supports 25+ languages</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse shadow-lg shadow-neon-purple/50"></div>
              <span className="text-sm group-hover:text-neon-purple transition-colors">Voice-guided assistance</span>
            </div>
          </div>

          {/* Team credit */}
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm border border-neon-blue/20">
            <p className="text-gray-400 text-sm mb-2">Built by the amazing team:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Subham', 'Naina', 'Gowthami', 'Venkat'].map((name, index) => (
                <span 
                  key={name} 
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full text-neon-blue font-medium text-sm border border-neon-blue/30 hover:border-neon-purple/50 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;