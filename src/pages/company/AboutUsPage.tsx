import React from 'react';
import { Users, Award, Globe, Target, ArrowRight } from 'lucide-react';

const AboutUsPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Expert Engineers", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started as a small engineering consultancy in Coimbatore with a vision to revolutionize reverse engineering."
    },
    {
      year: "2012",
      title: "Technology Expansion",
      description: "Invested in advanced 3D scanning equipment and expanded our CAD modeling capabilities."
    },
    {
      year: "2015",
      title: "Chennai Office",
      description: "Opened our second office in Chennai to serve clients across South India more effectively."
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "Received ISO certification and began serving international clients across multiple industries."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Implemented cloud-based solutions and AI-powered design optimization tools."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading provider of reverse engineering solutions with 500+ successful projects."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Rapid3D</h1>
              <p className="text-xl text-royal-blue-100 leading-relaxed mb-8">
                For over 15 years, Rapid3D has been at the forefront of engineering innovation, 
                providing cutting-edge reverse engineering and 3D scanning solutions to industries worldwide.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-rapid-orange-600 hover:bg-rapid-orange-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering Team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2009 with a simple mission: to make advanced engineering accessible to businesses of all sizes. 
                What started as a small team of passionate engineers has grown into a leading provider of reverse engineering solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our journey has been marked by continuous innovation, strategic investments in cutting-edge technology, 
                and an unwavering commitment to delivering exceptional results for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve clients across 25+ countries, from startups to Fortune 500 companies, 
                helping them bring their ideas to life with precision and efficiency.
              </p>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="3D Scanning Technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped Rapid3D into the industry leader we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-royal-blue-600 to-rapid-orange-600 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-2xl font-bold text-royal-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 lg:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Industry Leaders?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Rapid3D for their most critical engineering projects.
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

export default AboutUsPage;