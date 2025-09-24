import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(' + heroImage + ')'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your Safety is Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {' '}Priority
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
           “Driven by integrity and vigilance, powered by expertise and reliability, we put our customers first with round-the-clock 24/7 protection you can always trust.”
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button 
              onClick={scrollToContact}
              className="group bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-8 text-white">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;