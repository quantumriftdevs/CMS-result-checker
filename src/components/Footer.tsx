import { Facebook, Twitter, Instagram, Linkedin, Heart, BookOpen } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-white text-lg">Elite Academy</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Excellence in education. Nurturing minds, shaping futures.
            </p>
            <div className="flex gap-3 pt-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Programs', 'Admissions', 'News'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {['Nursery', 'Primary School', 'Extra-curricular', 'Sports', 'Arts'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Student Portal', 'Parent Portal', 'Academic Calendar', 'Policies', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>
                © {currentYear} Elite Academy. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
                <a href="#" className="hover:text-blue-400">Cookie Policy</a>
              </div>
            </div>

            {/* Credit */}
            <div className="text-sm text-gray-400 text-right">
              <p className="flex items-center justify-end gap-2">
                Designed with <Heart size={16} className="text-red-500" /> by Elite Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
