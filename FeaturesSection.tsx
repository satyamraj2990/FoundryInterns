import React from 'react';
import { Brain, Zap, Shield, MessageSquare, Target, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Our advanced algorithm analyzes your skills, interests, and career goals to find perfect startup matches.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Instant Connections',
      description: 'Connect directly with startup founders and hiring managers. No more waiting weeks for responses.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Verified Companies',
      description: 'All startups are thoroughly vetted to ensure legitimate opportunities and fair compensation.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Built-in Communication',
      description: 'Chat directly with potential employers, schedule interviews, and manage applications in one place.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Personalized Dashboard',
      description: 'Track applications, manage interviews, and monitor your career progress with detailed analytics.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a vibrant community of interns and mentors. Share experiences and grow together.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 animate-float">
          <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" alt="Feature decoration" className="w-20 h-20 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 animate-float" style={{animationDelay: '2s'}}>
          <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" alt="Innovation decoration" className="w-24 h-24 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Launch Your Career
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to deployment, we provide all the tools and support you need 
            to land your dream internship at an innovative startup.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group card-adorable bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in animate-delay-${index * 100 + 200} sparkle-effect relative overflow-hidden`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-8 group-hover:scale-150 group-hover:rotate-12 transition-all duration-500 hover-heartbeat sparkle-effect`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300 hover-wiggle">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg hover-bounce">
                {feature.description}
              </p>
              
              {/* Floating emoji */}
              <div className="absolute top-4 right-4 text-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 animate-bounce-gentle">
                {index === 0 && '🧠'}
                {index === 1 && '⚡'}
                {index === 2 && '🛡️'}
                {index === 3 && '💬'}
                {index === 4 && '🎯'}
                {index === 5 && '👥'}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in animate-delay-800">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold btn-adorable cursor-pointer sparkle-effect floating-hearts">
            <span>🚀 Start Your Journey Today - It's Free! ✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;