import React from 'react';
import { Star, Quote, Building, User, ArrowRight, Award, TrendingUp, Users } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Engineer",
      company: "Automotive Solutions Ltd.",
      industry: "Automotive",
      rating: 5,
      text: "Rapid3D's reverse engineering services helped us recreate a critical component that was no longer in production. Their accuracy and attention to detail saved us months of development time and significant costs.",
      project: "Legacy Engine Component Recreation",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Chen",
      position: "Product Development Manager",
      company: "MedTech Innovations",
      industry: "Medical Devices",
      rating: 5,
      text: "The precision and quality of Rapid3D's work exceeded our expectations. They delivered complex medical device models with micron-level accuracy, enabling us to accelerate our product launch timeline.",
      project: "Medical Device Reverse Engineering",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Rodriguez",
      position: "Manufacturing Director",
      company: "Aerospace Dynamics Corp",
      industry: "Aerospace",
      rating: 5,
      text: "Working with Rapid3D has been exceptional. Their team's expertise in aerospace components and commitment to quality made them the perfect partner for our critical reverse engineering project.",
      project: "Aircraft Component Analysis",
      image: "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Sharma",
      position: "R&D Head",
      company: "Industrial Equipment Inc.",
      industry: "Manufacturing",
      rating: 5,
      text: "Rapid3D's comprehensive approach and technical expertise helped us modernize our legacy equipment designs. The CAD models they provided were perfect for our manufacturing processes.",
      project: "Industrial Equipment Modernization",
      image: "https://images.pexels.com/photos/3785075/pexels-photo-3785075.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "James Thompson",
      position: "Design Engineer",
      company: "Consumer Products Global",
      industry: "Consumer Goods",
      rating: 5,
      text: "The turnaround time was incredible - what would have taken us weeks internally was completed in just 3 days with outstanding quality. Rapid3D is now our go-to partner for reverse engineering.",
      project: "Consumer Product Redesign",
      image: "https://images.pexels.com/photos/3785073/pexels-photo-3785073.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr. Anita Patel",
      position: "Research Director",
      company: "Tech Innovation Labs",
      industry: "Technology",
      rating: 5,
      text: "Rapid3D's attention to detail and technical expertise is unmatched. They helped us reverse engineer complex electronic housings with perfect accuracy for our research project.",
      project: "Electronic Component Housing",
      image: "https://images.pexels.com/photos/3785071/pexels-photo-3785071.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Based on post-project surveys"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "On-Time Delivery",
      description: "Projects delivered on schedule"
    },
    {
      icon: Users,
      number: "90%",
      label: "Repeat Clients",
      description: "Clients who return for additional projects"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "Across all client reviews"
    }
  ];

  const industries = [
    { name: "Automotive", count: 45, percentage: 30 },
    { name: "Aerospace", count: 38, percentage: 25 },
    { name: "Medical Devices", count: 30, percentage: 20 },
    { name: "Manufacturing", count: 23, percentage: 15 },
    { name: "Consumer Goods", count: 15, percentage: 10 }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-royal-blue-100 max-w-3xl mx-auto">
              Hear from industry leaders who have experienced the Rapid3D difference. 
              Real projects, real results, real satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from across industries, showcasing the impact of our reverse engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Project Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-gray-900 mb-1">Project:</div>
                  <div className="text-sm text-gray-600">{testimonial.project}</div>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-royal-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 bg-royal-blue-50 text-royal-blue-600 text-xs font-medium rounded-full">
                    <Building className="w-3 h-3 mr-1" />
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, with proven success in diverse applications.
            </p>
          </div>

          <div className="bg-gradient-to-br from-royal-blue-50 to-rapid-orange-50 rounded-2xl p-8 animate-slide-up">
            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">{industry.name}</span>
                    <span className="text-gray-600">({industry.count} projects)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${industry.percentage}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-12">{industry.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-rapid-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-royal-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the same level of quality, precision, and service that has earned us these outstanding reviews. 
            Let's discuss how we can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-royal-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Get Your Quote Today
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

export default TestimonialsPage;