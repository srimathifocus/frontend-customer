import React, { useState, useEffect } from 'react';
import { Gem, Star, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    // Handle demo request
  };

  const benefits = [
    { icon: Star, text: '99.9% Uptime Guarantee' },
    { icon: Shield, text: 'Bank-Grade Security' },
    { icon: Zap, text: 'Lightning Fast Processing' }
  ];

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-right">
            <div className="inline-flex items-center px-4 py-2 bg-[#00296b]/10 dark:bg-blue-900/30 rounded-full mb-6 animate-bounce-slow">
              <Gem className="h-4 w-4 text-[#00296b] dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-[#00296b] dark:text-blue-400">
                India's #1 Pawn Jeweller Software
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00296b] to-blue-600"> Jewellery Business</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Complete billing solution for pawn jewellers with advanced inventory management, 
              seamless transactions, and powerful reporting tools.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <benefit.icon className="h-5 w-5 text-[#00296b] dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
              >
                Get Free Demo
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-[#00296b] text-[#00296b] dark:border-blue-400 dark:text-blue-400 font-semibold rounded-lg hover:bg-[#00296b] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300"
              >
                View Features
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-fade-left">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Start Your Free Demo
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get onboarded within 1 hour - No credit card required
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <input
                    type="text"
                    placeholder="Business Name"
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: '500ms' }}
                >
                  Request Free Demo
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                ✓ No spam, ever. ✓ Free setup & training included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;