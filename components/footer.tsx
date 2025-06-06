"use client"

import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Squeeze Berriez
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Thrissur's favorite quality fruit beverage brand, bringing you 10 unique flavors of refreshing drinks made
              with premium quality ingredients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576764943520"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/squeezeberriez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                title="Twitter link coming soon"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#flavors" className="text-gray-300 hover:text-white">Our Flavors</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/bulk-Order" className="text-gray-300 hover:text-white">Wholesale</a></li>
              <li><a href="/bulk-Order" className="text-gray-300 hover:text-white">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Our Flavors */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Flavors</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Guava Fizz</li>
              <li>Pineapple Chilli</li>
              <li>Ice Cream Soda</li>
              <li>Mango Fizz</li>
              <li>Coconut Splash</li>
              <li>Green Apple Zing</li>
              <li>Watermelon Wave</li>
              <li>Blueberry Burst</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/RxwePM3xKBHM3Fzf8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Round South, Thrissur<br />Kerala 680001, India
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+918304905305" className="text-gray-300 hover:text-white transition-colors">
                  +91 83049 05305
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:squeezeberriez@gmail.com" className="text-gray-300 hover:text-white transition-colors">
squeezeberriez@gmail.com                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
              <p className="text-sm font-medium">Open Daily</p>
              <p className="text-sm text-gray-200">8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
<div className="border-t border-gray-700 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <p className="text-gray-300 text-center md:text-left">
      All rights reserved © 2025 Squeeze Berriez. Developed by{" "}
      <a
        href="https://www.digitalproductsolutions.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:underline"
      >
        Digital Product Solutions
      </a>,TVM Kerala.
    </p>
    <div className="flex space-x-6 text-sm">
      <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
      <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
      <a href="#" className="text-gray-300 hover:text-white">Refund Policy</a>
    </div>
  </div>
</div>

      </div>
    </footer>
  )
}
