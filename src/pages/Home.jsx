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
        <title>AZync Solutions | Custom Software & Web Development Company</title>
        <meta name="description" content="AZync Solutions builds custom software, web, and mobile products for startups and businesses. Get a free consultation and turn your idea into reality." />
        <link rel="canonical" href="https://azyncsolutions.com/" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AZync Solutions",
                "alternateName": ["AZync", "azyncsolutions", "azyncsolutions.com"],
                "url": "https://azyncsolutions.com",
                "logo": "https://azyncsolutions.com/favicon.png",
                "description": "AZync Solutions builds custom software, web, and mobile products for startups and businesses.",
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
                "url": "https://azyncsolutions.com"
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
