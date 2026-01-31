import React from 'react';
import { Target, Users, Trophy, Zap, Heart, BarChart3 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Holistic Development',
      description: 'We focus on academic excellence combined with character building, sports, and creative expression.',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Experienced Teachers',
      description: 'Our qualified and passionate educators use modern teaching methods and personalized attention.',
      color: 'text-green-600',
    },
    {
      icon: Trophy,
      title: 'Proven Track Record',
      description: 'Consistent academic excellence with 98% parent satisfaction rate and thousands of successful alumni.',
      color: 'text-yellow-600',
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Smart classrooms, computer labs, and digital learning tools prepare students for the future.',
      color: 'text-purple-600',
    },
    {
      icon: Heart,
      title: 'Supportive Community',
      description: 'Strong parent engagement, regular communications, and a welcoming school culture.',
      color: 'text-red-600',
    },
    {
      icon: BarChart3,
      title: 'Transparent Results',
      description: 'Easy result checking portal for parents with detailed performance metrics and progress tracking.',
      color: 'text-indigo-600',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Elite Academy?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what sets us apart from other schools
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-blue-300 transition duration-300"
              >
                <div className={`w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition ${reason.color}`}>
                  <IconComponent className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">15+</h4>
              <p className="text-gray-700">Years of Educational Excellence</p>
            </div>
            <div className="border-l border-r border-gray-300">
              <h4 className="text-3xl font-bold text-indigo-600 mb-2">50+</h4>
              <p className="text-gray-700">Dedicated & Qualified Staff</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">100%</h4>
              <p className="text-gray-700">Safe & Secure Environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
