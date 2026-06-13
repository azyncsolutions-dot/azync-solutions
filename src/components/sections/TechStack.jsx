import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [
  { name: 'React', src: 'https://cdn.simpleicons.org/react' },
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python' },
  { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Firebase', src: 'https://cdn.simpleicons.org/firebase' },
  { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'Figma', src: 'https://cdn.simpleicons.org/figma' },
  { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs' },
  { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript' },
  { name: 'AWS', src: 'https://cdn.simpleicons.org/amazonaws' },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white border-t border-brand-border overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="font-jakarta font-bold text-brand-dark text-xl mb-2">Technologies We Master</h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div 
              key={index} 
              className="mx-10 flex flex-col items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={tech.src} alt={tech.name} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
