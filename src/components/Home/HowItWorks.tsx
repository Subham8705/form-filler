import React from 'react';
import { Save, Zap, CheckCircle, Mic, Globe, Shield, Bot, Sparkles, Brain } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Save,
      title: 'Save Your Information',
      description: 'Securely store your personal details, preferences, and commonly used data in your encrypted profile.',
      color: 'from-neon-blue to-neon-purple',
      glowColor: 'neon-blue',
    },
    {
      icon: Bot,
      title: 'Enable AI Extension',
      description: 'Activate ZapFill.Ai on any website. Our advanced AI instantly recognizes and maps form fields with 99.9% accuracy.',
      color: 'from-neon-purple to-neon-pink',
      glowColor: 'neon-purple',
    },
    {
      icon: Sparkles,
      title: 'Auto-Fill Magic',
      description: 'Watch as forms populate instantly with your saved data. Voice assistant guides you through any manual steps.',
      color: 'from-neon-pink to-neon-green',
      glowColor: 'neon-pink',
    },
  ];

  const features = [
    {
      icon: Mic,
      title: 'Voice Assistant',
      description: 'Get spoken guidance for each form field with natural language instructions and contextual help.',
      color: 'neon-blue',
    },
    {
      icon: Globe,
      title: 'Real-time Translation',
      description: 'Translate forms from English to 25+ languages instantly as you fill them out with AI precision.',
      color: 'neon-purple',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays secure with military-grade encryption and local storage options.',
      color: 'neon-green',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-neon-purple/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* How it works */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border border-neon-blue/30 text-neon-blue text-sm font-medium mb-6">
            <Brain className="h-4 w-4 mr-2" />
            AI-Powered Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">ZapFill.Ai</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get started in just three simple steps and transform how you interact with online forms forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue/50 to-transparent transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl backdrop-blur-sm border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-500 transform hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-neon-blue/20">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${step.glowColor}/30 relative`}>
                    <Icon className="h-10 w-10 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-20 blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                  </div>
                  <div className="text-sm font-semibold text-neon-blue mb-3 flex items-center">
                    <span className="w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white text-xs mr-2">
                      {index + 1}
                    </span>
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Powerful Features for <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">Modern Forms</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Advanced capabilities that make form filling not just faster, but smarter and more accessible than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`bg-gradient-to-br from-dark-800/50 to-dark-700/50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-${feature.color}/20 hover:border-${feature.color}/50 shadow-lg shadow-${feature.color}/20 relative`}>
                  <Icon className={`h-10 w-10 text-${feature.color}`} />
                  <div className={`absolute inset-0 rounded-2xl bg-${feature.color}/10 blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;