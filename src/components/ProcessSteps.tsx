import React from 'react';
import { ArrowRight, Upload, Scan, Settings, Download } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Project Consultation",
      description: "We discuss your requirements, timeline, and specific needs to create a tailored solution approach.",
      color: "from-royal-blue-600 to-royal-blue-700"
    },
    {
      icon: Scan,
      number: "02", 
      title: "3D Scanning & Data Capture",
      description: "Using advanced scanning technology, we capture precise geometric data of your physical component.",
      color: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      icon: Settings,
      number: "03",
      title: "CAD Model Creation",
      description: "Our engineers convert scan data into parametric CAD models with full design intent and specifications.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Download,
      number: "04",
      title: "Delivery & Support",
      description: "Receive your completed models with documentation and ongoing technical support for implementation.",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final delivery, we follow a systematic approach that ensures accuracy, 
            efficiency, and complete customer satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-royal-blue-200 via-rapid-orange-200 via-green-200 to-purple-200 max-w-5xl"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-royal-blue-100 mb-6 max-w-2xl mx-auto">
              Get a detailed quote and timeline for your reverse engineering project. Our team is ready to discuss your specific requirements.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;