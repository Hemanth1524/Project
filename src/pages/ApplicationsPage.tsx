import React from 'react';
import { Car, Plane, Heart, Cog, Smartphone, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

const ApplicationsPage = () => {
  const applications = [
    {
      icon: Car,
      title: "Automotive",
      description: "Reverse engineering solutions for automotive components, from legacy parts to performance optimization.",
      services: ["Engine component recreation", "Body panel reverse engineering", "Interior part modeling", "Performance part optimization"],
      caseStudy: "Recreated discontinued brake caliper with 99.8% accuracy",
      color: "from-royal-blue-600 to-royal-blue-700",
      bgColor: "bg-royal-blue-50"
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "Precision reverse engineering for aerospace components with strict quality and certification requirements.",
      services: ["Aircraft component analysis", "Engine part recreation", "Structural component modeling", "Compliance documentation"],
      caseStudy: "Reverse engineered critical turbine blade for military aircraft",
      color: "from-rapid-orange-600 to-rapid-orange-700",
      bgColor: "bg-rapid-orange-50"
    },
    {
      icon: Heart,
      title: "Medical Devices",
      description: "Biocompatible reverse engineering solutions for medical devices and healthcare applications.",
      services: ["Surgical instrument modeling", "Prosthetic component design", "Medical device housing", "Biocompatible material analysis"],
      caseStudy: "Developed custom prosthetic components with patient-specific fit",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50"
    },
    {
      icon: Cog,
      title: "Industrial Equipment",
      description: "Heavy machinery and industrial equipment reverse engineering for maintenance and improvement.",
      services: ["Machinery component recreation", "Wear part optimization", "Assembly documentation", "Performance enhancement"],
      caseStudy: "Modernized 30-year-old production line with improved efficiency",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      icon: Smartphone,
      title: "Consumer Electronics",
      description: "Precise reverse engineering for consumer electronics housings, components, and assemblies.",
      services: ["Housing design analysis", "Component miniaturization", "Assembly optimization", "Material selection"],
      caseStudy: "Reverse engineered smartphone housing with improved durability",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      icon: Wrench,
      title: "Manufacturing Tools",
      description: "Custom tooling and fixture reverse engineering for manufacturing and assembly processes.",
      services: ["Jig and fixture design", "Custom tool creation", "Assembly aid development", "Quality control tools"],
      caseStudy: "Created custom assembly fixtures reducing production time by 40%",
      color: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-50"
    }
  ];

  const benefits = [
    "Reduce development time by up to 70%",
    "Achieve micron-level accuracy in measurements", 
    "Preserve legacy products and improve designs",
    "Cost-effective solution for complex geometries",
    "Seamless integration with existing workflows",
    "Expert consultation throughout the process"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Application Analysis",
      description: "We analyze your specific industry requirements and application constraints."
    },
    {
      step: "2",
      title: "Technology Selection", 
      description: "Select optimal scanning and modeling technologies for your application."
    },
    {
      step: "3",
      title: "Industry Compliance",
      description: "Ensure all work meets relevant industry standards and regulations."
    },
    {
      step: "4",
      title: "Specialized Delivery",
      description: "Deliver results in formats and documentation specific to your industry."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industry Applications</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Specialized reverse engineering solutions tailored to meet the unique requirements 
              and standards of diverse industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automotive to aerospace, medical devices to consumer electronics, 
              we deliver specialized solutions for every industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up border border-gray-100" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center mr-4`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {app.services.map((service, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className={`${app.bgColor} rounded-lg p-4 mb-6`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Success Story:</h4>
                  <p className="text-gray-700 text-sm italic">"{app.caseStudy}"</p>
                </div>

                {/* CTA */}
                <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${app.color} bg-clip-text text-transparent hover:underline transition-colors duration-300`}>
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our process is tailored to meet the unique requirements, standards, and regulations of each industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Industries Choose Rapid3D
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our deep understanding of industry-specific requirements, combined with cutting-edge technology 
                and proven expertise, makes us the preferred partner for reverse engineering projects across 
                diverse sectors.
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
                alt="Industry Applications"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industry Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across industries with measurable impact on our clients' success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-royal-blue-600 mb-2">6</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-rapid-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Industry-Specific Needs?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Our industry experts are ready to discuss your specific requirements and develop 
            a customized reverse engineering solution for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Industry Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;