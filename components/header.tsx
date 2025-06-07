"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slide-up">
                 <img 
                src="./logo.png" 
                alt="Squeeze Berriez Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Squeeze Berriez
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 focus-visible"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 focus-visible"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("flavors")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 focus-visible"
            >
              Flavors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 focus-visible"
            >
              Contact
            </button>
<Button
  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 hover-lift animate-pulse-glow"
  onClick={() => window.location.href = 'tel:+918304905305'}
>
  <Phone className="w-4 h-4 mr-2" />
  Call Now
</Button>

<Button
  variant="outline"
  className="hover-lift"
  onClick={() =>
    window.open(
      'https://wa.me/918304905305?text=Hi%2C%20I%27m%20interested%20in%20buying%20your%20product.',
      '_blank'
    )
  }
>
  <ShoppingCart className="w-4 h-4 mr-2" />
  Buy (0)
</Button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left hover:scale-105 transform duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left hover:scale-105 transform duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("flavors")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left hover:scale-105 transform duration-200"
              >
                Flavors
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left hover:scale-105 transform duration-200"
              >
                Contact
              </button>
              <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 w-fit hover-lift">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}