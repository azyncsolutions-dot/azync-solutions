import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const processSteps = [
  { step: '01', title: 'Discovery & Requirements', desc: 'We dive deep into your business goals, target audience, and technical constraints to lay a solid foundation.' },
  { step: '02', title: 'Design & Planning', desc: 'Creating intuitive user experiences and planning a scalable architecture before writing a single line of code.' },
  { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous integration and rigorous testing to ensure exceptional quality.' },
  { step: '04', title: 'Launch & Deployment', desc: 'Smooth deployment to production environments with zero downtime and comprehensive monitoring.' },
  { step: '05', title: 'Ongoing Support', desc: 'Post-launch maintenance, feature enhancements, and continuous optimization.' }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | AZync Solutions</title>
        <meta name="description" content="End-to-End Tech Solutions by AZync Solutions. Web development, mobile apps, AI, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6">What We Do</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-6">
              End-to-End <span className="text-gradient">Tech Solutions</span>
            </h1>
            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive software development services designed to take your idea from concept to a market-ready product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
                      viewport={{ once: true }} 
                      className="relative w-full max-w-md aspect-square bg-brand-light rounded-[2rem] flex items-center justify-center p-12"
                    >
                      <div className="absolute inset-0 bg-brand-gradient opacity-5 rounded-[2rem]"></div>
                      <service.icon size={120} className="text-brand-blue" strokeWidth={1} />
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                    >
                      <div className="w-14 h-14 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center mb-6">
                        <service.icon size={28} />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-jakarta font-bold text-brand-dark mb-4">
                        {service.title}
                      </h2>
                      <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="text-sm font-medium text-brand-blue bg-[rgba(33,150,243,0.08)] border border-[rgba(33,150,243,0.2)] px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button to="/contact" variant="primary">Get This Service</Button>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gradient rounded-full blur-[120px] opacity-20" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold mb-4">
              Our Proven Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10" />
            <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[2px] bg-brand-blue scale-x-0 origin-left animate-[scaleX_2s_ease-in-out_forwards]" />

            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-dark border-4 border-brand-blue flex items-center justify-center mb-6 shadow-brand relative z-10">
                  <span className="font-jakarta font-bold text-2xl text-brand-blue">{step.step}</span>
                </div>
                <h4 className="font-jakarta font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
