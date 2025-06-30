import React from 'react';
import { Users, Target, Lightbulb, Globe, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '100+', label: 'Forms Filled', icon: Target },
    // { number: '50+', label: 'Supported Sites', icon: Globe },
    { number: '5+', label: 'Languages', icon: Globe },
    { number: '99.9%', label: 'Accuracy Rate', icon: Award },
  ];

  const team = [
    {
      name: 'Naina',
      // role: 'CEO & Co-founder',
      // description: 'Former Google PM with 10+ years in AI and accessibility.',
    },
    {
      name: 'Subham',
      // role: 'CTO & Co-founder',
      // description: 'AI engineer specializing in NLP and voice recognition systems.',
    },
    {
      name: 'Gowthami',
      // role: 'CTO & Co-founder',
      // description: 'AI engineer specializing in NLP and voice recognition systems.',
    },
    {
      name: 'Venkat',
      // role: 'CTO & Co-founder',
      // description: 'AI engineer specializing in NLP and voice recognition systems.',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl animate-pulse-neon"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl animate-pulse-neon" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-19 relative z-10">
      {/* Hero Section */}
      <section className='text-center mb-16 animate-slide-up text-white py-10'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Form Filler</span>
          </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make digital forms accessible, efficient, and effortless for everyone. 
              Through the power of AI, voice technology, and intelligent translation, we're transforming 
              how people interact with online forms worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-[#1e1e2f] py-6 px-4 rounded-xl shadow-lg border border-[#2c2c3e]"
                >
                  <div className="bg-[#3b3b5c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Forms are everywhere in our digital world, from job applications to medical questionnaires, 
                from government services to online shopping. Yet filling them out remains tedious, repetitive, 
                and often frustrating.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                We believe technology should eliminate these pain points, not create them. That's why we built 
                Form Filler with three core principles: accessibility, intelligence, and privacy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-300">Made with Purpose</div>
                  <div className="text-gray-400">Every feature designed to improve user experience</div>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <Lightbulb className="h-12 w-12 mb-6" />
                <blockquote className="text-lg italic mb-4">
                  "We started Form Filler because we were tired of filling out the same information 
                  over and over again. Now millions of people save hours every month."
                </blockquote>
                <cite className="font-semibold">— Naina</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-300 mb-6">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, natural language processing, and machine learning 
              to deliver an exceptional user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Form Recognition</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms that understand form structures and field types 
                across thousands of websites with 99.9% accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voice Technology</h3>
              <p className="text-gray-600">
                Natural language processing powers our voice assistant, providing contextual guidance 
                and hands-free form completion in multiple languages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Translation</h3>
              <p className="text-gray-600">
                Neural machine translation enables instant form translation between 25+ language pairs 
                while preserving context and meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-300 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A diverse group of engineers, designers, and researchers united by a passion 
              for making technology more accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-600 p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">{member.name}</h3>
                {/* <div className="text-primary-600 font-medium mb-4">{member.role}</div> */}
                {/* <p className="text-gray-600">{member.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;