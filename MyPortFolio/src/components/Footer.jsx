import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ darkMode }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 border-t ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <span className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              rohitkumar<span className="text-blue-600">.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <p className={`text-sm flex items-center gap-1 ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Made with <Heart size={13} className="text-red-500 fill-red-500" /> by Rohit Kumar &copy; {new Date().getFullYear()}
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
