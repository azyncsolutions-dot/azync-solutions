import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    id: 1,
    quote: "AZync Solutions transformed our chaotic inventory process into a streamlined system. They delivered on time and exceeded expectations.",
    name: "Sarah Jenkins",
    role: "Operations Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "Their grasp of modern web technologies is impressive. The frontend they built is blazing fast and the UI is gorgeous.",
    name: "Michael Chen",
    role: "Tech Startup Founder",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    quote: "Working with them felt like an extension of our own team. Professional, responsive, and incredibly talented developers.",
    name: "Emily Rodriguez",
    role: "Product Owner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              What Our Clients Say
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col relative pt-12">
                <div className="absolute top-6 right-6 text-brand-tint">
                  <Quote size={40} className="fill-brand-blue/10 text-brand-blue/20" />
                </div>
                
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-brand-gray italic mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <h4 className="font-jakarta font-bold text-brand-dark text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-brand-gray text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
