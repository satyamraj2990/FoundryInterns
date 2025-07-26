import React, { useState } from 'react';
import { Camera, Edit3, Plus, Trash2, ExternalLink, MapPin, Mail, Phone, Globe, Github, Linkedin } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    name: 'Alex Johnson',
    title: 'Computer Science Student',
    location: 'San Francisco, CA',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    website: 'alexjohnson.dev',
    github: 'alexjohnsondev',
    linkedin: 'alexjohnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&crop=face',
    bio: 'Passionate computer science student with a focus on full-stack development and AI. Looking to join an innovative startup where I can contribute to meaningful projects and grow my technical skills.',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'Machine Learning', level: 65 },
    ],
    experience: [
      {
        title: 'Frontend Developer Intern',
        company: 'TechStart Inc.',
        period: 'Jun 2023 - Aug 2023',
        description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.',
      },
      {
        title: 'Teaching Assistant',
        company: 'University of California',
        period: 'Sep 2022 - May 2023',
        description: 'Assisted in teaching introductory programming courses. Helped students with coding assignments and conducted lab sessions.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        period: '2021 - 2025',
        gpa: '3.8/4.0',
      },
    ],
    projects: [
      {
        name: 'TaskFlow - Project Management App',
        description: 'Full-stack web application built with React, Node.js, and MongoDB. Features include task management, team collaboration, and real-time updates.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        link: 'https://taskflow.alexjohnson.dev',
        github: 'https://github.com/alexjohnsondev/taskflow',
      },
      {
        name: 'AI Image Classifier',
        description: 'Machine learning model that classifies images using TensorFlow. Achieved 94% accuracy on test dataset with custom CNN architecture.',
        technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
        github: 'https://github.com/alexjohnsondev/image-classifier',
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-25 to-purple-50 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 opacity-8 animate-float">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=130&h=130" alt="Profile decoration" className="w-18 h-18 rounded-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-8 animate-float" style={{animationDelay: '2s'}}>
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=130&h=130" alt="Achievement decoration" className="w-20 h-20 rounded-full object-cover" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
            <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors duration-200">
              <Camera className="h-5 w-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6 -mt-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-200">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                    <p className="text-xl text-gray-600 mb-2">{profileData.title}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {profileData.location}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {profileData.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {profileData.phone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2" />
                    {profileData.website}
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href={`https://github.com/${profileData.github}`} className="text-gray-400 hover:text-gray-600">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={`https://linkedin.com/in/${profileData.linkedin}`} className="text-gray-400 hover:text-gray-600">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="px-6 pt-6">
            <div className="flex space-x-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
                  <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">3.8</div>
                    <div className="text-sm text-gray-600">GPA</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">6</div>
                    <div className="text-sm text-gray-600">Technical Skills</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                  <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </button>
                </div>

                <div className="space-y-4">
                  {profileData.experience.map((exp, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-50">
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-50">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                  <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </button>
                </div>

                <div className="space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-blue-600 font-medium">{edu.school}</p>
                          <p className="text-sm text-gray-500">{edu.period}</p>
                          <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-50">
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-50">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                  <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profileData.projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                        <div className="flex space-x-2">
                          {project.link && (
                            <a href={project.link} className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-50">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
                  <button className="flex items-center px-6 py-3 text-pink-600 border-2 border-pink-600 rounded-2xl hover:bg-pink-50 btn-adorable">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill ✨
                  </button>
                </div>

                <div className="space-y-4">
                  {profileData.skills.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-pink-25 to-rose-25 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-300 card-adorable">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-900 text-lg hover-wiggle">{skill.name}</span>
                        <span className="text-base text-gray-600 font-semibold hover-bounce">{skill.level}%</span>
                      </div>
                      <div className="w-full progress-bar-adorable h-3 rounded-full">
                        <div
                          className="progress-fill h-3 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;