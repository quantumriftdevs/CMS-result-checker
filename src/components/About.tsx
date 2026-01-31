import { Building2, Target, Heart, Users, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Building2 className="w-20 h-20 text-blue-600" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 font-semibold">State-of-the-art Facilities</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Elite Academy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Founded in 2010, Elite Academy has been a beacon of educational excellence in our community. We are dedicated to providing a holistic learning experience that nurtures academic excellence, character development, and personal growth.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Excellence', desc: 'In all we do', color: 'text-blue-600' },
                  { icon: Heart, title: 'Integrity', desc: 'With honesty', color: 'text-red-600' },
                  { icon: Users, title: 'Respect', desc: 'For all', color: 'text-green-600' },
                  { icon: Zap, title: 'Innovation', desc: 'Always learning', color: 'text-purple-600' },
                ].map((value, idx) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={idx} className="bg-blue-50 rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <div className={`text-2xl mb-2 ${value.color}`}>
                        <IconComponent className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <p className="font-semibold text-gray-900">{value.title}</p>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Mission</h4>
                <p className="text-sm">To provide quality education that develops confident, creative, and responsible individuals.</p>
              </div>
              <div className="bg-linear-to-br from-blue-500 to-blue-700 text-white rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Vision</h4>
                <p className="text-sm">To be a leading institution recognized for academic excellence and character development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
