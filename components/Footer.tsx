
import React from 'react';

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/hermwnS', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.218 6.839 9.542.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.22-.252-4.555-1.112-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.216 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hermawan-saputra-0753941a5/', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2 3.6 4.594v5.602z" /></svg> },
    { name: 'Instagram', href: 'https://www.instagram.com/hermawansaputra1311/', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.758l-5.273-6.962-6.035 6.962h-3.31l7.73-8.918-8.091-10.582h6.793l4.827 6.38 5.536-6.38zm-2.413 17.7h1.837l-12.6-16.493h-1.962l12.725 16.493z"/></svg> }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Hermawan Saputra. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; },
];


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Hermawan Saputra. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
