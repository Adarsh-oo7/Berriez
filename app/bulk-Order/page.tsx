"use client"
import React, { useState, useEffect } from 'react';
import { Package, Truck, Calculator, Users, CheckCircle, Phone, Mail, MapPin, Clock, Star, TrendingUp } from 'lucide-react';

const BulkOrderPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(24);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('pricing');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingTiers = [
    { min: 24, max: 99, price: 13.5, discount: '5%', popular: false },
    { min: 100, max: 499, price: 13.2, discount: '12%', popular: true },
    { min: 500, max: 999, price: 13.0, discount: '15%', popular: false },
    { min: 1000, max: Infinity, price: 12.8, discount: '20%', popular: false }
  ];

  const features = [
    { icon: Package, title: "Premium Quality", desc: "300ml perfect serving size with 3-month shelf life" },
    { icon: Truck, title: "Free Delivery", desc: "Complimentary shipping on orders above ₹5,000" },
    { icon: Users, title: "Bulk Discounts", desc: "Up to 20% off on large quantity orders" },
    { icon: CheckCircle, title: "Quality Assured", desc: "100% quality guarantee with return policy" }
  ];

  const calculateTotal = (quantity) => {
    const tier = pricingTiers.find(t => quantity >= t.min && quantity <= t.max);
    return tier ? (quantity * tier.price).toFixed(2) : 0;
  };

  const getCurrentTier = (quantity) => {
    return pricingTiers.find(t => quantity >= t.min && quantity <= t.max);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">Bulk Order Details</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Unlock wholesale pricing and premium benefits for your business needs
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">₹12.8+</div>
                <div className="text-sm opacity-80">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24+</div>
                <div className="text-sm opacity-80">Min Order</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">20%</div>
                <div className="text-sm opacity-80">Max Discount</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div className={`py-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-500">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">300ml</div>
                <div className="text-gray-600">Perfect Serving Size</div>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-green-700">3 Months</div>
                <div className="text-gray-600">Shelf Life</div>
                <div className="w-16 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">24 Pcs</div>
                <div className="text-gray-600">Per Case</div>
                <div className="w-16 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Wholesale Pricing Available</h3>
              <p className="text-xl text-gray-600 mb-6">Special rates for bulk orders starting from ₹12.8 per bottle</p>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Wholesale Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b">
            {[
              { id: 'pricing', label: 'Pricing Tiers', icon: TrendingUp },
              { id: 'calculator', label: 'Price Calculator', icon: Calculator },
              { id: 'features', label: 'Features', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'pricing' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">Pricing Tiers</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingTiers.map((tier, index) => (
                    <div
                      key={index}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        tier.popular
                          ? 'border-blue-500 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800 mb-2">
                          ₹{tier.price}
                        </div>
                        <div className="text-sm text-gray-600 mb-4">per bottle</div>
                        <div className="text-lg font-semibold text-green-600 mb-4">
                          {tier.discount} OFF
                        </div>
                        <div className="text-sm text-gray-500">
                          {tier.min}-{tier.max === Infinity ? '∞' : tier.max} pieces
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'calculator' && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-8">Price Calculator</h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity (pieces)
                    </label>
                    <input
                      type="number"
                      min="24"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(parseInt(e.target.value) || 24)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    />
                  </div>
                  
                  {getCurrentTier(selectedQuantity) && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Price per bottle:</span>
                        <span className="text-xl font-bold text-blue-600">
                          ₹{getCurrentTier(selectedQuantity).price}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Discount:</span>
                        <span className="text-green-600 font-semibold">
                          {getCurrentTier(selectedQuantity).discount}
                        </span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total Amount:</span>
                          <span className="text-2xl font-bold text-green-600">
                            ₹{calculateTotal(selectedQuantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Bulk Orders?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Place Your Bulk Order?</h2>
            <p className="text-xl opacity-90">Contact our sales team for personalized pricing and support</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+91 83049 05305</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-green-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">squeezeberriez@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
              <Clock className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="opacity-90">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderPage;