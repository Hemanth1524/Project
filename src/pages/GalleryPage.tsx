import React from 'react';
import { ArrowRight, Eye, Download, Zap } from 'lucide-react';

const GalleryPage = () => {
  const projects = [
    {
      title: "Automotive Engine Component",
      category: "Automotive",
      description: "Reverse engineered vintage engine block with 99.8% accuracy",
      image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLS", "Nylon", "Functional Prototype"]
    },
    {
      title: "Aerospace Turbine Blade",
      category: "Aerospace", 
      description: "High-precision turbine blade recreation for military aircraft",
      image: "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLA", "High-Temp Resin", "Critical Component"]
    },
    {
      title: "Medical Device Housing",
      category: "Medical",
      description: "Biocompatible housing for surgical instrument",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLA", "Biocompatible", "Medical Grade"]
    },
    {
      title: "Industrial Gear Assembly",
      category: "Industrial",
      description: "Complex gear system for heavy machinery",
      image: "https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["FDM", "Nylon", "Functional Parts"]
    },
    {
      title: "Consumer Electronics Case",
      category: "Electronics",
      description: "Smartphone housing with improved durability",
      image: "https://images.pexels.com/photos/3862629/pexels-photo-3862629.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLA", "Tough Resin", "Consumer Product"]
    },
    {
      title: "Custom Manufacturing Jig",
      category: "Tooling",
      description: "Assembly fixture reducing production time by 40%",
      image: "https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["FDM", "ABS", "Manufacturing Aid"]
    },
    {
      title: "Precision Optical Component",
      category: "Optics",
      description: "High-precision lens housing for scientific equipment",
      image: "https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLA", "Clear Resin", "Precision Optics"]
    },
    {
      title: "Architectural Scale Model",
      category: "Architecture",
      description: "Detailed building model for urban planning",
      image: "https://images.pexels.com/photos/3862633/pexels-photo-3862633.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["FDM", "PLA", "Scale Model"]
    },
    {
      title: "Jewelry Master Pattern",
      category: "Jewelry",
      description: "Intricate jewelry design for investment casting",
      image: "https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["SLA", "Castable Resin", "Fine Detail"]
    }
  ];

  const categories = ["All", "Automotive", "Aerospace", "Medical", "Industrial", "Electronics", "Tooling", "Optics", "Architecture", "Jewelry"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Industries Served" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "48h", label: "Average Turnaround" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of successful reverse engineering projects across diverse industries. 
              From precision prototypes to complex assemblies, see the quality and innovation we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-royal-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-royal-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                        <Download className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-royal-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center text-royal-blue-600 font-semibold hover:text-royal-blue-700 transition-colors duration-300">
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform physical objects into precise digital models through our proven methodology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3D Scanning</h3>
              <p className="text-gray-600 leading-relaxed">
                High-precision 3D scanning captures every detail of your physical component with micron-level accuracy.
              </p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-rapid-orange-600 to-rapid-orange-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CAD Modeling</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert engineers convert scan data into parametric CAD models with full design intent and specifications.
              </p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your completed models with comprehensive documentation and ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Add Your Project to Our Gallery?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have experienced the Rapid3D difference. 
            Let's discuss how we can bring your reverse engineering project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Request Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;