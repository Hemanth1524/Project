import React from 'react';
import { Zap, Shield, Layers, CheckCircle, ArrowRight, Settings, Award, Clock } from 'lucide-react';

const SLSPage = () => {
  const advantages = [
    {
      icon: Shield,
      title: "High Precision",
      description: "Achieve exceptional accuracy with layer resolutions as fine as 0.1mm for detailed components."
    },
    {
      icon: Zap,
      title: "No Support Structures",
      description: "Complex geometries and overhangs are naturally supported by surrounding powder material."
    },
    {
      icon: Layers,
      title: "Material Efficiency",
      description: "Unused powder can be recycled, making SLS one of the most material-efficient 3D printing methods."
    },
    {
      icon: Settings,
      title: "Versatile Materials",
      description: "Wide range of materials including nylon, glass-filled nylon, and specialized engineering plastics."
    }
  ];

  const applications = [
    {
      title: "Functional Prototypes",
      description: "Create working prototypes with mechanical properties similar to injection-molded parts.",
      industries: ["Automotive", "Aerospace", "Consumer Products"]
    },
    {
      title: "End-Use Parts",
      description: "Produce final production parts for low to medium volume manufacturing runs.",
      industries: ["Medical Devices", "Industrial Equipment", "Electronics"]
    },
    {
      title: "Complex Assemblies",
      description: "Print moving assemblies and interlocking parts in a single build without assembly.",
      industries: ["Robotics", "Machinery", "Automotive"]
    },
    {
      title: "Tooling & Fixtures",
      description: "Manufacturing aids, jigs, and fixtures for production and assembly processes.",
      industries: ["Manufacturing", "Aerospace", "Automotive"]
    }
  ];

  const materials = [
    {
      name: "PA12 (Nylon 12)",
      properties: ["High strength", "Chemical resistance", "Flexibility"],
      applications: ["Functional prototypes", "End-use parts", "Automotive components"]
    },
    {
      name: "PA11 (Nylon 11)",
      properties: ["Bio-based", "Impact resistance", "Chemical stability"],
      applications: ["Medical devices", "Automotive parts", "Consumer goods"]
    },
    {
      name: "Glass-Filled Nylon",
      properties: ["High stiffness", "Dimensional stability", "Heat resistance"],
      applications: ["Structural components", "Industrial parts", "Aerospace applications"]
    },
    {
      name: "TPU (Flexible)",
      properties: ["Elastomeric", "Tear resistance", "Flexibility"],
      applications: ["Gaskets", "Flexible hinges", "Protective components"]
    }
  ];

  const specifications = [
    { parameter: "Layer Height", value: "0.1 - 0.15 mm" },
    { parameter: "Build Volume", value: "Up to 550 x 550 x 750 mm" },
    { parameter: "Accuracy", value: "±0.3 mm or ±0.3%" },
    { parameter: "Surface Finish", value: "Ra 6-10 μm" },
    { parameter: "Build Speed", value: "20-25 mm/hour (vertical)" },
    { parameter: "Powder Recycling", value: "Up to 50% reusable" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                SLS Technology
                <span className="block text-rapid-orange-400">Selective Laser Sintering</span>
              </h1>
              <p className="text-xl text-royal-blue-100 leading-relaxed mb-8">
                Advanced powder-based 3D printing technology that delivers exceptional precision and material properties 
                for functional prototypes and end-use production parts.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Get SLS Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SLS 3D Printing Technology"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How SLS Technology Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selective Laser Sintering uses a high-powered laser to fuse powdered materials layer by layer, 
              creating strong, functional parts with excellent mechanical properties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The SLS Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-royal-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Powder Preparation</h4>
                    <p className="text-gray-600">Fine powder material is spread in a thin, uniform layer across the build platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rapid-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Laser Sintering</h4>
                    <p className="text-gray-600">A high-powered laser selectively fuses powder particles according to the 3D model cross-section.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Layer Building</h4>
                    <p className="text-gray-600">The platform lowers, new powder is spread, and the process repeats layer by layer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Part Extraction</h4>
                    <p className="text-gray-600">Finished parts are extracted from the powder bed and excess powder is removed and recycled.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SLS Process Diagram"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLS Technology Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why SLS is the preferred choice for functional prototypes and production parts.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLS Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rapid prototyping to end-use production, SLS technology serves diverse manufacturing needs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wide range of engineering-grade materials to meet your specific application requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
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
              Detailed specifications of our SLS 3D printing capabilities.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Experience SLS Technology?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Get a detailed quote for your SLS 3D printing project and discover how this advanced technology 
            can accelerate your product development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Request SLS Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Technical Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLSPage;