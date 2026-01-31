import { Palette, BookMarked, Star } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      level: 'Nursery',
      icon: Palette,
      description: 'Early childhood development through play-based learning.',
      features: [
        'Age-appropriate curriculum',
        'Creative activities',
        'Language development',
        'Social skills building',
      ],
      color: 'from-pink-500 to-rose-500',
      iconColor: 'text-pink-600',
    },
    {
      level: 'Primary School',
      icon: BookMarked,
      description: 'Comprehensive education building strong academic foundations.',
      features: [
        'Core academic subjects',
        'Science & Mathematics focus',
        'Languages (English, Indigenous)',
        'Arts & PE',
      ],
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-600',
    },
    {
      level: 'Premium Features',
      icon: Star,
      description: 'Additional learning opportunities for all students.',
      features: [
        'Computer Lab Access',
        'Library Services',
        'Sports Programs',
        'Clubs & Societies',
      ],
      color: 'from-orange-500 to-yellow-500',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored educational programs designed for every stage of childhood development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = program.icon;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-linear-to-r ${program.color} text-white p-8 text-center`}>
                  <div className={`flex justify-center mb-3 ${program.iconColor}`}>
                    <IconComponent className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold">{program.level}</h3>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Program Highlights:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
