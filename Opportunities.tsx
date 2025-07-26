import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Users, Heart, ExternalLink, Star } from 'lucide-react';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    type: '',
    experience: '',
    industry: '',
  });

  const opportunities = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechFlow AI',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'San Francisco, CA',
      type: 'Full-time Internship',
      duration: '3 months',
      salary: '$2,000-3,000/month',
      description: 'Join our innovative AI startup and help build the next generation of intelligent applications. You\'ll work with React, TypeScript, and cutting-edge AI tools.',
      requirements: ['React', 'JavaScript', 'Git', 'Problem Solving'],
      benefits: ['Remote Work', 'Mentorship', 'Stock Options', 'Learning Budget'],
      posted: '2 days ago',
      applicants: 23,
      rating: 4.8,
      saved: false,
    },
    {
      id: 2,
      title: 'Product Management Intern',
      company: 'DataVault',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'New York, NY',
      type: 'Part-time Internship',
      duration: '6 months',
      salary: '$1,500-2,500/month',
      description: 'Dive into the world of data analytics and help shape product strategy for our B2B SaaS platform. Perfect for aspiring product managers.',
      requirements: ['Analysis Skills', 'SQL', 'Communication', 'User Research'],
      benefits: ['Flexible Hours', 'Networking', 'Conference Tickets', 'Certification'],
      posted: '1 week ago',
      applicants: 45,
      rating: 4.6,
      saved: true,
    },
    {
      id: 3,
      title: 'UX Design Intern',
      company: 'CreativeSpace',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'Remote',
      type: 'Full-time Internship',
      duration: '4 months',
      salary: '$1,800-2,800/month',
      description: 'Create beautiful and intuitive user experiences for our design collaboration platform. Work directly with our design team on real products.',
      requirements: ['Figma', 'Design Thinking', 'Prototyping', 'User Testing'],
      benefits: ['Remote First', 'Design Tools', 'Portfolio Support', 'Team Events'],
      posted: '3 days ago',
      applicants: 31,
      rating: 4.9,
      saved: false,
    },
    {
      id: 4,
      title: 'Marketing & Growth Intern',
      company: 'GrowthLab',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'Austin, TX',
      type: 'Full-time Internship',
      duration: '3 months',
      salary: '$2,200-3,200/month',
      description: 'Drive growth initiatives and learn digital marketing strategies that have helped us achieve 300% YoY growth. Hands-on experience guaranteed.',
      requirements: ['Digital Marketing', 'Analytics', 'Content Creation', 'Social Media'],
      benefits: ['Growth Mentorship', 'Marketing Tools', 'Performance Bonus', 'Recommendation'],
      posted: '5 days ago',
      applicants: 67,
      rating: 4.7,
      saved: false,
    },
    {
      id: 5,
      title: 'Backend Engineering Intern',
      company: 'CloudSync',
      logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'Seattle, WA',
      type: 'Full-time Internship',
      duration: '4 months',
      salary: '$2,500-3,500/month',
      description: 'Build scalable cloud infrastructure and APIs that serve millions of users. Work with cutting-edge technologies in a fast-paced environment.',
      requirements: ['Python', 'AWS', 'Docker', 'API Development'],
      benefits: ['Tech Talks', 'Cloud Credits', 'Open Source', 'Full-time Offer'],
      posted: '1 day ago',
      applicants: 19,
      rating: 4.8,
      saved: true,
    },
    {
      id: 6,
      title: 'Data Science Intern',
      company: 'InsightAI',
      logo: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      location: 'Boston, MA',
      type: 'Part-time Internship',
      duration: '5 months',
      salary: '$2,000-3,000/month',
      description: 'Analyze large datasets and build machine learning models to solve real business problems. Great opportunity to apply your academic knowledge.',
      requirements: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization'],
      benefits: ['Research Projects', 'Publications', 'GPU Access', 'Conference Funding'],
      posted: '4 days ago',
      applicants: 52,
      rating: 4.5,
      saved: false,
    },
  ];

  const filters = {
    location: ['Remote', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA'],
    type: ['Full-time Internship', 'Part-time Internship', 'Contract'],
    experience: ['No Experience', '0-1 years', '1-2 years'],
    industry: ['Technology', 'AI/ML', 'SaaS', 'Design', 'Marketing', 'Data Science'],
  };

  const toggleSave = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Toggled save for opportunity ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 opacity-8 animate-float">
          <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=120&h=120" alt="Opportunity decoration" className="w-16 h-16 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-32 left-10 opacity-8 animate-float" style={{animationDelay: '3s'}}>
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=120&h=120" alt="Career decoration" className="w-18 h-18 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Your Next Opportunity</h1>
          <p className="text-gray-600">Find the perfect internship at innovative startups</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-8 card-adorable sparkle-effect">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 h-5 w-5 hover-wiggle" />
              <input
                type="text"
                placeholder="Search opportunities, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 input-adorable focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold btn-adorable flex items-center sparkle-effect">
              <Filter className="h-5 w-5 mr-2 hover-wiggle" />
              Filters ✨
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(filters).map(([filterKey, options]) => (
              <select
                key={filterKey}
                value={selectedFilters[filterKey as keyof typeof selectedFilters]}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, [filterKey]: e.target.value }))}
                className="px-4 py-3 input-adorable focus:ring-2 focus:ring-pink-500 focus:border-transparent capitalize hover-bounce"
              >
                <option value="">{filterKey.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* Results Stats */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{opportunities.length}</span> opportunities
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Sort by: Most Recent</option>
            <option>Sort by: Best Match</option>
            <option>Sort by: Salary (High to Low)</option>
            <option>Sort by: Company Rating</option>
          </select>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl card-adorable overflow-hidden group animate-fade-in sparkle-effect">
              {/* Header */}
              <div className="p-8 border-b border-pink-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={opportunity.logo}
                      alt={`${opportunity.company} logo`}
                      className="w-16 h-16 rounded-2xl object-cover group-hover:scale-125 transition-transform duration-300 hover-heartbeat"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 hover-wiggle">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{opportunity.company}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current hover:scale-150 transition-transform duration-300 hover-wiggle" />
                        <span className="text-sm text-gray-500 ml-1">{opportunity.rating}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSave(opportunity.id)}
                    className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                      opportunity.saved
                        ? 'text-pink-600 bg-pink-50 hover:bg-pink-100 animate-heartbeat'
                        : 'text-gray-400 hover:text-pink-600 hover:bg-pink-25 hover-bounce'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${opportunity.saved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-base text-gray-600 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-pink-500 hover-wiggle" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-500 hover-bounce" />
                    {opportunity.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-500 hover-heartbeat" />
                    {opportunity.salary}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-500 hover-wiggle" />
                    {opportunity.applicants} applicants
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg hover-bounce">
                  {opportunity.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-base font-bold text-gray-900 mb-3">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.requirements.map((skill, index) => (
                      <span key={index} className="skill-tag-adorable">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <p className="text-base font-bold text-gray-900 mb-3">Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.benefits.map((benefit, index) => (
                      <span key={index} className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold hover:scale-110 transition-transform duration-300 hover-bounce">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-pink-100">
                  <div className="text-base text-gray-500 hover-wiggle">
                    Posted {opportunity.posted}
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex items-center px-6 py-3 text-pink-600 border-2 border-pink-600 rounded-2xl hover:bg-pink-50 btn-adorable">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white rounded-2xl font-bold btn-adorable ripple sparkle-effect">
                      Apply Now 🚀
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-pink-700 border-2 border-pink-300 px-10 py-4 rounded-2xl font-bold hover:bg-pink-25 btn-adorable sparkle-effect">
            Load More Opportunities ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;