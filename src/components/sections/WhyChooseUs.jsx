import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const WhyChooseUs = () => {
  const points = [
    { title: "Passionate Drive", desc: "Fresh perspectives, boundless energy, and a hunger to prove ourselves through exceptional work." },
    { title: "Problem-First Approach", desc: "We don't just write code; we solve the underlying business problems with the right technology." },
    { title: "End-to-End Delivery", desc: "From UI/UX design to backend architecture and deployment, we handle the entire lifecycle." },
    { title: "Affordable & Transparent", desc: "No hidden fees, no enterprise bloat. Just honest pricing for high-quality software." },
    { title: "Ongoing Support", desc: "We don't disappear after launch. We offer reliable maintenance and updates." },
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-brand-gray text-lg mb-8 leading-relaxed">
                We combine academic excellence with practical development experience to deliver solutions that are both theoretically sound and highly pragmatic.
              </p>

              <div className="flex flex-col gap-6">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-brand-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-jakarta font-bold text-brand-dark text-lg mb-1">{point.title}</h4>
                      <p className="text-brand-gray">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button to="/about" variant="primary">Learn More About Us</Button>
              </div>
            </motion.div>
          </div>

          {/* Graphic / Abstract Illustration */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute inset-0 bg-brand-gradient rounded-full opacity-10 animate-pulse" />
              <div className="absolute inset-4 bg-brand-gradient rounded-full opacity-20" />
              <div className="absolute inset-8 bg-brand-gradient rounded-full opacity-30" />
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="w-4/5 h-4/5 object-cover rounded-2xl shadow-brand-lg"
                />
              </div>

              {/* Decorative floating bits */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-5 w-20 h-20 bg-white rounded-xl shadow-brand-lg border border-brand-border flex items-center justify-center z-20"
              >
                 <div className="font-jakarta font-bold text-xl text-gradient">100%</div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-5 w-24 h-16 bg-white rounded-xl shadow-brand-lg border border-brand-border flex items-center justify-center z-20"
              >
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-brand-blue" />
                   <div className="w-2 h-2 rounded-full bg-brand-indigo" />
                   <div className="w-2 h-2 rounded-full bg-brand-deep" />
                 </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
