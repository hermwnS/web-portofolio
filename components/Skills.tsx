
import React from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg> },
  { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 5H11l5 14H7.5l-5-14h4.5v14"></path></svg> },
  { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
  { name: 'Bootstrap', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-5.5 9h11L12 2zM12 22l5.5-9h-11L12 22z"></path></svg> },
  { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l-7-7 7-7 7 7-7 7z"></path></svg> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
