import React from 'react';
import { ArrowRight, Scan, Settings, FileText, Printer, Cog, Layers, Wrench } from 'lucide-react';

const ServicesPage = () => {
  const allServices = [
    {
      icon: Scan,
      title: "Reverse Engineering",
      description: "Complete reverse engineering solutions from 3D scanning to CAD model creation with precision and accuracy.",
      features: ["3D Scanning", "Point Cloud Processing", "CAD Model Creation", "Design Analysis"],
      color: "from-royal-blue-600 to-royal-blue-700",
      bgColor: "bg-royal-blue-50",
      textColor: "text-royal-blue-600"
    },
    {
      icon: Printer,
      title: "3D Printing Services",
      description: "Advanced additive manufacturing solutions for prototyping and production using multiple technologies.",
      features: ["SLA Printing", "SLS Printing", "FDM Printing", "Metal 3D Printing"],
      color: "from-rapid-orange-600 to-rapid-orange-700",
      bgColor: "bg-rapid-orange-50",
      textColor: "text-rapid-orange-600"
    },
    {
      icon: Settings,
      title: "CAD Modeling",
      description: "Professional CAD modeling services for product design, engineering analysis, and manufacturing.",
      features: ["Parametric Modeling", "Surface Modeling", "Assembly Design", "Technical Drawings"],
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Cog,
      title: "Product Design",
      description: "Complete product development from concept to manufacturing-ready designs with industrial expertise.",
      features: ["Industrial Design", "Mechanical Engineering", "Design Optimization", "Prototyping"],
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Layers,
      title: "CAD Conversion",
      description: "Convert legacy 2D drawings and files into modern 3D CAD formats for enhanced productivity.",
      features: ["2D to 3D Conversion", "File Format Migration", "Design Modernization", "Data Recovery"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Manufacturing Support",
      description: "Comprehensive manufacturing solutions from design validation to production support.",
      features: ["DFM Analysis", "Tooling Design", "Quality Control", "Production Planning"],
      color: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Complete technical documentation services including drawings, specifications, and manuals.",
      features: ["Technical Drawings", "Assembly Instructions", "User Manuals", "Compliance Documentation"],
      color: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    },
    {
      icon: Scan,
      title: "Quality Inspection",
      description: "Advanced metrology and quality inspection services using 3D scanning and measurement technologies.",
      features: ["Dimensional Analysis", "GD&T Inspection", "First Article Inspection", "Quality Reports"],
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Engineering Services
            </h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering solutions from reverse engineering to manufacturing support. 
              We deliver precision, quality, and innovation in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-2xl p-12 text-white text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Need Custom Engineering Solutions?</h2>
            <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
              Our expert team can handle complex projects that require multiple services. 
              Get a comprehensive quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
                Contact Us for Custom Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;