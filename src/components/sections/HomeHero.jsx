import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { ArrowDown, Code2, Cpu, Smartphone } from 'lucide-react';

const HomeHero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-light">
      {/* Background Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-[500px] h-[500px] rounded-full blob-1 -z-10"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-[10%] w-[600px] h-[600px] rounded-full blob-2 -z-10"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            <Badge className="mb-2">Innovate With Us</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              We Build Solutions That <span className="text-gradient">Actually Work</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-gray max-w-xl leading-relaxed">
              AZync Solutions — where passionate CS minds meet real-world problems. From idea to deployment, we've got you.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button to="/portfolio" variant="primary">See Our Work</Button>
              <Button to="/contact" variant="ghost">Let's Talk</Button>
            </div>
          </motion.div>

          {/* Floating Badges & Illustration */}
          <div className="relative h-[400px] md:h-[500px] w-full hidden lg:flex items-center justify-center">
            {/* We'll use some floating glass cards as the abstract illustration */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-40"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <span className="font-jakarta font-bold text-sm">Web Dev</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[20%] left-[10%] glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-40"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(63,81,181,0.1)] text-brand-indigo flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <span className="font-jakarta font-bold text-sm">AI & ML</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] left-[40%] glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-48 shadow-brand-lg border-[rgba(33,150,243,0.3)] z-10"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-brand">
                <Smartphone size={32} />
              </div>
              <span className="font-jakarta font-bold text-base text-center">Mobile Apps</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-blue flex flex-col items-center gap-2 hover:text-brand-deep transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
};

export default HomeHero;
