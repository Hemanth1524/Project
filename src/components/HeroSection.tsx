import React from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rapid-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-rapid-orange-600/20 border border-rapid-orange-400/30 rounded-full text-rapid-orange-300 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Advanced Engineering Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Reverse Engineering
                <span className="block text-rapid-orange-400">Services</span>
              </h1>
              <p className="text-xl text-royal-blue-100 leading-relaxed max-w-2xl">
                Transform your existing products into precise digital models with our cutting-edge 3D scanning and reverse engineering expertise. From concept to CAD, we deliver accuracy you can trust.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-rapid-orange-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-rapid-orange-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Fast Turnaround</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-rapid-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Latest Technology</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="3D Scanning Process"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl text-gray-900 animate-slide-up">
              <div className="text-3xl font-bold text-royal-blue-900">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-rapid-orange-600 rounded-xl p-6 shadow-xl text-white animate-slide-up">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-rapid-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;