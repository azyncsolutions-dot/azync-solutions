import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-32 text-center pb-20">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Button to="/portfolio" variant="primary">Back to Portfolio</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | AZync Solutions</title>
      </Helmet>

      {/* Hero Image */}
      <section className="pt-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-blue mb-8 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="flex flex-col gap-6 mb-12">
            <Badge className="w-fit">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-bold text-brand-dark">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm font-medium text-brand-blue bg-[rgba(33,150,243,0.08)] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-brand-lg">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Body */}
            <div className="md:col-span-2 space-y-10 text-brand-gray text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-4">Overview & Problem Statement</h3>
                <p>{project.description}</p>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-4">Our Role & Solution</h3>
                <p>We designed and developed the entire application from scratch, focusing on performance, accessibility, and a seamless user experience. The architecture was built to handle high traffic loads while remaining cost-effective.</p>
              </div>

              <div>
                <h3 className="text-2xl font-jakarta font-bold text-brand-dark mb-4">Results & Impact</h3>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-brand-gray">
                  <li>Increased user engagement by 45% in the first quarter.</li>
                  <li>Reduced page load times by 2 seconds.</li>
                  <li>Successfully integrated 3 third-party API services securely.</li>
                </ul>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="md:col-span-1 space-y-8">
               <div className="p-6 bg-brand-light rounded-2xl border border-brand-border">
                  <h4 className="font-jakarta font-bold text-brand-dark mb-4">Tech Stack</h4>
                  <ul className="space-y-2">
                    {project.tags.map(t => (
                      <li key={t} className="flex items-center gap-2 text-brand-gray">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                         {t}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="flex flex-col gap-3">
                 <Button href="#" variant="primary" className="w-full gap-2">
                   Live Preview <ExternalLink size={16} />
                 </Button>
                 <Button href="#" variant="ghost" className="w-full gap-2">
                   View GitHub <FaGithub size={16} />
                 </Button>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
