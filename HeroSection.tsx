import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Users, Building2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float animate-heartbeat" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animate-bounce-gentle" style={{animationDelay: '4s'}}></div>
        
        {/* Decorative Images */}
        <div className="absolute top-20 right-20 opacity-15 animate-float hover-wiggle">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Tech decoration" className="w-32 h-32 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-15 animate-float hover-heartbeat" style={{animationDelay: '3s'}}>
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Startup decoration" className="w-24 h-24 rounded-full object-cover" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-1/3 text-4xl animate-float animate-delay-100">💫</div>
        <div className="absolute bottom-32 right-1/3 text-3xl animate-bounce-gentle animate-delay-300">🚀</div>
        <div className="absolute top-1/2 right-20 text-2xl animate-wiggle animate-delay-500">✨</div>
        <div className="absolute bottom-1/4 left-1/4 text-3xl animate-heartbeat animate-delay-700">💖</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-bounce-in animate-delay-200 hover-bounce sparkle-effect">
              <Zap className="h-4 w-4 mr-2" />
              Connect. Grow. Succeed. 💫
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up animate-delay-300 hover-wiggle">
              Bridge Your Way to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 animate-gradient-shift sparkle-effect">
                Startup Success
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in animate-delay-400 hover-bounce">
              Where talent meets innovation! Connect with cutting-edge startups, forge your career in the foundry of tomorrow, and become the architect of your professional destiny. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in animate-delay-500">
              <Link
                to="/opportunities"
                className="group bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold btn-adorable ripple flex items-center justify-center sparkle-effect floating-hearts"
              >
                Find Your Perfect Match 💖
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-pink-300 text-pink-700 rounded-2xl font-semibold hover:border-pink-500 hover:text-pink-600 btn-adorable hover-heartbeat">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo 🎬
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-left animate-fade-in animate-delay-600">
              <div className="flex items-center justify-center lg:justify-start space-x-2 animate-scale-in animate-delay-100">
                <Users className="h-6 w-6 text-pink-600 hover-wiggle" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 hover-bounce">10K+</div>
                  <div className="text-sm text-gray-600">Active Interns</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 animate-scale-in animate-delay-200">
                <Building2 className="h-6 w-6 text-purple-600 hover-heartbeat" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 hover-bounce">500+</div>
                  <div className="text-sm text-gray-600">Startups</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 col-span-2 lg:col-span-1 animate-scale-in animate-delay-300">
                <ArrowRight className="h-6 w-6 text-green-600 hover-wiggle" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 hover-bounce">95%</div>
                  <div className="text-sm text-gray-600">Match Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in animate-delay-400">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 card-adorable bg-adorable-pattern">
              {/* Mock Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 hover-wiggle">Perfect Matches Found ✨</h3>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold animate-heartbeat sparkle-effect">Live 🔥</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { company: 'TechFlow AI', role: 'Frontend Intern', match: '98%' },
                    { company: 'DataVault', role: 'Product Intern', match: '95%' },
                    { company: 'CloudSync', role: 'Marketing Intern', match: '92%' },
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 bg-gradient-to-r from-pink-25 to-rose-25 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-300 animate-slide-up animate-delay-${(index + 1) * 100} card-adorable hover-bounce`}>
                      <div>
                        <div className="font-semibold text-gray-900 hover-wiggle">{item.company}</div>
                        <div className="text-sm text-gray-600">{item.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600 animate-heartbeat hover-bounce">{item.match}</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white py-4 rounded-2xl font-bold btn-adorable ripple sparkle-effect floating-hearts">
                  Apply to All 🚀
                </button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-lg animate-float hover:scale-125 transition-transform duration-300 sparkle-effect">
              <Users className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg animate-float hover:scale-125 transition-transform duration-300 sparkle-effect" style={{animationDelay: '1s'}}>
              <Building2 className="h-6 w-6" />
            </div>
            
            {/* Additional cute elements */}
            <div className="absolute top-1/2 -left-8 text-2xl animate-bounce-gentle animate-delay-200">💫</div>
            <div className="absolute top-1/4 -right-8 text-xl animate-wiggle animate-delay-400">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;