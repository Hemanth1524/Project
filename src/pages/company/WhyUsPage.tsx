import React from 'react';
import { Shield, Zap, Users, Award, Clock, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const WhyUsPage = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Guaranteed Quality",
      description: "99.9% accuracy guarantee with comprehensive quality control processes and industry certifications.",
      color: "from-royal-blue-600 to-royal-blue-700"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Latest 3D scanning equipment and CAD software ensuring precision and efficiency in every project.",
      color: "from-rapid-orange-600 to-rapid-orange-700"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ certified engineers with specialized expertise in reverse engineering and product development.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Industry-leading delivery times without compromising quality. Most projects completed within 24-72 hours.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "ISO certified with multiple industry awards and recognition from leading engineering organizations.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 25+ countries with local support and international quality standards.",
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  const differentiators = [
    "15+ years of proven expertise in reverse engineering",
    "State-of-the-art 3D scanning technology with micron-level precision",
    "Comprehensive quality assurance with 99.9% accuracy guarantee",
    "Dedicated project managers for seamless communication",
    "Flexible pricing models to suit projects of any size",
    "24/7 technical support and consultation services",
    "ISO 9001:2015 certified quality management system",
    "Proprietary workflows optimized for efficiency and accuracy"
  ];

  const testimonialStats = [
    { percentage: "98%", label: "Client Satisfaction Rate" },
    { percentage: "95%", label: "Projects Delivered On Time" },
    { percentage: "90%", label: "Repeat Client Rate" },
    { percentage: "99.9%", label: "Accuracy Guarantee" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Why Choose Rapid3D?</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Discover what sets us apart as the leading provider of reverse engineering solutions. 
              Quality, precision, and innovation in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Competitive Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six key reasons why industry leaders choose Rapid3D for their most critical engineering projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up border border-gray-100" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-6`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our numbers speak for themselves. Here's what our clients experience when working with Rapid3D.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-royal-blue-600 mb-2">{stat.percentage}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                While many companies offer reverse engineering services, Rapid3D stands apart through our 
                commitment to excellence, innovation, and client success. Here's what sets us apart:
              </p>
              
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advanced Engineering Technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-royal-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest technology to ensure our clients receive the most accurate and efficient solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl animate-slide-up">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Precision Scanning</h3>
                <p className="text-gray-600 text-sm">High-resolution 3D scanners with accuracy up to ±0.01mm</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rapid-orange-600 to-rapid-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Processing</h3>
                <p className="text-gray-600 text-sm">Machine learning algorithms for optimized data processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Software</h3>
                <p className="text-gray-600 text-sm">Latest CAD/CAM software for professional-grade results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Experience the Rapid3D Difference</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have chosen quality, precision, and reliability. 
            Get started with your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Get Your Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-royal-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;