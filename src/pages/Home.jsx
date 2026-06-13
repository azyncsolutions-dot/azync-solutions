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
        <title>Home | AZync Solutions</title>
        <meta name="description" content="AZync Solutions — where passionate CS minds meet real-world problems. We build modern web and mobile applications." />
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
