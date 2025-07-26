import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'TechFlow',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
      content: 'BridgeHub connected me with an amazing AI startup where I learned more in 3 months than I did in 2 years of college. The matching algorithm is incredibly accurate!',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'GrowthLab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
      content: 'As a startup founder, finding quality interns was always challenging. BridgeHub delivers pre-screened, passionate candidates who actually want to contribute to our mission.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Intern',
      company: 'SocialImpact',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
      content: 'The platform made it so easy to showcase my skills and connect with startups that aligned with my values. I found my dream role in just 2 weeks!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Co-founder',
      company: 'DataVault',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
      content: 'BridgeHub has become our go-to platform for finding talented interns. The quality of candidates and the ease of use is unmatched.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-white via-pink-25 to-rose-25 relative">
      {/* Background decorative images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 opacity-5 animate-float">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Testimonial decoration" className="w-32 h-32 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-5 animate-float" style={{animationDelay: '3s'}}>
          <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Success decoration" className="w-28 h-28 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by Interns and 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Trusted by Startups
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their FoundryInterns experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`group card-adorable bg-gradient-to-br from-pink-25 to-rose-25 rounded-3xl p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl animate-fade-in animate-delay-${index * 200 + 200} sparkle-effect relative overflow-hidden`}>
              {/* Quote Icon */}
              <div className="mb-8 group-hover:scale-125 transition-transform duration-300 hover-wiggle">
                <Quote className="h-10 w-10 text-pink-600 opacity-60" />
              </div>

              {/* Content */}
              <p className="text-gray-800 text-xl leading-relaxed mb-8 group-hover:text-gray-900 transition-colors duration-300 hover-bounce">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current hover:scale-150 transition-transform duration-300 hover-wiggle animate-delay-${i * 100}" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-6 group-hover:scale-125 transition-transform duration-300 hover-heartbeat"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg hover-wiggle">{testimonial.name}</div>
                  <div className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
              
              {/* Floating hearts */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 animate-heartbeat">
                💖
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-3xl p-12 text-center text-white animate-fade-in animate-delay-600 card-adorable sparkle-effect floating-hearts">
          <h3 className="text-4xl font-bold mb-8 animate-slide-up hover-bounce">Join Thousands of Success Stories ✨</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in animate-delay-200">
            <div className="hover:scale-125 transition-transform duration-300 hover-heartbeat">
              <div className="text-5xl font-bold mb-3">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="hover:scale-125 transition-transform duration-300 hover-wiggle">
              <div className="text-5xl font-bold mb-3">95%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
            <div className="hover:scale-125 transition-transform duration-300 hover-bounce">
              <div className="text-5xl font-bold mb-3">10K+</div>
              <div className="text-blue-100">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;