import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../components/sections/HomeHero';
import StatsBar from '../components/sections/StatsBar';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Testimonials from '../components/sections/Testimonials';
import TechStack from '../components/sections/TechStack';
import CTABanner from '../components/sections/CTABanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AZync Solutions | AI Voice Agents & Automation Built on Claude</title>
        <meta name="description" content="AZync Solutions builds AI voice agents, custom automation, and web applications built on Claude for HVAC businesses, startups, and SMBs worldwide." />
        <link rel="canonical" href="https://www.azyncsolutions.com/" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AZync Solutions",
                "alternateName": ["AZync", "azyncsolutions", "azyncsolutions.com"],
                "foundingDate": "2026-03",
                "url": "https://www.azyncsolutions.com",
                "logo": "https://www.azyncsolutions.com/favicon.png",
                "description": "AZync Solutions builds custom software, web, and mobile products for startups and businesses.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Islamabad",
                  "addressCountry": "PK"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/azync-solutions",
                  "https://twitter.com/azyncsolutions",
                  "https://github.com/azync-solutions"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "AZync Solutions",
                "url": "https://www.azyncsolutions.com"
              }
            ]
          `}
        </script>
      </Helmet>
      
      <HomeHero />
      <StatsBar />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <TechStack />
      <CTABanner />
    </>
  );
};

export default Home;
