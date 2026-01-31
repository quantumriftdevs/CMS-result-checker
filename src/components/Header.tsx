import { useState } from 'react';
import { Menu, X, BookOpen, LogIn, BarChart3 } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Elite Academy
            </h1>
            <p className="text-xs text-gray-500 font-medium">Excellence in Education</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2 text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition">
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition transform hover:scale-105">
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Results</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50">
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg">
              <BarChart3 className="w-4 h-4" />
              Results
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
