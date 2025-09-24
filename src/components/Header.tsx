import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/images/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-950 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <img src={logo} alt="Alarmshield" className="h-20 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Contact
            </button>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className={`h-4 w-4 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`${isScrolled ? 'text-white' : 'text-white'}`}>
                +263 718 802 186S
              </span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-white' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left font-medium text-white hover:text-blue-600"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-medium text-white hover:text-blue-600"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-medium text-white hover:text-blue-600"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left font-medium text-white hover:text-blue-600"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-medium text-white hover:text-blue-600"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 pt-4 border-t text-sm">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-white">+263 718 802 186</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;