import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, Star, ExternalLink, Building2, TrendingUp, Award, Globe } from 'lucide-react';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const companies = [
    {
      id: 1,
      name: 'TechFlow AI',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'Building the future of artificial intelligence with cutting-edge machine learning solutions for enterprise customers.',
      industry: 'Artificial Intelligence',
      size: '50-100 employees',
      location: 'San Francisco, CA',
      founded: '2021',
      funding: 'Series A',
      rating: 4.8,
      reviews: 24,
      openPositions: 5,
      tags: ['AI/ML', 'React', 'Python', 'Remote-Friendly'],
      highlights: ['Fast Growth', 'Great Culture', 'Learning Opportunities', 'Stock Options'],
    },
    {
      id: 2,
      name: 'DataVault',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'Secure data analytics platform helping businesses make data-driven decisions with enterprise-grade security.',
      industry: 'Data Analytics',
      size: '100-200 employees',
      location: 'New York, NY',
      founded: '2020',
      funding: 'Series B',
      rating: 4.6,
      reviews: 31,
      openPositions: 8,
      tags: ['Data Science', 'Security', 'B2B', 'SaaS'],
      highlights: ['Work-Life Balance', 'Mentorship', 'Career Growth', 'Health Benefits'],
    },
    {
      id: 3,
      name: 'CreativeSpace',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'Design collaboration platform that brings creative teams together to build amazing products faster.',
      industry: 'Design Tools',
      size: '25-50 employees',
      location: 'Remote',
      founded: '2022',
      funding: 'Seed',
      rating: 4.9,
      reviews: 18,
      openPositions: 3,
      tags: ['Design', 'Remote', 'Figma', 'Collaboration'],
      highlights: ['Remote First', 'Creative Freedom', 'Design Tools', 'Flexible Hours'],
    },
    {
      id: 4,
      name: 'GrowthLab',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'Marketing technology startup focused on helping businesses achieve sustainable growth through data-driven strategies.',
      industry: 'Marketing Technology',
      size: '75-100 employees',
      location: 'Austin, TX',
      founded: '2019',
      funding: 'Series A',
      rating: 4.7,
      reviews: 42,
      openPositions: 6,
      tags: ['MarTech', 'Growth Hacking', 'Analytics', 'Performance'],
      highlights: ['Performance Bonus', 'Learning Budget', 'Team Events', 'Mentorship'],
    },
    {
      id: 5,
      name: 'CloudSync',
      logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'Cloud infrastructure platform that simplifies deployment and scaling for modern applications.',
      industry: 'Cloud Infrastructure',
      size: '150-250 employees',
      location: 'Seattle, WA',
      founded: '2018',
      funding: 'Series C',
      rating: 4.8,
      reviews: 67,
      openPositions: 12,
      tags: ['Cloud', 'DevOps', 'Kubernetes', 'AWS'],
      highlights: ['Tech Leadership', 'Open Source', 'Conference Talks', 'Full-time Offers'],
    },
    {
      id: 6,
      name: 'InsightAI',
      logo: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      description: 'AI-powered business intelligence platform that transforms complex data into actionable insights.',
      industry: 'Business Intelligence',
      size: '30-75 employees',
      location: 'Boston, MA',
      founded: '2021',
      funding: 'Seed',
      rating: 4.5,
      reviews: 29,
      openPositions: 4,
      tags: ['BI', 'Machine Learning', 'Data Viz', 'Enterprise'],
      highlights: ['Research Focus', 'Publications', 'GPU Access', 'PhD Mentors'],
    },
  ];

  const industries = ['All Industries', 'Artificial Intelligence', 'Data Analytics', 'Design Tools', 'Marketing Technology', 'Cloud Infrastructure', 'Business Intelligence'];
  const companySizes = ['All Sizes', '1-25', '26-50', '51-100', '101-250', '250+'];
  const locations = ['All Locations', 'Remote', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 right-16 opacity-8 animate-float">
          <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=140&h=140" alt="Company decoration" className="w-20 h-20 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-24 left-16 opacity-8 animate-float" style={{animationDelay: '2.5s'}}>
          <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=140&h=140" alt="Startup decoration" className="w-22 h-22 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Innovative Companies</h1>
          <p className="text-gray-600">Explore startups that are shaping the future and find your perfect match</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search companies by name, industry, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {companySizes.map(size => (
                <option key={size} value={size}>{size} employees</option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start space-x-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {company.name}
                        </h3>
                        <p className="text-gray-600 mb-2">{company.industry}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {company.size}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {company.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold text-gray-900">{company.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({company.reviews})</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium mt-1">
                          {company.openPositions} open positions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {company.description}
                </p>

                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Founded {company.founded}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{company.funding} Funding</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">Why Join Us:</p>
                  <div className="flex flex-wrap gap-2">
                    {company.highlights.map((highlight, index) => (
                      <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                      View Jobs ({company.openPositions})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Load More Companies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;