import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Reverse Engineering', href: '#reverse-engineering' },
    { label: '3D Scanning', href: '#3d-scanning' },
    { label: 'CAD Modeling', href: '#cad-modeling' },
    { label: '3D Printing', href: '#3d-printing' },
    { label: 'Product Design', href: '#product-design' }
  ];

  const industries = [
    { label: 'Automotive', href: '#automotive' },
    { label: 'Aerospace', href: '#aerospace' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Medical Devices', href: '#medical' },
    { label: 'Consumer Products', href: '#consumer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-royal-blue-600 to-royal-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R3D</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white">Rapid3D</h1>
                <p className="text-xs text-gray-400">Engineering Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of reverse engineering and 3D scanning services with over 15 years of experience 
              in precision engineering solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-rapid-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-rapid-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Coimbatore Office */}
              <div>
                <h4 className="font-semibold text-rapid-orange-400 mb-2">Coimbatore Office</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">123 Industrial Estate, Peelamedu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href="tel:+914221234567" className="text-gray-400 hover:text-white transition-colors duration-300">
                      +91 422 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Chennai Office */}
              <div>
                <h4 className="font-semibold text-rapid-orange-400 mb-2">Chennai Office</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">456 IT Corridor, OMR Road</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href="tel:+914498765439" className="text-gray-400 hover:text-white transition-colors duration-300">
                      +91 44 987 6543
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="mailto:info@rapid3d.co.in" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  info@rapid3d.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest news and updates about our engineering solutions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Rapid3D Engineering Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;