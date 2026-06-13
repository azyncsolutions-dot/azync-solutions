import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Users, Target, Search, Heart } from 'lucide-react';
import { team } from '../data/team';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Always pushing boundaries to find better, smarter ways to solve problems.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Honest communication, transparent pricing, and doing what we say we will.' },
  { icon: Users, title: 'Collaboration', desc: 'Working closely with our clients as true partners, not just vendors.' },
  { icon: Target, title: 'Quality', desc: 'Writing clean, scalable code and designing interfaces that just work.' },
  { icon: Search, title: 'Transparency', desc: 'Clear processes, regular updates, and no black-box development.' },
  { icon: Heart, title: 'Impact', desc: 'Building software that makes a real difference for your business and users.' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AZync Solutions</title>
        <meta name="description" content="Two Students. One Mission. Infinite Solutions. Meet the team behind AZync Solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-6">
              Two Students. One Mission.<br className="hidden md:block"/> <span className="text-gradient">Infinite Solutions.</span>
            </h1>
            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto">
              We started AZync Solutions with a simple idea: to bridge the gap between academic computer science and real-world business problems.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gradient-soft rounded-full blur-[100px] -z-10" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full bg-brand-tint border-none">
                <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center mb-6 shadow-brand">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-4">Our Mission</h3>
                <p className="text-brand-gray text-lg leading-relaxed">
                  To make powerful, scalable tech solutions accessible to everyone — from ambitious startups to established local businesses, empowering them to thrive in the digital age.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full bg-brand-dark border-none">
                <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.1)] text-brand-blue flex items-center justify-center mb-6">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-jakarta font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  To become a globally recognized problem-solving tech studio, known for our unwavering commitment to quality, innovation, and pragmatic engineering.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              Meet the Founders
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group p-0">
                  <div className="h-64 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <div className="flex gap-4 w-full justify-center">
                         <a href={member.socials.linkedin} className="text-white hover:text-brand-blue transition-colors">LinkedIn</a>
                         <a href={member.socials.github} className="text-white hover:text-brand-blue transition-colors">GitHub</a>
                       </div>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-1">{member.name}</h3>
                    <p className="text-brand-blue font-semibold mb-4">{member.role}</p>
                    <p className="text-brand-gray mb-6">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-medium text-brand-gray bg-brand-light px-3 py-1 rounded-full border border-brand-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[rgba(33,150,243,0.08)] text-brand-blue flex items-center justify-center mx-auto mb-6 transform transition-transform hover:-translate-y-2">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-jakarta font-bold text-brand-dark mb-3">{value.title}</h4>
                <p className="text-brand-gray">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
