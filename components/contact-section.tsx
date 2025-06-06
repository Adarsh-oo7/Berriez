"use client"

import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Visit Us & Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come visit our store in Thrissur or get in touch with us for bulk orders, wholesale pricing, or any
            questions about our refreshing beverages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Store Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      Ms Abhishek<br />
                      Manchakkal House<br />
                      Chentrappinni East, Thrissur<br />
                      Kerala 680687, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 83049 05305</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 9:00 AM - 6:00 PM<br />
                      <span className="text-green-600 font-medium">Open all days!</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">squeezeberriez@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us on Map</h3>
              <div className="bg-gray-200 h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.836307779026!2d76.1512736!3d10.3549704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f5ea2891c695%3A0x7f65d9a269033ff8!2sSqueezeberriez!5e0!3m2!1sen!2sin!4v1749155976119!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open('https://maps.app.goo.gl/RxwePM3xKBHM3Fzf8?g_st=aw', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form and Quick Actions */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Wholesale Orders</option>
                    <option>Bulk Purchase</option>
                    <option>Product Feedback</option>
                    <option>Store Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea placeholder="Tell us how we can help you..." className="h-32" />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button
                  className="w-full bg-white text-green-600 hover:bg-gray-100"
                  onClick={() => window.location.href = 'tel:+918304905305'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Immediate Order
                </Button>

                <Button
                  className="w-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 border border-white"
                  onClick={() =>
                    window.open('https://wa.me/918304905305?text=Hi%2C%20I%27m%20interested%20in%20your%20products.', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>

                <Button
                  className="w-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 border border-white"
                  onClick={() =>
                    window.open('https://maps.app.goo.gl/RxwePM3xKBHM3Fzf8?g_st=aw', '_blank')}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
