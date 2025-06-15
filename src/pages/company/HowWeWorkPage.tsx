import React from 'react';
import { MessageSquare, Scan, Settings, FileCheck, Truck, HeadphonesIcon, ArrowRight, Clock, Shield, Users } from 'lucide-react';

const HowWeWorkPage = () => {
  const workflowSteps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your project requirements, timeline, and specific objectives.",
      details: [
        "Project scope analysis",
        "Technical requirements review",
        "Timeline and budget discussion",
        "Custom solution planning"
      ],
      color: "from-royal-blue-600 to-royal-blue-700"
    },
    {
      icon: Scan,
      number: "02",
      title: "Data Capture & Scanning",
      description: "Using advanced 3D scanning technology, we capture precise geometric data of your components.",
      details: [
        "High-resolution 3D scanning",
        "Multiple scanning techniques",
        "Quality verification checks",
        "Data optimization"
      ],
      color: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      icon: Settings,
      number: "03",
      title: "Processing & Modeling",
      description: "Our engineers convert scan data into parametric CAD models with full design intent.",
      details: [
        "Point cloud processing",
        "Surface reconstruction",
        "Parametric modeling",
        "Design optimization"
      ],
      color: "from-green-600 to-green-700"
    },
    {
      icon: FileCheck,
      number: "04",
      title: "Quality Assurance",
      description: "Comprehensive quality checks ensure accuracy and compliance with your specifications.",
      details: [
        "Dimensional verification",
        "Model validation",
        "Accuracy assessment",
        "Client review process"
      ],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Truck,
      number: "05",
      title: "Delivery & Documentation",
      description: "Final models are delivered with complete documentation and technical specifications.",
      details: [
        "Multiple file formats",
        "Technical drawings",
        "Project documentation",
        "Delivery confirmation"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: HeadphonesIcon,
      number: "06",
      title: "Ongoing Support",
      description: "Continued technical support and assistance for implementation and future modifications.",
      details: [
        "Technical consultation",
        "Implementation support",
        "Revision services",
        "Long-term partnership"
      ],
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  const principles = [
    {
      icon: Clock,
      title: "Efficiency First",
      description: "Streamlined processes and advanced automation ensure fast turnaround times without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Rigorous quality control at every step with 99.9% accuracy guarantee and comprehensive validation."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Dedicated project managers ensure clear communication and alignment with your specific requirements."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">How We Work</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Our proven 6-step methodology ensures consistent, high-quality results for every reverse engineering project. 
              From consultation to delivery, we maintain excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Working Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core principles guide every project we undertake, ensuring exceptional results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Detailed Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that has been refined over 15 years to deliver consistent, 
              high-quality results for every project.
            </p>
          </div>

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 mb-1">STEP {step.number}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative animate-float ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <img
                      src={`https://images.pexels.com/photos/${3862627 + index}/pexels-photo-${3862627 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <div className="text-center">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-medium`}>
                        Step {step.number}: {step.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Project Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most projects follow this timeline, though we can accommodate urgent requests and complex projects may require additional time.
            </p>
          </div>

          <div className="bg-gradient-to-r from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up">
            <div className="grid md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-royal-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Consultation</div>
                <div className="text-xs text-gray-600">2-4 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-rapid-orange-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Scanning</div>
                <div className="text-xs text-gray-600">4-8 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Processing</div>
                <div className="text-xs text-gray-600">1-2 days</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                <div className="text-sm font-medium text-gray-900 mb-1">QA Review</div>
                <div className="text-xs text-gray-600">4-6 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">5</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Delivery</div>
                <div className="text-xs text-gray-600">2-4 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">6</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Support</div>
                <div className="text-xs text-gray-600">Ongoing</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md">
                <Clock className="w-5 h-5 text-royal-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Total Timeline: 2-4 days typical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Process?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and show you how our proven methodology 
            can deliver exceptional results for your reverse engineering needs.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;