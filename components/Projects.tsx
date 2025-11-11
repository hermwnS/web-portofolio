
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Web E-commerce ini berfungsi untuk memuat semua produk yang nantinya akan dibeli oleh masyarakat luas',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
    tags: ['Bootstrap'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/hermwnS/index-ecommerce.git',
  },
  {
    id: 2,
    title: 'Catatan Belanja (Belajar React Pemula)',
    description: 'ini adalah aplikasi catatan belanja untuk mendata barang apa yang harus di beli',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    tags: ['React', 'Vite'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/hermwnS/catatan-belanjaan.git',
  },
  {
    id: 3,
    title: 'Tic Tac Toe (Belajar React Pemula)',
    description: 'ini adalah permainan tic-tac-toe sederhana',
    imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    tags: ['React', 'Vite'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/hermwnS/tic-tac-toe.git',
  },
  {
    id: 4,
    title: 'Anime App (Belajar React Pemula)',
    description: 'aplikasi yang memuat daftar anime-anime beserta penjelasan masing-masing anime',
    imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    tags: ['React', 'Vite'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/hermwnS/Anime-App.git',
  },
  {
    id: 5,
    title: 'ToDo List App Sederhana (Belajar Vue JS Pemula)',
    description: 'aplikasi untuk mencatat kegiatan sehari-hari',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    tags: ['Vue', 'Vite'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/hermwnS/belajar-vue-js.git',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-contain" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Live Demo
            </a>
          )}
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
