import React from 'react';
import { Briefcase, MapPin, Clock, GraduationCap } from 'lucide-react';
import { personalInfo, aboutInfo, education } from '../data/portfolioData';

const About = ({ darkMode }) => {
  const infoItems = [
    {
      icon: <Briefcase size={18} className="text-blue-600" />,
      label: 'Experience',
      value: personalInfo.currentRole,
    },
    {
      icon: <MapPin size={18} className="text-blue-600" />,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: <Clock size={18} className="text-blue-600" />,
      label: 'Availability',
      value: personalInfo.availability,
    },
    {
      icon: <GraduationCap size={18} className="text-blue-600" />,
      label: 'Education',
      value: education[0].degree,
    },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Description */}
          <div>
            {aboutInfo.description.trim().split('\n\n').map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed mb-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Right: Info Cards */}
          <div>
            <h3 className={`text-lg font-semibold mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Personal Information
            </h3>
            <div className="space-y-4">
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-800'
                      : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.label}
                    </p>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className={`mt-6 p-5 rounded-xl border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Education
              </h4>
              {education.map((edu, i) => (
                <div key={i}>
                  <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</p>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.institution}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{edu.period}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
