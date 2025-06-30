import React from 'react';
import { Download, Chrome, Check, Mic, Globe, Zap, Shield, Star, Bot, Sparkles } from 'lucide-react';

const DownloadPage = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Auto-Fill',
      description: 'Intelligent form recognition that learns and adapts to any website layout with machine learning.',
      color: 'neon-blue',
    },
    {
      icon: Mic,
      title: 'Voice Assistant Guide',
      description: 'Hands-free form completion with natural language voice instructions and contextual help.',
      color: 'neon-purple',
    },
    {
      icon: Globe,
      title: 'Real-time Translation',
      description: 'Translate forms between 25+ languages instantly as you fill them out with AI precision.',
      color: 'neon-pink',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Military-grade encryption with local data storage options for maximum security and privacy.',
      color: 'neon-green',
    },
  ];

  const browsers = [
    { name: 'Chrome', icon: Chrome, supported: true, link: '#' },
    { name: 'Edge', icon: Chrome, supported: false, link: '#' },
    { name: 'Firefox', icon: Chrome, supported: false, link: null },
    { name: 'Safari', icon: Chrome, supported: false, link: null },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl animate-pulse-neon"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-neon-blue/30 text-neon-blue text-sm font-medium mb-8 animate-glow">
            <Star className="h-4 w-4 mr-2 animate-pulse" />
            Featured Extension
            <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 py-10">
            Download <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Form Filler</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your online form experience with AI-powered automation, voice guidance, 
            and intelligent translation capabilities. Join thousands of users saving hours daily.
          </p>
          
          <button className="group relative bg-gradient-to-r from-neon-blue to-neon-purple text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-neon-blue/50 hover:scale-105 transition-all duration-300 flex items-center space-x-4 mx-auto border border-neon-blue/50 backdrop-blur-sm">
            <Download className="h-7 w-7 group-hover:animate-bounce-subtle" />
            <span>Download Now - Free</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </button>
          
          <p className="text-sm text-gray-400 mt-6 flex items-center justify-center space-x-4">
            <span className="flex items-center">
              <Check className="h-4 w-4 text-neon-green mr-1" />
              Free forever
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-neon-green mr-1" />
              No credit card required
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-neon-green mr-1" />
              30-second setup
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl backdrop-blur-sm border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-blue/20 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-${feature.color}/30 shadow-lg shadow-${feature.color}/20 relative`}>
                  <Icon className={`h-10 w-10 text-${feature.color}`} />
                  <div className={`absolute inset-0 rounded-2xl bg-${feature.color}/10 blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Browser Compatibility */}
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl backdrop-blur-sm border border-neon-blue/20 p-8 mb-16 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Browser <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Compatibility</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {browsers.map((browser) => {
              const Icon = browser.icon;
              return (
                <div key={browser.name} className={`p-6 rounded-xl text-center transition-all duration-300 border-2 ${
                  browser.supported 
                    ? 'border-neon-green/30 bg-neon-green/5 hover:border-neon-green/50 hover:bg-neon-green/10' 
                    : 'border-gray-600/30 bg-gray-800/20'
                }`}>
                  <Icon className={`h-10 w-10 mx-auto mb-4 ${
                    browser.supported ? 'text-neon-green' : 'text-gray-500'
                  }`} />
                  <div className="font-medium text-white mb-3">{browser.name}</div>
                  <div className="flex items-center justify-center">
                    {browser.supported ? (
                      <div className="flex items-center text-neon-green text-sm font-medium">
                        <Check className="h-4 w-4 mr-2" />
                        Supported
                      </div>
                    ) : (
                      <div className="text-gray-500 text-sm">Coming Soon</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl backdrop-blur-sm border border-neon-blue/20 p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Quick <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">Installation</span> Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Download Extension',
                description: 'Click the download button and install from your browser\'s extension store.',
                color: 'neon-blue'
              },
              {
                step: 2,
                title: 'Setup Profile',
                description: 'Add your personal information and preferences for automatic form filling.',
                color: 'neon-purple'
              },
              {
                step: 3,
                title: 'Start Filling',
                description: 'Visit any website with forms and watch the AI magic happen automatically.',
                color: 'neon-pink'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${item.color} to-${item.color} flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg shadow-${item.color}/30 group-hover:scale-110 transition-all duration-300 relative`}>
                  {item.step}
                  <div className={`absolute inset-0 rounded-full bg-${item.color}/20 blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                </div>
                <h3 className="font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;