import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../data/blog';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 text-center pb-20">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Button to="/blog" variant="primary">Back to Blog</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | AZync Solutions Blog</title>
      </Helmet>

      <article className="pt-32 pb-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-blue mb-8 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="mb-10">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold text-brand-dark mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-brand-border pb-6">
              <div className="flex items-center gap-4">
                 <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                 <div>
                   <p className="font-bold text-brand-dark">{post.author.name}</p>
                   <p className="text-sm text-brand-gray">{post.date} · {post.readTime}</p>
                 </div>
              </div>
              
              <div className="hidden sm:flex gap-2 text-brand-gray">
                <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"><FaTwitter size={18} /></button>
                <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"><FaLinkedin size={18} /></button>
                <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"><FaFacebook size={18} /></button>
              </div>
            </div>
          </div>

          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg prose-blue max-w-none text-brand-gray">
            <p className="lead text-xl text-brand-dark font-medium mb-8">
              {post.excerpt}
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
            </p>
            <h3 className="text-2xl font-jakarta font-bold text-brand-dark mt-10 mb-4">The Core Concepts</h3>
            <p className="mb-6">
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
            </p>
            <blockquote className="border-l-4 border-brand-blue pl-6 italic text-brand-dark my-8 bg-brand-light p-6 rounded-r-2xl">
              "Technology is best when it brings people together and solves real-world problems seamlessly."
            </blockquote>
            <p className="mb-6">
              Donec id justo non massa aliquet imperdiet. Duis pellentesque, arcu et ultrices commodo, velit libero pharetra velit, non pellentesque risus lorem nec risus. Sed facilisis lorem ut velit pellentesque pellentesque.
            </p>
            
            <div className="bg-[#282c34] text-white p-6 rounded-xl my-8 overflow-x-auto font-mono text-sm shadow-card">
              <pre><code>
{`function solveProblem(problem) {
  if (problem.isComplex) {
    return breakDown(problem);
  }
  return deploySolution();
}`}
              </code></pre>
            </div>

            <h3 className="text-2xl font-jakarta font-bold text-brand-dark mt-10 mb-4">Conclusion</h3>
            <p className="mb-6">
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-brand-border">
            <span className="text-sm font-medium text-brand-gray bg-brand-light px-3 py-1 rounded-full">React</span>
            <span className="text-sm font-medium text-brand-gray bg-brand-light px-3 py-1 rounded-full">Web Development</span>
            <span className="text-sm font-medium text-brand-gray bg-brand-light px-3 py-1 rounded-full">Tutorial</span>
          </div>

        </div>
      </article>
    </>
  );
};

export default BlogPost;
