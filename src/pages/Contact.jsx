import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { faqs } from '../data/faq';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
          subject: "New Contact Form Submission - AZync Solutions",
          from_name: "AZync Solutions"
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Web3Forms error:", result);
        alert("Submission failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AZync Solutions</title>
        <meta name="description" content="Get in touch with AZync Solutions. We'd love to hear about your next project." />
      </Helmet>

      {/* Hero & Form Split Section */}
      <section className="pt-32 pb-24 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gradient-soft rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Info Column */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col">
              <Badge className="w-fit mb-6">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-6">
                Let's Build Something <span className="text-gradient">Together</span>
              </h1>
              <p className="text-brand-gray text-lg mb-12 max-w-md">
                Whether you have a fully fleshed out project in mind or just a spark of an idea — we'd love to hear from you.
              </p>

              <div className="flex flex-col gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-brand-dark text-lg mb-1">Email Us</h4>
                    <p className="text-brand-gray">
                      <a href="mailto:azyncsolutions@gmail.com" className="hover:text-brand-blue transition-colors">
                        azyncsolutions@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(37,211,102,0.1)] text-[#25D366] flex items-center justify-center shrink-0">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-brand-dark text-lg mb-1">WhatsApp Us</h4>
                    <p className="text-brand-gray">
                      <a href="https://wa.me/923091840168" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
                        +92 309 1840168
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-brand-dark text-lg mb-1">Response Time</h4>
                    <p className="text-brand-gray">We aim to reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(33,150,243,0.1)] text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-brand-dark text-lg mb-1">Location</h4>
                    <p className="text-brand-gray">Global / Remote</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-brand-border w-fit shadow-sm">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                 <span className="font-medium text-brand-dark text-sm">Currently accepting new projects</span>
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-brand-lg border border-brand-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient" />
                
                <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-6">Send us a message</h3>
                
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center">
                    <MessageSquare size={48} className="mb-4 text-green-500" />
                    <h4 className="font-jakarta font-bold text-xl mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
                      <input 
                        type="text" 
                        {...register("name", { required: "Name is required" })} 
                        className={`w-full bg-brand-light border ${errors.name ? 'border-red-500' : 'border-brand-border'} rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(33,150,243,0.15)] transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                      <input 
                        type="email" 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })} 
                        className={`w-full bg-brand-light border ${errors.email ? 'border-red-500' : 'border-brand-border'} rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(33,150,243,0.15)] transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Service Interested In</label>
                      <select 
                        {...register("service")}
                        className="w-full bg-brand-light border border-brand-border rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(33,150,243,0.15)] transition-all appearance-none"
                      >
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="ai">AI / ML Solution</option>
                        <option value="design">UI/UX Design</option>
                        <option value="other">Other / Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">Project Details</label>
                      <textarea 
                        {...register("message", { required: "Message is required" })}
                        rows={4}
                        className={`w-full bg-brand-light border ${errors.message ? 'border-red-500' : 'border-brand-border'} rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(33,150,243,0.15)] transition-all resize-none`}
                        placeholder="Tell us a little bit about what you're trying to achieve..."
                      />
                      {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-gradient text-white font-medium rounded-xl px-6 py-4 mt-2 shadow-brand hover:shadow-brand-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>Send Message <ArrowRight size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-brand-gradient mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-brand-blue shadow-sm' : 'border-brand-border hover:border-brand-blue/30'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-jakarta font-bold text-brand-dark">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-brand-blue text-white' : 'bg-brand-light text-brand-blue'}`}>
                    <span className="text-xl leading-none">{openFaq === index ? '−' : '+'}</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-brand-gray leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
