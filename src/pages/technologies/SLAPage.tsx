import React from 'react';
import { Droplets, Eye, Layers, CheckCircle, ArrowRight, Zap, Award, Clock } from 'lucide-react';

const SLAPage = () => {
  const advantages = [
    {
      icon: Eye,
      title: "Exceptional Detail",
      description: "Achieve ultra-fine details with layer resolutions as low as 0.025mm for intricate geometries."
    },
    {
      icon: Zap,
      title: "Smooth Surface Finish",
      description: "Superior surface quality straight from the printer, minimizing post-processing requirements."
    },
    {
      icon: Clock,
      title: "Fast Print Speed",
      description: "Entire layers cure simultaneously, making SLA ideal for complex parts with fine details."
    },
    {
      icon: Award,
      title: "High Accuracy",
      description: "Dimensional accuracy within ±0.1mm, perfect for precision applications and tight tolerances."
    }
  ];

  const applications = [
    {
      title: "Precision Prototypes",
      description: "Create highly detailed prototypes with smooth surfaces for design validation and testing.",
      industries: ["Product Design", "Consumer Electronics", "Jewelry"]
    },
    {
      title: "Medical Models",
      description: "Biocompatible resins for medical devices, dental applications, and surgical guides.",
      industries: ["Medical Devices", "Dental", "Healthcare"]
    },
    {
      title: "Miniature Parts",
      description: "Small, intricate components with fine features and complex internal geometries.",
      industries: ["Electronics", "Micro-mechanics", "Optics"]
    },
    {
      title: "Master Patterns",
      description: "High-quality patterns for casting, molding, and other manufacturing processes.",
      industries: ["Jewelry", "Investment Casting", "Manufacturing"]
    }
  ];

  const materials = [
    {
      name: "Standard Resin",
      properties: ["High detail", "Smooth finish", "General purpose"],
      applications: ["Prototypes", "Concept models", "Visual aids"],
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Tough Resin",
      properties: ["Impact resistant", "Durable", "ABS-like properties"],
      applications: ["Functional prototypes", "Mechanical parts", "Housings"],
      color: "from-green-600 to-green-700"
    },
    {
      name: "Flexible Resin",
      properties: ["Rubber-like", "Bendable", "Tear resistant"],
      applications: ["Gaskets", "Grips", "Flexible joints"],
      color: "from-purple-600 to-purple-700"
    },
    {
      name: "Castable Resin",
      properties: ["Burn-out clean", "High detail", "Investment casting"],
      applications: ["Jewelry", "Dental crowns", "Precision casting"],
      color: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      name: "Biocompatible Resin",
      properties: ["Medical grade", "Skin safe", "USP Class VI"],
      applications: ["Medical devices", "Dental appliances", "Surgical guides"],
      color: "from-red-600 to-red-700"
    },
    {
      name: "High Temperature Resin",
      properties: ["Heat resistant", "Stable", "HDT 238°C"],
      applications: ["Automotive", "Aerospace", "High-temp testing"],
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  const specifications = [
    { parameter: "Layer Height", value: "0.025 - 0.1 mm" },
    { parameter: "Build Volume", value: "Up to 300 x 300 x 400 mm" },
    { parameter: "Accuracy", value: "±0.1 mm" },
    { parameter: "Surface Finish", value: "Ra 1-3 μm" },
    { parameter: "Minimum Feature", value: "0.2 mm" },
    { parameter: "Build Speed", value: "10-50 mm/hour (vertical)" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Model Preparation",
      description: "3D model is sliced into layers and support structures are generated automatically."
    },
    {
      step: "2", 
      title: "Resin Curing",
      description: "UV laser traces each layer pattern, selectively curing liquid resin into solid plastic."
    },
    {
      step: "3",
      title: "Layer Building",
      description: "Build platform moves up and resin tank slides to coat the next layer."
    },
    {
      step: "4",
      title: "Post-Processing",
      description: "Parts are washed in IPA, UV post-cured, and support structures are removed."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                SLA Technology
                <span className="block text-rapid-orange-400">Stereolithography</span>
              </h1>
              <p className="text-xl text-royal-blue-100 leading-relaxed mb-8">
                Precision resin-based 3D printing technology that delivers exceptional detail and smooth surface finishes 
                for high-quality prototypes and end-use parts.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Get SLA Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SLA 3D Printing Technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How SLA Technology Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stereolithography uses a UV laser to selectively cure liquid photopolymer resin layer by layer, 
              creating highly detailed parts with exceptional surface quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Droplets className="w-8 h-8 text-royal-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The SLA Process</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                SLA technology begins with a vat of liquid photopolymer resin. A UV laser beam traces the cross-sectional 
                pattern of each layer, instantly curing the resin into solid plastic. The build platform then moves up 
                slightly, and the process repeats until the entire part is complete.
              </p>
              
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-8 h-8 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SLA Process"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLA Technology Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why SLA is the preferred choice for high-detail prototypes and precision applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLA Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From detailed prototypes to specialized manufacturing applications, SLA serves diverse industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{application.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{application.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Key Industries:</div>
                  <div className="flex flex-wrap gap-2">
                    {application.industries.map((industry, idx) => (
                      <span key={idx} className="px-3 py-1 bg-royal-blue-100 text-royal-blue-700 text-xs font-medium rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLA Resin Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized photopolymer resins engineered for specific applications and performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-full h-2 bg-gradient-to-r ${material.color} rounded-full mb-4`}></div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{material.name}</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Properties:</div>
                  <div className="space-y-1">
                    {material.properties.map((property, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-gray-600">{property}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Applications:</div>
                  <div className="space-y-1">
                    {material.applications.map((app, idx) => (
                      <div key={idx} className="text-xs text-gray-600">• {app}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications of our SLA 3D printing capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-sm font-semibold text-gray-600 mb-2">{spec.parameter}</div>
                  <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready for Precision SLA Printing?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Get a detailed quote for your SLA 3D printing project and discover how this precision technology 
            can bring your designs to life with exceptional detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Request SLA Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Material Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLAPage;