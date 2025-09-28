
import React from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 2l1.7 19.1L12 22l6.8-0.9L20.5 2h-17zm13.2 5.3l-0.2 2.2-0.1 1.2H7.6l0.1 1.5h7.1l-0.2 2.2-0.1 1.2-2.5 0.7-2.5-0.7-0.2-2.2h1.5l0.1 1.1 1.1 0.3 1.1-0.3 0.1-1.1H8.2l-0.2-2.2-0.1-1.2h8.2l-0.1-1.2z"/></svg> },
  { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 2l1.7 19.1L12 22l6.8-0.9L20.5 2h-17zm13.1 5.3l-0.2 2.2-0.1 1.2H7.7l0.1 1.5h7.1l-0.2 2.2-0.1 1.2-2.5 0.7-2.5-0.7-0.2-2.2h1.5l0.1 1.1 1.1 0.3 1.1-0.3 0.1-1.1H8.3l-0.2-2.2-0.1-1.2h8.2l-0.1-1.2z"/></svg> },
  { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.6 23.3c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.3v7.2c0 2.4-1.4 3.5-3.4 3.5-1.8 0-2.8-.9-3.3-2l2.1-1.3zm-7.2.1c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.3v7.2c0 2.4-1.4 3.5-3.4 3.5-1.8 0-2.8-.9-3.3-2l2.1-1.3z" fill="#000"/></svg> },
  { name: 'Bootstrap', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M5.062 2C3.37 2 2 3.37 2 5.062v13.876C2 20.63 3.37 22 5.062 22h13.876C20.63 22 22 20.63 22 18.938V5.062C22 3.37 20.63 2 18.938 2H5.062zm3.938 4.5h5c2.5 0 3.5 1.5 3.5 3.125 0 1.25-.75 2.25-2.125 2.5v.062c1.625.25 2.562 1.25 2.562 2.688C18.937 16.25 17.25 17.5 14.75 17.5h-5V6.5zm2.25 2v2.5h2.25c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25h-2.25zm0 4.25v2.75h2.5c.875 0 1.375-.5 1.375-1.375s-.5-1.375-1.375-1.375h-2.5z"/></svg> },
  { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" viewBox="0 0 48 48" fill="none"><path d="M13.5 24.5C15.5 18.5 19.5 15.5 25.5 15.5C33.5 15.5 34.5 22.5 38.5 22.5C41.5 22.5 43.5 20.5 43.5 20.5C41.5 26.5 37.5 29.5 31.5 29.5C23.5 29.5 22.5 22.5 18.5 22.5C15.5 22.5 13.5 24.5 13.5 24.5ZM4.5 34.5C6.5 28.5 10.5 25.5 16.5 25.5C24.5 25.5 25.5 32.5 29.5 32.5C32.5 32.5 34.5 30.5 34.5 30.5C32.5 36.5 28.5 39.5 22.5 39.5C14.5 39.5 13.5 32.5 9.5 32.5C6.5 32.5 4.5 34.5 4.5 34.5Z" fill="#38BDF8"/></svg> },
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
