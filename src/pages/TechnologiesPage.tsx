import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Droplets, Layers, Award, Clock, Shield } from 'lucide-react';

const TechnologiesPage = () => {
  const technologies = [
    {
      icon: Layers,
      title: "SLS Technology",
      subtitle: "Selective Laser Sintering",
      description: "Advanced powder-based 3D printing for functional prototypes and end-use parts with exceptional mechanical properties.",
      features: ["No support structures needed", "High precision ±0.3mm", "Material efficiency", "Complex geometries"],
      applications: ["Functional prototypes", "End-use parts", "Complex assemblies", "Tooling & fixtures"],
      link: "/technologies/sls",
      color: "from-royal-blue-600 to-royal-blue-700",
      bgColor: "bg-royal-blue-50"
    },
    {
      icon: Droplets,
      title: "SLA Technology", 
      subtitle: "Stereolithography",
      description: "Precision resin-based printing delivering exceptional detail and smooth surface finishes for high-quality parts.",
      features: ["Ultra-fine details 0.025mm", "Smooth surface finish", "High accuracy ±0.1mm", "Fast print speed"],
      applications: ["Precision prototypes", "Medical models", "Miniature parts", "Master patterns"],
      link: "/technologies/sla",
      color: "from-rapid-orange-600 to-rapid-orange-700",
      bgColor: "bg-rapid-orange-50"
    },
    {
      icon: Zap,
      title: "FDM Technology",
      subtitle: "Fused Deposition Modeling", 
      description: "Cost-effective thermoplastic printing ideal for prototyping, tooling, and functional parts with engineering materials.",
      features: ["Cost effective", "Large build volumes", "Material variety", "Easy to use"],
      applications: ["Rapid prototyping", "Tooling & fixtures", "Educational models", "End-use parts"],
      link: "/technologies/fdm",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50"
    }
  ];

  const capabilities = [
    {
      icon: Award,
      title: "Industry-Leading Precision",
      description: "Achieve micron-level accuracy with our advanced 3D printing technologies and quality control processes."
    },
    {
      icon: Clock,
      title: "Rapid Turnaround",
      description: "Fast production times from hours to days, enabling quick iteration and reduced time-to-market."
    },
    {
      icon: Shield,
      title: "Material Expertise",
      description: "Extensive knowledge of materials and their properties to select the optimal solution for your application."
    }
  ];

  const comparisonData = [
    { feature: "Layer Resolution", sls: "0.1-0.15mm", sla: "0.025-0.1mm", fdm: "0.1-0.4mm" },
    { feature: "Surface Finish", sls: "Good", sla: "Excellent", fdm: "Fair" },
    { feature: "Support Structures", sls: "Not Required", sla: "Required", fdm: "Required" },
    { feature: "Material Options", sls: "Nylon, Glass-filled", sla: "Photopolymer resins", fdm: "Thermoplastics" },
    { feature: "Build Volume", sls: "Large", sla: "Medium", fdm: "Large" },
    { feature: "Cost per Part", sls: "Medium", sla: "Medium", fdm: "Low" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Advanced 3D Printing Technologies</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Cutting-edge additive manufacturing solutions for prototyping, production, and specialized applications. 
              Choose the right technology for your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three complementary 3D printing technologies, each optimized for specific applications and material requirements.
            </p>
          </div>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mr-6`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                      <p className="text-gray-600">{tech.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{tech.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <ul className="space-y-2">
                        {tech.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                            <span className="text-gray-600 text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    to={tech.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Learn More About {tech.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className={`relative animate-float ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`${tech.bgColor} rounded-2xl p-8`}>
                    <img
                      src={`https://images.pexels.com/photos/${3862627 + index}/pexels-photo-${3862627 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={tech.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key specifications and capabilities to choose the right technology for your project.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">SLS</th>
                    <th className="px-6 py-4 text-center font-semibold">SLA</th>
                    <th className="px-6 py-4 text-center font-semibold">FDM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.sls}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.sla}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.fdm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 3D Printing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced equipment, expert knowledge, and proven processes ensure exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Technology?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Our experts can help you select the optimal 3D printing technology for your specific application, 
            material requirements, and budget constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Technology Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;