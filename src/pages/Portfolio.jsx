import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

const categories = ['All', 'Web', 'Mobile', 'AI-ML', 'Design'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | AZync Solutions</title>
        <meta name="description" content="Projects that speak for themselves. View our recent work in web, mobile, and AI." />
      </Helmet>

      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6">Our Work</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-6">
              Projects That <span className="text-gradient">Speak for Themselves</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category ? 'text-white' : 'text-brand-gray hover:text-brand-blue'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-brand-blue rounded-full -z-10 shadow-brand"
                  />
                )}
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden p-0 group">
                    <div className="relative h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-brand-deep/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-white/90 backdrop-blur-sm border-white/20 text-brand-blue shadow-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-jakarta font-bold text-brand-dark mb-2">
                        {project.title}
                      </h3>
                      <p className="text-brand-gray text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs font-medium text-brand-gray bg-brand-light px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link 
                        to={`/portfolio/${project.slug}`} 
                        className="mt-auto text-brand-blue font-semibold hover:text-brand-deep transition-colors inline-flex items-center gap-1 group/link"
                      >
                        View Case Study 
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Portfolio;
