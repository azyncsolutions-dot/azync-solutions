import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | AZync Solutions</title>
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center bg-brand-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gradient-soft rounded-full blur-[80px] -z-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[120px] md:text-[180px] font-jakarta font-bold text-gradient leading-none tracking-tighter mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-jakarta font-bold text-brand-dark mb-6">
              Oops! Page not found.
            </h2>
            <p className="text-brand-gray text-lg mb-10 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button to="/" variant="primary">
              Return Home
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
