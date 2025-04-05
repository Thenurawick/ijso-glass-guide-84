
import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ResourcesSection from '@/components/ResourcesSection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-ijso-dark-navy text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
