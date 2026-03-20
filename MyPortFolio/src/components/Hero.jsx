import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CodeCard = ({ darkMode }) => {
  const lines = [
    { indent: 0, content: 'class RohitKumar {', color: 'text-blue-500' },
    { indent: 1, content: 'role = "Product Engineer";', color: 'text-purple-400' },
    { indent: 1, content: 'skills = [', color: 'text-gray-400' },
    { indent: 2, content: '".NET Core", "Azure",', color: 'text-green-400' },
    { indent: 2, content: '"C#", "REST APIs"', color: 'text-green-400' },
    { indent: 1, content: '];', color: 'text-gray-400' },
    { indent: 1, content: 'passion = "Building Scalable Apps";', color: 'text-yellow-400' },
    { indent: 0, content: '}', color: 'text-blue-500' },
  ];

  return (
    <div className={`relative w-full max-w-md mx-auto`}>
      {/* Background circles */}
      <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-blue-100 dark:bg-blue-900/20 z-0" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/20 z-0" />

      <div className={`relative z-10 rounded-2xl shadow-xl border overflow-hidden ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        {/* Window bar */}
        <div className={`flex items-center gap-2 px-4 py-3 border-b ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-100 bg-gray-50'}`}>
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className={`ml-3 text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>portfolio.cs</span>
        </div>

        {/* Code content */}
        <div className={`px-5 py-4 font-mono text-sm space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          {lines.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }} className={`${line.color}`}>
              {line.content}
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className={`px-5 py-3 text-center text-sm border-t ${
          darkMode ? 'border-gray-700 text-gray-400 bg-gray-900' : 'border-gray-100 text-gray-500 bg-white'
        }`}>
          {personalInfo.heroCaption}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 right-8 z-20">
        <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
          3+ Years Experience
        </div>
      </div>
    </div>
  );
};

const Hero = ({ darkMode }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-16 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left: Text */}
                    <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-blue-600 font-semibold text-lg mb-2">Hello, I'm</p>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Rohit Kumar
            </h1>
            <h2 className={`text-2xl lg:text-3xl font-semibold mb-5 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <span className="text-blue-600">Full Stack</span>{' '}
              <span className="text-blue-600">.NET</span>{' '}
              <span>Developer</span>
            </h2>
            <p className={`text-base leading-relaxed mb-8 max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className={`font-semibold px-7 py-3 rounded-lg border-2 transition-colors duration-200 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                View Experience
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-full border transition-colors duration-200 ${
                  darkMode
                    ? 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                    : 'border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-full border transition-colors duration-200 ${
                  darkMode
                    ? 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                    : 'border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2.5 rounded-full border transition-colors duration-200 ${
                  darkMode
                    ? 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                    : 'border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Code Card */}
                  <div className="flex justify-center lg:justify-end">
            <CodeCard darkMode={darkMode} />
          </div>
        </div>

        {/* Scroll Down */}
        <div className="flex flex-col items-center pb-8 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className={`flex flex-col items-center gap-1 text-sm transition-colors duration-200 ${
              darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span>Scroll Down</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
