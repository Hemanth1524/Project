import React from 'react';
import { Layers, DollarSign, Wrench, CheckCircle, ArrowRight, Zap, Award, Clock } from 'lucide-react';

const FDMPage = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Most affordable 3D printing technology with low material costs and minimal waste."
    },
    {
      icon: Wrench,
      title: "Easy to Use",
      description: "User-friendly technology with straightforward setup and operation procedures."
    },
    {
      icon: Layers,
      title: "Large Build Volume",
      description: "Capable of printing large parts and assemblies in a single build operation."
    },
    {
      icon: Award,
      title: "Material Variety",
      description: "Wide range of thermoplastic materials including engineering-grade options."
    }
  ];

  const applications = [
    {
      title: "Rapid Prototyping",
      description: "Quick and cost-effective prototypes for design validation and functional testing.",
      industries: ["Product Design", "Automotive", "Consumer Goods"]
    },
    {
      title: "Tooling & Fixtures",
      description: "Manufacturing aids, jigs, fixtures, and custom tools for production processes.",
      industries: ["Manufacturing", "Assembly", "Quality Control"]
    },
    {
      title: "Educational Models",
      description: "Anatomical models, architectural prototypes, and educational demonstration parts.",
      industries: ["Education", "Healthcare", "Architecture"]
    },
    {
      title: "End-Use Parts",
      description: "Functional components for low-volume production and custom applications.",
      industries: ["Aerospace", "Medical", "Industrial"]
    }
  ];

  const materials = [
    {
      name: "PLA",
      properties: ["Easy to print", "Biodegradable", "Low warping"],
      applications: ["Prototypes", "Educational models", "Decorative items"],
      color: "from-green-600 to-green-700",
      temp: "190-220°C"
    },
    {
      name: "ABS",
      properties: ["Impact resistant", "Heat resistant", "Durable"],
      applications: ["Functional parts", "Automotive", "Electronics housings"],
      color: "from-blue-600 to-blue-700",
      temp: "220-250°C"
    },
    {
      name: "PETG",
      properties: ["Chemical resistant", "Clear", "Food safe"],
      applications: ["Medical devices", "Food containers", "Protective equipment"],
      color: "from-purple-600 to-purple-700",
      temp: "220-250°C"
    },
    {
      name: "TPU",
      properties: ["Flexible", "Elastic", "Tear resistant"],
      applications: ["Gaskets", "Phone cases", "Flexible joints"],
      color: "from-rapid-orange-600 to-rapid-orange-700",
      temp: "210-230°C"
    },
    {
      name: "Nylon",
      properties: ["High strength", "Wear resistant", "Chemical resistant"],
      applications: ["Gears", "Bearings", "Industrial parts"],
      color: "from-indigo-600 to-indigo-700",
      temp: "240-260°C"
    },
    {
      name: "Carbon Fiber",
      properties: ["Lightweight", "High stiffness", "Conductive"],
      applications: ["Aerospace", "Automotive", "Drones"],
      color: "from-gray-600 to-gray-700",
      temp: "250-270°C"
    }
  ];

  const specifications = [
    { parameter: "Layer Height", value: "0.1 - 0.4 mm" },
    { parameter: "Build Volume", value: "Up to 400 x 400 x 400 mm" },
    { parameter: "Accuracy", value: "±0.2 mm" },
    { parameter: "Nozzle Diameter", value: "0.2 - 1.0 mm" },
    { parameter: "Print Speed", value: "30-150 mm/s" },
    { parameter: "Support Material", value: "Soluble & Breakaway" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Filament Heating",
      description: "Thermoplastic filament is heated to melting point in the extruder hotend."
    },
    {
      step: "2", 
      title: "Material Extrusion",
      description: "Molten plastic is extruded through a nozzle and deposited layer by layer."
    },
    {
      step: "3",
      title: "Layer Bonding",
      description: "Each layer fuses with the previous layer as it cools and solidifies."
    },
    {
      step: "4",
      title: "Support Removal",
      description: "Support structures are removed and parts undergo finishing if required."
    }
  ];

  const benefits = [
    "Most cost-effective 3D printing technology",
    "Wide variety of engineering thermoplastics",
    "Large build volumes for big parts",
    "Minimal post-processing requirements",
    "Excellent for functional prototypes",
    "Environmentally friendly material options",
    "Easy material changeover and maintenance",
    "Suitable for multi-material printing"
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                FDM Technology
                <span className="block text-rapid-orange-400">Fused Deposition Modeling</span>
              </h1>
              <p className="text-xl text-royal-blue-100 leading-relaxed mb-8">
                The most widely used 3D printing technology, offering cost-effective solutions for prototyping, 
                tooling, and end-use parts with a wide range of engineering materials.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Get FDM Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="FDM 3D Printing Technology"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How FDM Technology Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fused Deposition Modeling builds parts by heating thermoplastic filament and extruding it layer by layer 
              to create strong, functional parts with excellent mechanical properties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Layers className="w-8 h-8 text-royal-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The FDM Process</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                FDM technology works by feeding thermoplastic filament into a heated extruder, where it melts and is 
                deposited through a nozzle onto the build platform. The material quickly solidifies, bonding with the 
                previous layer to create strong, durable parts.
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
                alt="FDM Process"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FDM Technology Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why FDM is the most popular choice for functional prototypes and production parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

          {/* Additional Benefits */}
          <div className="bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose FDM for Your Project?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FDM Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rapid prototyping to end-use production, FDM technology serves a wide range of applications.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FDM Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive range of thermoplastic materials from basic prototyping to high-performance engineering applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-full h-2 bg-gradient-to-r ${material.color} rounded-full mb-4`}></div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{material.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{material.temp}</span>
                </div>
                
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
              Detailed specifications of our FDM 3D printing capabilities.
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
          <h2 className="text-3xl font-bold mb-4">Ready for Cost-Effective FDM Printing?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Get a detailed quote for your FDM 3D printing project and discover how this versatile technology 
            can meet your prototyping and production needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Request FDM Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Material Selection Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDMPage;