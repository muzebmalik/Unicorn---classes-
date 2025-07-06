'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  BookOpen, 
  FileText, 
  Bell, 
  Search, 
  LogOut,
  FileVideo,
  FileImage,
  FilePdf,
  Download,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
  const { user, userRole, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('materials');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = async () => {
    await logout();
  };

  const tabs = [
    { id: 'materials', label: 'Study Materials', icon: FileText },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'quizzes', label: 'Quizzes', icon: BookOpen },
  ];

  const studyMaterials = [
    {
      id: 1,
      title: 'Math Chapter 1 - Algebra Basics',
      type: 'PDF',
      size: '2.3 MB',
      subject: 'Mathematics',
      uploadedAt: '2 days ago',
      icon: FilePdf,
      color: 'text-red-500'
    },
    {
      id: 2,
      title: 'Science Lab Video - Chemical Reactions',
      type: 'Video',
      size: '15.2 MB',
      subject: 'Science',
      uploadedAt: '1 week ago',
      icon: FileVideo,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'History Timeline - World War II',
      type: 'Image',
      size: '1.1 MB',
      subject: 'History',
      uploadedAt: '3 days ago',
      icon: FileImage,
      color: 'text-green-500'
    },
    {
      id: 4,
      title: 'English Literature - Shakespeare Analysis',
      type: 'PDF',
      size: '3.7 MB',
      subject: 'English',
      uploadedAt: '5 days ago',
      icon: FilePdf,
      color: 'text-red-500'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Exam Schedule Update',
      content: 'The final exams have been rescheduled to next week. Please check the updated timetable in your student portal.',
      postedAt: '2 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      title: 'New Study Materials Available',
      content: 'Check out the new practice questions for Chapter 5. These will help you prepare for the upcoming quiz.',
      postedAt: '1 day ago',
      priority: 'normal'
    },
    {
      id: 3,
      title: 'Library Hours Extended',
      content: 'The school library will now be open until 8 PM on weekdays to help with your studies.',
      postedAt: '3 days ago',
      priority: 'normal'
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Math Quiz - Chapter 1',
      subject: 'Mathematics',
      questions: 15,
      timeLimit: 30,
      status: 'available',
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Science Quiz - Lab Safety',
      subject: 'Science',
      questions: 10,
      timeLimit: 20,
      status: 'completed',
      score: 85
    },
    {
      id: 3,
      title: 'History Quiz - World War II',
      subject: 'History',
      questions: 12,
      timeLimit: 25,
      status: 'upcoming',
      dueDate: '2024-01-20'
    }
  ];

  const filteredMaterials = studyMaterials.filter(material =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    material.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Unicorn Classes</span>
              </Link>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Student Portal
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {userRole?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'materials' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Study Materials</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search materials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredMaterials.map((material) => {
                    const Icon = material.icon;
                    return (
                      <div key={material.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className={`w-8 h-8 ${material.color}`} />
                            <div>
                              <h3 className="font-medium text-gray-900">{material.title}</h3>
                              <p className="text-sm text-gray-500">{material.subject}</p>
                              <p className="text-xs text-gray-400">{material.type} • {material.size}</p>
                              <p className="text-xs text-gray-400">Uploaded {material.uploadedAt}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Announcements</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                            {announcement.priority === 'high' && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Important</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{announcement.content}</p>
                          <p className="text-xs text-gray-500 mt-2">Posted {announcement.postedAt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'quizzes' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quizzes</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quizzes.map((quiz) => (
                    <div key={quiz.id} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900">{quiz.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{quiz.subject}</p>
                      <p className="text-sm text-gray-500">{quiz.questions} questions • {quiz.timeLimit} minutes</p>
                      
                      <div className="mt-3 flex items-center justify-between">
                        {quiz.status === 'available' && (
                          <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors">
                            Start Quiz
                          </button>
                        )}
                        {quiz.status === 'completed' && (
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
                            <span className="text-sm text-gray-600">Score: {quiz.score}%</span>
                          </div>
                        )}
                        {quiz.status === 'upcoming' && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Upcoming</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 