
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Hermawan Saputra
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-8">
            Junior Frontend Web Developer
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            Saya adalah lulusan dari Universitas Telkom jurusan S1 Rekayasa Perangkat Lunak.
            Saya memiliki ketertarikan terhadap pengembangan website terutama pada bagian pengembangan frontend.
            Saya memiliki keingintahuan terhadap cara merancang frontend web dengan baik dan mudah dipahami oleh user.
            Selain itu saya juga memiliki ketertarikan pada pengujian perangkat lunak (software testing) untuk memastikan kualitas dari sebuah aplikasi web.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
