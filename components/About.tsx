
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="./img/foto yudisium.jpg"
              alt="John Doe"
              className="rounded-full shadow-2xl mx-auto border-4 border-cyan-500"
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300">
            <p className="mb-4">
              Saya senang merancang tampilan website yang praktis dan mudah dipahami oleh user. Saya memiliki sedikit pengalaman praktik kerja industri sebelumnya selama 4,5 bulan.
            </p>
            <p className="mb-4">
              Pengalaman praktik kerja industri pertama yaitu di PT. Laskar Teknologi Mulia (CyberLabs) selama 3 bulan mulai dari Januari 2020 - Maret 2020.
              Di PT. Laskar Teknologi Mulia, saya diberi tugas mengerjakan web company profile dan web ecommerce. Tools yang saya gunakan saat itu ialah Laravel dan Bootstrap.
            </p>
            <p className="mb-4">
              Pengalaman praktik kerja industri kedua yaitu di HUMiC Engineering Telkom University yang merupakan research center di lingkungan Universitas Telkom. Disini saya bersama teman-teman
              sekelompok merancang web research and innovation yang berfungsi untuk memuat semua research dari anggota HUMiC Engineering. Tools yang saya gunakan saat itu ialah Streamlit. Streamlit ini 
              adalah library python yang memudahkan pengembang dalam membangun tampilan website.
            </p>
            <p className="mb-4">
              Selain itu juga saya saat ini sedang mengeksplor framework-framework lain seperti React.js, Vite, Tailwindcss, Vue.js, dan juga Angular.js agar saya dapat melihat bagaimana framework
              tersebut bekerja dan melihat bentuk dari susunan kode yang dipakai pada framework tersebut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
