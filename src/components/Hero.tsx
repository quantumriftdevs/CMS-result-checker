import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 via-blue-500 to-blue-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-blue-200">Elite Academy</span>
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            Nurturing young minds with excellence in education. Providing a safe, inclusive, and inspiring environment for nursery and primary education since 2010.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-blue-200">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold">45+</p>
              <p className="text-sm text-blue-200">Staff</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-blue-200">Years</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
              Check Your Results
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="relative h-96 md:h-full">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400 to-blue-700 rounded-2xl opacity-20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex items-center justify-center border border-white/20">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <BookOpen className="w-20 h-20 text-yellow-300" strokeWidth={1.5} />
              </div>
              <p className="text-white font-semibold">Premium Learning Environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
