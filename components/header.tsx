"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-700/95 backdrop-blur-md shadow-lg" : "bg-purple-700 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="./logo.png" 
              alt="Squeeze Berriez Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
              SQUEEZE BERRIEZ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-yellow-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-yellow-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("flavors")}
              className="text-yellow-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              Flavors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-yellow-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              Contact
            </button>
            
            <button
              className="bg-yellow-400 text-purple-700 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg transform hover:shadow-xl"
              onClick={() => window.location.href = 'tel:+918304905305'}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>

            <button
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg"
              onClick={() =>
                window.open(
                  'https://wa.me/918304905305?text=Hi%2C%20I%27m%20interested%20in%20buying%20your%20product.',
                  '_blank'
                )
              }
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy (0)</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-400/30 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-yellow-300 hover:text-yellow-400 transition-colors text-left hover:scale-105 transform duration-200 font-semibold text-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-yellow-300 hover:text-yellow-400 transition-colors text-left hover:scale-105 transform duration-200 font-semibold text-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("flavors")}
                className="text-yellow-300 hover:text-yellow-400 transition-colors text-left hover:scale-105 transform duration-200 font-semibold text-lg"
              >
                Flavors
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-yellow-300 hover:text-yellow-400 transition-colors text-left hover:scale-105 transform duration-200 font-semibold text-lg"
              >
                Contact
              </button>
              <button 
                className="bg-yellow-400 text-purple-700 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 w-fit flex items-center space-x-2 mt-4"
                onClick={() => window.location.href = 'tel:+918304905305'}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button 
                className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-purple-700 transition-all duration-300 w-fit flex items-center space-x-2"
                onClick={() =>
                  window.open(
                    'https://wa.me/918304905305?text=Hi%2C%20I%27m%20interested%20in%20buying%20your%20product.',
                    '_blank'
                  )
                }
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy (0)</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}