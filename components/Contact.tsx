
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Kenalan</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Berikut ini adalah email, linkedin, github saya
        </p>
        <a
          href="mailto:wawan.jbx@gmail.com"
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 shadow-lg text-lg"
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
