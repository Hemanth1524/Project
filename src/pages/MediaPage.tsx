import React from 'react';
import { Play, Download, Calendar, User, ArrowRight, Award, Newspaper, Video } from 'lucide-react';

const MediaPage = () => {
  const pressReleases = [
    {
      title: "Rapid3D Achieves ISO 9001:2015 Certification",
      date: "March 15, 2024",
      excerpt: "Leading reverse engineering company receives international quality management certification, reinforcing commitment to excellence.",
      category: "Company News",
      image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Chennai Facility Expands Service Capacity",
      date: "February 28, 2024", 
      excerpt: "State-of-the-art facility doubles production capacity and introduces advanced 3D scanning technologies.",
      category: "Expansion",
      image: "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Partnership with Leading Automotive Manufacturer",
      date: "January 20, 2024",
      excerpt: "Multi-year agreement to provide reverse engineering services for legacy automotive components.",
      category: "Partnership",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const videos = [
    {
      title: "3D Scanning Process Demonstration",
      duration: "5:32",
      description: "Watch our expert team demonstrate the complete 3D scanning process from setup to data capture.",
      thumbnail: "https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Process"
    },
    {
      title: "CAD Modeling Workflow",
      duration: "8:15",
      description: "See how we transform point cloud data into precise parametric CAD models.",
      thumbnail: "https://images.pexels.com/photos/3862629/pexels-photo-3862629.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Technology"
    },
    {
      title: "Customer Success Story - Aerospace",
      duration: "6:45",
      description: "Learn how we helped a major aerospace company recreate critical turbine components.",
      thumbnail: "https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Case Study"
    },
    {
      title: "Behind the Scenes - Quality Control",
      duration: "4:20",
      description: "Discover our rigorous quality control processes that ensure 99.9% accuracy.",
      thumbnail: "https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Quality"
    }
  ];

  const awards = [
    {
      title: "Excellence in Engineering Services",
      organization: "Indian Engineering Association",
      year: "2024",
      description: "Recognized for outstanding contribution to reverse engineering and 3D scanning technologies."
    },
    {
      title: "Innovation in Manufacturing",
      organization: "Tamil Nadu Manufacturing Council",
      year: "2023",
      description: "Awarded for innovative approaches to legacy component recreation and modernization."
    },
    {
      title: "Quality Excellence Award",
      organization: "ISO Certification Body",
      year: "2023",
      description: "Acknowledged for maintaining highest quality standards in engineering services."
    }
  ];

  const downloads = [
    {
      title: "Company Brochure",
      type: "PDF",
      size: "2.5 MB",
      description: "Comprehensive overview of our services, capabilities, and technologies."
    },
    {
      title: "Technical Specifications",
      type: "PDF", 
      size: "1.8 MB",
      description: "Detailed technical specifications for all our 3D scanning and modeling services."
    },
    {
      title: "Case Studies Collection",
      type: "PDF",
      size: "4.2 MB",
      description: "In-depth case studies showcasing successful projects across various industries."
    },
    {
      title: "Quality Certifications",
      type: "PDF",
      size: "1.2 MB",
      description: "ISO certifications and quality management documentation."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Media Center</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest news, videos, and resources from Rapid3D. 
              Explore our press releases, technical videos, and downloadable resources.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 animate-fade-in">
            <Newspaper className="w-8 h-8 text-royal-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Latest Press Releases</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-royal-blue-100 text-royal-blue-700 text-xs font-medium rounded-full">
                      {release.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {release.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{release.excerpt}</p>
                  <button className="inline-flex items-center text-royal-blue-600 font-semibold hover:text-royal-blue-700 transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 animate-fade-in">
            <Video className="w-8 h-8 text-rapid-orange-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Video Gallery</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-royal-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-rapid-orange-600 text-white text-xs font-medium rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 animate-fade-in">
            <Award className="w-8 h-8 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-royal-blue-50 rounded-2xl p-8 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-royal-blue-600 mb-2">{award.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{award.description}</p>
                <div className="text-sm font-medium text-gray-700">
                  {award.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 animate-fade-in">
            <Download className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Downloads & Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{download.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{download.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {download.type} • {download.size}
                  </div>
                  <button className="inline-flex items-center px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    Download
                    <Download className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
              <p className="text-xl text-royal-blue-100 mb-8 leading-relaxed">
                For press inquiries, interview requests, or additional information about Rapid3D, 
                please contact our media relations team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-rapid-orange-300" />
                  <span>Media Relations: Priya Sharma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-rapid-orange-300" />
                  <span>Email: media@rapid3d.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-rapid-orange-300" />
                  <span>Phone: +91 422 123 4567</span>
                </div>
              </div>
            </div>
            <div className="text-center animate-slide-up">
              <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 mb-4">
                Contact Media Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-royal-blue-100 text-sm">
                We typically respond to media inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;