"use client"

import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const subjects = [
  {
    name: "Accountancy",
    chapters: 15,
    notes: 120,
    color: "purple"
  },
  {
    name: "Business Studies", 
    chapters: 12,
    notes: 95,
    color: "pink"
  },
  {
    name: "Economics",
    chapters: 8,
    notes: 65,
    color: "blue"
  }
]

const features = [
  "Organized by class, subject & chapter",
  "Mobile-friendly design",
  "Interactive quizzes",
  "Video explanations",
  "Bookmark favorite notes",
  "Ask questions & get answers",
  "Track your progress",
  "Download for offline study"
]

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Access comprehensive study materials, interactive quizzes, and expert guidance. 
                Join hundreds of students who have already discovered the magic of organized learning.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-purple-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/notes"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Notes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column - Subjects */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Available Subjects
            </h3>
            
            <div className="space-y-4">
              {subjects.map((subject, index) => {
                const colorClasses = {
                  purple: "bg-purple-500",
                  pink: "bg-pink-500", 
                  blue: "bg-blue-500"
                }
                
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${colorClasses[subject.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {subject.name}
                          </h4>
                          <p className="text-purple-200 text-sm">
                            {subject.chapters} Chapters • {subject.notes} Notes
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-purple-200">
                      <span>Perfect for 11th & 12th Class</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                        Available
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">280+</div>
                <div className="text-purple-200 text-sm">Study Notes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">35</div>
                <div className="text-purple-200 text-sm">Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-purple-200 text-sm">Quizzes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Learning Journey Today
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join our community of successful students. Get access to organized study materials, 
              expert guidance, and interactive learning tools designed to help you excel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
                Get Started Free
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200">
                Contact Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 