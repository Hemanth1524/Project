import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const ContactCard = () => {
  const offices = [
    {
      city: "Coimbatore",
      address: "123 Industrial Estate, Peelamedu",
      phone: "+91 422 123 4567",
      email: "coimbatore@rapid3d.co.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      city: "Chennai", 
      address: "456 IT Corridor, OMR Road",
      phone: "+91 44 987 6543",
      email: "chennai@rapid3d.co.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your reverse engineering project? Contact our expert team for a detailed consultation 
            and competitive quote tailored to your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300">
                      <option>Reverse Engineering</option>
                      <option>3D Scanning</option>
                      <option>CAD Modeling</option>
                      <option>3D Printing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center px-8 py-4 bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-rapid-orange-600 mr-2" />
                  {office.city} Office
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-royal-blue-600 hover:underline text-sm">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-royal-blue-600 hover:underline text-sm">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-2xl p-6 text-white animate-fade-in">
              <h4 className="text-lg font-bold mb-2">Need Immediate Assistance?</h4>
              <p className="text-sm text-royal-blue-100 mb-4">
                Call us directly for urgent inquiries or technical support.
              </p>
              <a 
                href="tel:+914221234567" 
                className="inline-flex items-center px-4 py-2 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;