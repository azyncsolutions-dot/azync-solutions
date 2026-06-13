import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Button from '../ui/Button';
import logo1 from '../../assets/logo1.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center group w-fit bg-white px-4 py-2 rounded-xl shadow-brand-sm">
              <img src={logo1} alt="AZync Solutions Logo" className="h-7 w-auto object-contain" />
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
              Where passionate CS minds meet real-world problems. From idea to deployment, we build solutions that actually work.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-brand-gray hover:text-brand-blue hover:bg-[rgba(33,150,243,0.1)] transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-brand-gray hover:text-brand-blue hover:bg-[rgba(33,150,243,0.1)] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-brand-gray hover:text-brand-blue hover:bg-[rgba(33,150,243,0.1)] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-brand-gray hover:text-brand-blue hover:bg-[rgba(33,150,243,0.1)] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-jakarta font-bold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Our Work</Link></li>
              <li><Link to="/hire-us" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Hire Our Team</Link></li>
              <li><Link to="/careers" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-jakarta font-bold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">AI & ML Solutions</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Tech Consulting</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-4">
            <h4 className="font-jakarta font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-brand-gray text-sm mb-4">
              Subscribe to our newsletter for the latest in tech and development.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors flex-1"
                required
              />
              <Button type="submit" variant="primary">Subscribe</Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(33,150,243,0.20)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-sm">
            © {new Date().getFullYear()} AZync Solutions. Built with ❤️ by two passionate computer scientists.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-[rgba(33,150,243,0.1)] flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
