import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SiUpwork } from 'react-icons/si';
import { ArrowRight, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.JPG';

const HireUs = () => {
  return (
    <>
      <Helmet>
        <title>Hire Us | AZync Solutions</title>
        <meta name="description" content="Hire AZync Solutions on Upwork. Work directly with our agency or individual founders." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gradient-soft rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6">Hire Our Team</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto">
              Find us on Upwork. You can hire our full agency or collaborate with our founders individually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Freelance Platforms Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          {/* Agency Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8 md:p-12 border border-brand-border hover:border-brand-blue/30 shadow-brand-lg relative overflow-hidden bg-brand-light/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gradient-soft rounded-full blur-[60px] opacity-30 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between relative z-10">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#14a800]/10 text-[#14a800] flex items-center justify-center">
                      <SiUpwork size={28} />
                    </div>
                    <Badge className="bg-[#14a800]/10 text-[#14a800] border-none font-semibold">Upwork Agency</Badge>
                  </div>
                  <h2 className="text-3xl font-jakarta font-bold text-brand-dark mb-4">
                    AZync Solutions Agency
                  </h2>
                  <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                    Collaborate with our structured agency for end-to-end projects. From requirement gathering to full deployment, we provide a unified team workflow and escrow protection.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                      <CheckCircle2 size={16} className="text-[#14a800]" /> Verified Upwork Agency Account
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                      <CheckCircle2 size={16} className="text-[#14a800]" /> Escrow Contract Protection
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                      <CheckCircle2 size={16} className="text-[#14a800]" /> Seamless Milestones & Deliverables
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark font-medium text-sm">
                      <CheckCircle2 size={16} className="text-[#14a800]" /> Continuous Support & Updates
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.upwork.com/agencies/2065869899992555774/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#14a800] hover:bg-[#108a00] text-white font-semibold rounded-2xl px-8 py-4 shadow-brand transition-all flex items-center gap-2 shrink-0 group"
                >
                  Hire Our Agency <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Section Divider */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-jakarta font-bold text-brand-dark mb-2">
              Hire Us Individually
            </h3>
            <p className="text-brand-gray">Work directly with our founders on specific contract roles.</p>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Founder 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full flex flex-col p-6 border border-brand-border hover:border-brand-blue/20 shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                  <img src={founder1} alt="Ali Shahzad" className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue" />
                  <div>
                    <h4 className="text-xl font-jakarta font-bold text-brand-dark mb-0.5">Ali Shahzad</h4>
                    <p className="text-brand-blue text-sm font-semibold">Co-Founder & CEO</p>
                  </div>
                </div>
                
                <p className="text-brand-gray text-sm mb-6 flex-grow">
                  Specialized in product management, front-end architecture, and full-stack software development. Ready to help you bootstrap and launch your startup product.
                </p>

                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-brand-light">
                  <a 
                    href="https://www.upwork.com/freelancers/~0139d8738981a7d733?mp_source=share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#14a800] hover:bg-[#108a00] text-white font-medium py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <SiUpwork size={16} /> Ali's Upwork Profile
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full flex flex-col p-6 border border-brand-border hover:border-brand-blue/20 shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                  <img src={founder2} alt="Zain Shahid" className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue" />
                  <div>
                    <h4 className="text-xl font-jakarta font-bold text-brand-dark mb-0.5">Zain Shahid</h4>
                    <p className="text-brand-blue text-sm font-semibold">Co-Founder & CTO</p>
                  </div>
                </div>

                <p className="text-brand-gray text-sm mb-6 flex-grow">
                  Specialized in backend scaling, database architecture, AI/ML integrations, and complex business logic setup. Hire Zain for system design and backend engineering.
                </p>

                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-brand-light">
                  <a 
                    href="https://www.upwork.com/freelancers/~01fef35e6ad2aafd9d?mp_source=share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#14a800] hover:bg-[#108a00] text-white font-medium py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <SiUpwork size={16} /> Zain's Upwork Profile
                  </a>
                </div>
              </Card>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
};

export default HireUs;
