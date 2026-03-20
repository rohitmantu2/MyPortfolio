import React, { useEffect, useRef, useState } from 'react';
import { skills, techStack, certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

const SkillBar = ({ name, level, darkMode, animate }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
      <span className="text-sm font-semibold text-blue-600">{level}%</span>
    </div>
    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div
        className="h-2 rounded-full bg-blue-600 transition-all duration-1000 ease-out"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = ({ darkMode }) => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Backend', data: skills.backend },
    { title: 'Frontend', data: skills.frontend },
    { title: 'Database', data: skills.database },
    { title: 'DevOps & Cloud', data: skills.devops },
  ];

  return (
    <section id="skills" ref={sectionRef} className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className={`text-base font-semibold mb-5 pb-2 border-b ${
                darkMode ? 'text-gray-200 border-gray-700' : 'text-gray-800 border-gray-100'
              }`}>
                {cat.title}
              </h3>
              {cat.data.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  darkMode={darkMode}
                  animate={animate}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-16">
          <h3 className={`text-lg font-semibold text-center mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-700'
                    : 'bg-gray-50 border-gray-100 hover:border-blue-200'
                }`}
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                <span className={`text-xs font-medium text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className={`text-lg font-semibold text-center mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-700'
                    : 'bg-gray-50 border-gray-100 hover:border-blue-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg flex-shrink-0 ${darkMode ? 'bg-blue-900/40' : 'bg-blue-50'}`}>
                    <Award size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold leading-snug mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {cert.name}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {cert.issuer}
                    </p>
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

export default Skills;
