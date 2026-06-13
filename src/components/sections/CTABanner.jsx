import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-gradient">
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)' }} />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-6">
            Have a problem? Let's solve it together.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Ready to bring your idea to life? Get in touch with us today for a free consultation and project estimate.
          </p>
          <Button to="/contact" variant="white">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
