import React from 'react';
import { Scan, Settings, FileText, CheckCircle } from 'lucide-react';

const ServiceDescription = () => {
  const services = [
    {
      icon: Scan,
      title: "3D Scanning",
      description: "High-precision 3D scanning using advanced optical and laser scanning technologies for accurate data capture.",
      gradient: "from-royal-blue-600 to-royal-blue-700"
    },
    {
      icon: Settings,
      title: "CAD Modeling",
      description: "Convert point cloud data into parametric CAD models with full design intent and manufacturing specifications.",
      gradient: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete technical documentation including drawings, specifications, and manufacturing guidelines.",
      gradient: "from-green-600 to-green-700"
    }
  ];

  const benefits = [
    "Reduce product development time by up to 70%",
    "Achieve micron-level accuracy in measurements",
    "Preserve legacy products and improve designs",
    "Cost-effective solution for complex geometries",
    "Seamless integration with existing workflows",
    "Expert consultation throughout the process"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Reverse Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive reverse engineering services help you recreate, improve, and manufacture products with unparalleled precision and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up group">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Reverse Engineering Services?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in precision engineering, we deliver results that exceed expectations. 
              Our state-of-the-art equipment and expert team ensure your project is completed with the highest 
              standards of quality and accuracy.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <img
              src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="CAD Design Process"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/20 to-transparent rounded-2xl"></div>
            
            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 animate-slide-up">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-royal-blue-900">±0.05mm</div>
                    <div className="text-sm text-gray-600">Typical Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rapid-orange-600">24-72h</div>
                    <div className="text-sm text-gray-600">Turnaround Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;