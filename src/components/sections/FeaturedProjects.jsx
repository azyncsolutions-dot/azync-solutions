import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              Recent Work We're Proud Of
            </h2>
            <div className="h-1 w-24 bg-brand-gradient rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button to="/portfolio" variant="ghost">View All Projects</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
