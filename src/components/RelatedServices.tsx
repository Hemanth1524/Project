import React from 'react';
import { Printer, Cog, Layers, Wrench, ArrowRight } from 'lucide-react';

const RelatedServices = () => {
  const services = [
    {
      icon: Printer,
      title: "3D Printing Services",
      description: "Rapid prototyping and production using advanced additive manufacturing technologies.",
      features: ["SLA/SLS Printing", "Metal 3D Printing", "Rapid Prototyping"],
      color: "from-royal-blue-600 to-royal-blue-700",
      bgColor: "bg-royal-blue-50",
      textColor: "text-royal-blue-600"
    },
    {
      icon: Cog,
      title: "Product Design",
      description: "Complete product development from concept to manufacturing-ready designs.",
      features: ["Industrial Design", "Mechanical Engineering", "Design Optimization"],
      color: "from-rapid-orange-600 to-rapid-orange-700",
      bgColor: "bg-rapid-orange-50",
      textColor: "text-rapid-orange-600"
    },
    {
      icon: Layers,
      title: "CAD Conversion",
      description: "Convert 2D drawings and legacy files into modern 3D CAD formats.",
      features: ["2D to 3D Conversion", "File Format Migration", "Design Modernization"],
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Wrench,
      title: "Manufacturing Support",
      description: "Complete manufacturing solutions from design validation to production.",
      features: ["DFM Analysis", "Tooling Design", "Quality Control"],
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Related Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions to support your entire product development lifecycle. 
            From initial concept to final production, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up group border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className={`inline-block px-3 py-1 ${service.bgColor} ${service.textColor} text-xs font-medium rounded-full mr-2 mb-2`}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`inline-flex items-center text-sm font-semibold ${service.textColor} hover:underline transition-colors duration-300`}>
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Save time and costs with our integrated engineering solutions. We can handle your complete project 
              from reverse engineering to final production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Get Comprehensive Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 hover:border-royal-blue-600 hover:text-royal-blue-600 text-gray-700 font-semibold rounded-lg transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;