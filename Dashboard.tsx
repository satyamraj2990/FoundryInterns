import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Briefcase,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Eye,
  Heart
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Briefcase, label: 'Applications Sent', value: '12', change: '+3 this week', color: 'text-blue-600' },
    { icon: MessageSquare, label: 'Interview Invites', value: '5', change: '+2 pending', color: 'text-green-600' },
    { icon: Eye, label: 'Profile Views', value: '47', change: '+12 this week', color: 'text-purple-600' },
    { icon: Heart, label: 'Saved Opportunities', value: '8', change: '2 new matches', color: 'text-pink-600' },
  ];

  const recentApplications = [
    { company: 'TechFlow AI', position: 'Frontend Developer Intern', status: 'Interview Scheduled', date: '2024-01-15', statusColor: 'text-green-600 bg-green-50' },
    { company: 'DataVault', position: 'Product Management Intern', status: 'Under Review', date: '2024-01-12', statusColor: 'text-yellow-600 bg-yellow-50' },
    { company: 'CloudSync', position: 'Marketing Intern', status: 'Application Sent', date: '2024-01-10', statusColor: 'text-blue-600 bg-blue-50' },
    { company: 'GrowthLab', position: 'UX Design Intern', status: 'Rejected', date: '2024-01-08', statusColor: 'text-red-600 bg-red-50' },
  ];

  const upcomingInterviews = [
    { company: 'TechFlow AI', position: 'Frontend Developer Intern', date: '2024-01-18', time: '2:00 PM', type: 'Video Call' },
    { company: 'InnovateCorp', position: 'Backend Developer Intern', date: '2024-01-20', time: '10:00 AM', type: 'Phone Interview' },
  ];

  const notifications = [
    { title: 'New job match found!', description: 'DataScience Inc. is looking for Data Analyst interns', time: '2 hours ago', type: 'match' },
    { title: 'Interview reminder', description: 'TechFlow AI interview tomorrow at 2:00 PM', time: '1 day ago', type: 'reminder' },
    { title: 'Profile view', description: 'Your profile was viewed by StartupX', time: '3 days ago', type: 'view' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 opacity-10 animate-float">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" alt="Dashboard decoration" className="w-20 h-20 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-float" style={{animationDelay: '2s'}}>
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" alt="Analytics decoration" className="w-24 h-24 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's what's happening with your internship search</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 ${stat.color} bg-gray-50 rounded-lg`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Applications */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{app.position}</h4>
                        <p className="text-gray-600">{app.company}</p>
                        <p className="text-sm text-gray-500">Applied on {app.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.statusColor}`}>
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h3>
              </div>
              <div className="p-6">
                {upcomingInterviews.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingInterviews.map((interview, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{interview.position}</h4>
                            <p className="text-gray-600">{interview.company}</p>
                            <p className="text-sm text-gray-500">{interview.date} at {interview.time}</p>
                          </div>
                        </div>
                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                          {interview.type}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No upcoming interviews scheduled</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Completion */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>85% Complete</span>
                  <span>15% remaining</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Basic information
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Skills & experience
                </div>
                <div className="flex items-center text-yellow-600">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Add portfolio projects
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  Upload resume
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Bell className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Browse New Opportunities
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Update Profile
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Schedule Mock Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;