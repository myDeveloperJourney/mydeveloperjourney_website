'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  // { id: 'speaking', label: 'Speaking' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-darkbgAlt bg-opacity-90 backdrop-blur-md z-50 border-b border-purpleAccent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('hero')}>

          {/* Site logo */}
          <img src="/logo.png" alt="Site Logo" className="w-8 h-8 object-contain cursor-pointer" />
          <span className="text-purpleAccent font-bold text-lg cursor-pointer select-none">MyDeveloperJourney</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className={`text-sm font-medium hover:text-purpleAccent focus:outline-none ${
                activeSection === id ? 'text-purpleAccent underline' : 'text-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-300 hover:text-purpleAccent focus:outline-none focus:ring-2 focus:ring-purpleAccent rounded"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-darkbgAlt border-t border-purpleAccent">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className={`block w-full text-left px-4 py-2 text-gray-300 hover:text-purpleAccent focus:outline-none ${
                activeSection === id ? 'text-purpleAccent underline' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
