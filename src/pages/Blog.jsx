import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { blogPosts } from '../data/blog';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Blog = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog | AZync Solutions</title>
        <meta name="description" content="Insights, Tutorials & Tech Thoughts from the team at AZync Solutions." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <Badge className="mb-6">Our Blog</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark mb-4">
                Insights, Tutorials & <span className="text-gradient">Tech Thoughts</span>
              </h1>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full md:w-[300px] bg-white border border-brand-border rounded-full py-3 pl-12 pr-4 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all shadow-sm text-brand-dark"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Featured Post */}
              {featuredPost && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Card className="p-0 overflow-hidden group border border-brand-border hover:border-brand-blue/30 shadow-sm">
                    <div className="md:flex h-full">
                      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                        <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                        <h2 className="text-2xl md:text-3xl font-jakarta font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                          <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                        </h2>
                        <p className="text-brand-gray mb-6">{featuredPost.excerpt}</p>
                        <div className="flex items-center gap-3 mt-auto">
                           <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full" />
                           <div>
                             <p className="text-sm font-bold text-brand-dark">{featuredPost.author.name}</p>
                             <p className="text-xs text-brand-gray">{featuredPost.date} · {featuredPost.readTime}</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Grid of Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <Card className="h-full flex flex-col p-0 overflow-hidden group shadow-sm border border-brand-border hover:border-brand-blue/30">
                      <div className="h-48 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 backdrop-blur-sm shadow-sm">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-jakarta font-bold text-brand-dark mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-brand-gray text-sm mb-6 flex-grow">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-light">
                          <div className="flex items-center gap-2">
                             <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                             <span className="text-xs font-medium text-brand-dark">{post.author.name}</span>
                          </div>
                          <span className="text-xs text-brand-gray">{post.readTime}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 hidden lg:block space-y-10">
              
              <div className="p-6 bg-brand-light rounded-2xl border border-brand-border">
                <h4 className="font-jakarta font-bold text-brand-dark mb-4">Categories</h4>
                <ul className="space-y-3">
                  {['Development', 'AI / ML', 'Design', 'Startup Journey'].map(cat => (
                    <li key={cat}>
                      <a href="#" className="flex justify-between items-center text-brand-gray hover:text-brand-blue transition-colors text-sm">
                        <span>{cat}</span>
                        <span className="bg-white text-xs px-2 py-0.5 rounded-full border border-brand-border">2</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-brand-dark text-white rounded-2xl shadow-brand-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                <div className="relative z-10 text-center">
                  <h4 className="font-jakarta font-bold text-xl mb-2">Join the Newsletter</h4>
                  <p className="text-brand-gray text-sm mb-6">Get our latest tips and tricks delivered to your inbox.</p>
                  <form className="flex flex-col gap-3">
                    <input type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue" />
                    <Button variant="primary" className="w-full">Subscribe</Button>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
