import React from 'react';
import { Target, Eye, Heart, Lightbulb, Users, Globe, ArrowRight } from 'lucide-react';

const MissionVisionPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, maintaining the highest standards of quality and precision.",
      color: "from-royal-blue-600 to-royal-blue-700"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously investing in cutting-edge technology and methodologies to stay ahead of industry trends.",
      color: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with clients through transparent communication and shared success.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical practices in all our interactions.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting environmentally responsible practices and contributing to a sustainable future.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Putting our clients' needs first and delivering solutions that exceed their expectations.",
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  const goals = [
    {
      title: "Technology Leadership",
      description: "Maintain our position as the technology leader in reverse engineering by continuously investing in advanced equipment and software.",
      timeline: "2024-2025"
    },
    {
      title: "Global Expansion",
      description: "Expand our services to serve clients in 50+ countries while maintaining our commitment to quality and personalized service.",
      timeline: "2025-2026"
    },
    {
      title: "Sustainability Initiative",
      description: "Achieve carbon neutrality in our operations and help clients reduce their environmental impact through optimized designs.",
      timeline: "2026-2027"
    },
    {
      title: "Industry Innovation",
      description: "Pioneer new methodologies in reverse engineering and contribute to industry standards and best practices.",
      timeline: "Ongoing"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Mission & Vision</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Our purpose, direction, and values guide everything we do. Discover what drives Rapid3D 
              to deliver exceptional engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 rounded-xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <div className="bg-gradient-to-br from-royal-blue-50 to-royal-blue-100 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  "To empower businesses worldwide with precision reverse engineering solutions that accelerate innovation, 
                  reduce development costs, and bring ideas to life with unmatched accuracy and efficiency."
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">How We Fulfill Our Mission:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Delivering 99.9% accurate reverse engineering solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Investing in cutting-edge 3D scanning and CAD technologies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Providing exceptional customer service and technical support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Maintaining fast turnaround times without compromising quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rapid-orange-600 to-rapid-orange-700 rounded-xl flex items-center justify-center mr-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              
              <div className="bg-gradient-to-br from-rapid-orange-50 to-rapid-orange-100 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  "To be the global leader in reverse engineering services, recognized for innovation, quality, 
                  and our contribution to advancing manufacturing and product development worldwide."
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Vision in Action:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rapid-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Leading technological advancement in the industry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rapid-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Setting new standards for quality and precision</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rapid-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Expanding our global reach while maintaining excellence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rapid-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Contributing to sustainable manufacturing practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six fundamental values that guide our decisions, shape our culture, and define how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap for the future, outlining key objectives that will drive our growth and impact.
            </p>
          </div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-royal-blue-50 rounded-2xl p-8 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <div className="inline-flex items-center px-4 py-2 bg-royal-blue-600 text-white rounded-lg font-medium">
                      {goal.timeline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment to Impact</h2>
            <div className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Rapid3D, we believe that exceptional engineering solutions can transform industries and improve lives. 
                Our commitment extends beyond delivering accurate models – we're dedicated to enabling innovation, 
                reducing waste, and contributing to a more efficient and sustainable future.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-royal-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rapid-orange-600 mb-2">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Rapid3D and experience how our mission, vision, and values translate into 
            exceptional results for your engineering projects.
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

export default MissionVisionPage;