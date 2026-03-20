import React from 'react';
import { experience } from '../data/portfolioData';
import { Calendar, Layers } from 'lucide-react';

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className={`text-3xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Left) */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative flex flex-col">
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-blue-600 border-2 border-white z-10" />

                {/* Card */}
                <div className="pl-12">
                  <div
                    className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg hover:scale-[1.01] ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 hover:border-blue-700'
                        : 'bg-white border-gray-100 hover:border-blue-200'
                    }`}
                  >
                    {/* Role & Company */}
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {job.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                      {job.company}
                    </p>

                    {/* Period & Domain */}
                    <div
                      className={`flex flex-wrap gap-3 mb-4 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 text-xs">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <Layers size={12} />
                        {job.domain}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm mb-4 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {job.description}
                    </p>

                    {/* Bullets */}
                    <ul
                      className={`space-y-2 mb-5 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            darkMode
                              ? 'bg-blue-900/40 text-blue-300 border border-blue-800'
                              : 'bg-blue-50 text-blue-700 border border-blue-100'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;