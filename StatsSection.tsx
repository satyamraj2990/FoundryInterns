import React from 'react';
import { TrendingUp, Clock, Award, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '10,000+',
      label: 'Successful Placements',
      description: 'Interns matched with their dream startups',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      number: '48hrs',
      label: 'Average Match Time',
      description: 'From application to first interview',
      color: 'text-green-600'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Satisfaction Rate',
      description: 'Both interns and startups love us',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries',
      description: 'Global network of opportunities',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-25 via-white to-rose-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Forging Success Stories Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FoundryInterns has become the premier destination where ambitious talent meets groundbreaking innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center group card-adorable bg-white p-8 rounded-2xl border border-pink-100 hover:border-pink-200 transition-all duration-400 animate-fade-in animate-delay-${index * 100 + 200} sparkle-effect`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gradient-to-r from-pink-25 to-rose-25 rounded-2xl mb-6 group-hover:scale-150 group-hover:rotate-12 transition-all duration-500 hover-heartbeat`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:scale-125 transition-transform duration-300 hover-bounce">
                {stat.number}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2 hover-wiggle">
                {stat.label}
              </div>
              <div className="text-gray-600 text-base">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in animate-delay-600">
          <div className="bg-gradient-to-r from-pink-50 via-rose-25 to-purple-50 rounded-3xl p-10 card-adorable relative overflow-hidden bg-adorable-pattern">
            {/* Background decoration */}
            <div className="absolute top-4 right-4 opacity-30 hover-wiggle">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Success decoration" className="w-20 h-20 rounded-full object-cover animate-heartbeat" />
            </div>
            <div className="absolute top-6 left-6 text-2xl animate-bounce-gentle">🌟</div>
            <div className="absolute bottom-6 right-6 text-xl animate-wiggle animate-delay-300">💫</div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6 animate-slide-up hover-bounce sparkle-effect">
              Join the Success Story ✨
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100 hover-wiggle">
              Every month, hundreds of interns find their perfect startup match and begin their journey 
              to extraordinary careers. Your story could be next! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-base text-gray-600 animate-fade-in animate-delay-200">
              <span className="hover-bounce">✨ AI-Powered Matching</span>
              <span className="hover-heartbeat">⚡ Instant Notifications</span>
              <span className="hover-wiggle">🛡️ Verified Companies</span>
              <span className="hover-bounce">💬 Direct Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;