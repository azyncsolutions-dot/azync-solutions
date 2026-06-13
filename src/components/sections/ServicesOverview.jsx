import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import Card from '../ui/Card';

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              What We Do Best
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full"></div>
            <p className="mt-6 text-brand-gray max-w-2xl mx-auto text-lg">
              We provide end-to-end technical solutions tailored to your unique business needs, leveraging the latest technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col items-start text-left hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-jakarta font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="mt-auto text-brand-blue font-semibold hover:text-brand-deep transition-colors inline-flex items-center gap-1 group"
                >
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
