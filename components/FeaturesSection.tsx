"use client"

import { BookOpen, Sparkles, Users, Clock, Shield, Trophy, Smartphone, Zap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: "Organized Study Material",
    description: "Well-structured notes organized by class, subject, and chapter. Easy navigation and quick access to any topic.",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Easy Anytime Access",
    description: "Access your study materials 24/7 from any device. No more carrying heavy books or losing important notes.",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Trusted Teaching",
    description: "Content created and curated by experienced teachers. Quality you can trust for your academic success.",
    color: "pink"
  },
  {
    icon: Trophy,
    title: "Gamified Quizzes",
    description: "Interactive quizzes with instant feedback, leaderboards, and achievement badges to make learning fun.",
    color: "purple"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for mobile devices. 90% of students use phones - we've built the perfect mobile learning experience.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    description: "Lightning-fast loading times under 2 seconds. No more waiting for pages to load during study sessions.",
    color: "pink"
  }
]

const colorClasses = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    border: "border-purple-200"
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    border: "border-blue-200"
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    border: "border-pink-200"
  }
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Unicorn Classes</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with love by a teacher, made delightful for students. Experience the magic of organized learning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600">Study Notes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600">Video Lectures</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-600">Interactive Quizzes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-gray-600">Happy Students</div>
          </div>
        </div>
      </div>
    </section>
  )
} 