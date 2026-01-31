import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Okafor',
      role: 'Parent',
      text: 'Elite Academy has transformed my child\'s academic journey. The teachers are caring and the facilities are world-class!',
      stars: 5,
      initials: 'MO',
      color: 'bg-blue-500',
    },
    {
      name: 'Dr. Abaddon Philus',
      role: 'Guardian',
      text: 'The online result portal is a game-changer. I can track my ward\'s progress in real-time. Highly impressed!',
      stars: 5,
      initials: 'AP',
      color: 'bg-purple-500',
    },
    {
      name: 'Chioma Eze',
      role: 'Parent',
      text: 'My daughter enjoys school every day. The balance between academics and extra-curricular activities is perfect.',
      stars: 5,
      initials: 'CE',
      color: 'bg-pink-500',
    },
    {
      name: 'Mr. Ejiro Iyedo',
      role: 'Guardian',
      text: 'Affordable quality education is possible. Elite Academy proves it. Grateful for the opportunity!',
      stars: 5,
      initials: 'EI',
      color: 'bg-green-500',
    },
    {
      name: 'Mrs. Adeyinka',
      role: 'Parent',
      text: 'The environment is safe and conducive. My son has become more confident and independent.',
      stars: 5,
      initials: 'AD',
      color: 'bg-orange-500',
    },
    {
      name: 'Pastor Emmanuel',
      role: 'Guardian',
      text: 'Excellent moral and religious education. The school instills good values in the children.',
      stars: 5,
      initials: 'PE',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from real families in our Elite Academy community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards providing your child with world-class education and holistic development.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
            Schedule a Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
};
