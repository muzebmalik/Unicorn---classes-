"use client"

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Priya Sharma",
    class: "12th Class",
    subject: "Accountancy",
    rating: 5,
    text: "Unicorn Classes made accountancy so much easier! The notes are perfectly organized and the teacher explains everything so clearly. My grades improved from 65% to 92%!",
    avatar: "PS"
  },
  {
    name: "Rahul Verma",
    class: "12th Class", 
    subject: "Business Studies",
    rating: 5,
    text: "The best thing about Unicorn Classes is how everything is in one place. No more searching through different books. The quizzes are fun and help me remember better.",
    avatar: "RV"
  },
  {
    name: "Anjali Patel",
    class: "11th Class",
    subject: "Accountancy",
    rating: 5,
    text: "I love how the teacher breaks down complex topics into simple explanations. The mobile app is perfect for studying on the go. Highly recommended!",
    avatar: "AP"
  },
  {
    name: "Vikram Singh",
    class: "12th Class",
    subject: "Economics",
    rating: 5,
    text: "The notes are comprehensive and the video explanations are excellent. The teacher's approach makes difficult concepts easy to understand. Thank you!",
    avatar: "VS"
  },
  {
    name: "Meera Reddy",
    class: "11th Class",
    subject: "Business Studies", 
    rating: 5,
    text: "Unicorn Classes has transformed my learning experience. The organized structure and clear explanations have boosted my confidence in the subject.",
    avatar: "MR"
  },
  {
    name: "Arjun Kumar",
    class: "12th Class",
    subject: "Accountancy",
    rating: 5,
    text: "The best educational platform I've used. The teacher is amazing and the content quality is outstanding. My board exam preparation is now much better!",
    avatar: "AK"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Students Say About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Unicorn Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our students have to say about their learning experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-purple-400" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.class} • {testimonial.subject}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              4.9/5 Average Rating
            </h3>
            <p className="text-purple-100">
              Based on 500+ student reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 