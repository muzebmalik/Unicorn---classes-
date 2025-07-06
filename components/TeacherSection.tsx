"use client"

import { GraduationCap, Award, Clock, Users, BookOpen, Star, MessageCircle, Phone, Mail } from 'lucide-react'

const teacherStats = [
  { icon: GraduationCap, label: "Years Teaching", value: "8+" },
  { icon: Users, label: "Students Taught", value: "500+" },
  { icon: BookOpen, label: "Subjects", value: "3" },
  { icon: Star, label: "Student Rating", value: "4.9/5" }
]

const subjects = [
  { name: "Accountancy", level: "11th & 12th" },
  { name: "Business Studies", level: "11th & 12th" },
  { name: "Economics", level: "12th" }
]

export default function TeacherSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Teacher Info */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                Meet Your Teacher
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Guide to
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Academic Excellence</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 8 years of teaching experience, I've helped hundreds of students achieve their academic goals. 
                My passion is making complex subjects simple and enjoyable to learn.
              </p>
            </div>

            {/* Teacher Stats */}
            <div className="grid grid-cols-2 gap-6">
              {teacherStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Subjects Taught */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Subjects I Teach
              </h3>
              <div className="space-y-3">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {subject.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {subject.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      Expert
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-200">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask a Question
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Teacher
              </button>
            </div>
          </div>

          {/* Right Column - Teacher Photo */}
          <div className="relative">
            {/* Main Teacher Photo */}
            <div className="relative mx-auto max-w-md">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Teacher Photo Card */}
              <div className="relative bg-white rounded-full p-4 shadow-2xl border-4 border-white">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                  {/* Placeholder for teacher photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        Your Teacher
                      </div>
                      <div className="text-sm text-gray-600">
                        M.Com, B.Ed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">8+ Years</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>teacher@unicornclasses.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 