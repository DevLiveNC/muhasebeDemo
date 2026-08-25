import React from 'react';
import PublicNavbar from './PublicNavbar';
import HeroSection from './HeroSection';
import TrustStatsBar from './TrustStatsBar';
import ServicesSection from './ServicesSection';
import WhyUsSection from './WhyUsSection';
import PortalShowcaseSection from './PortalShowcaseSection';
import TaxCalculatorSection from './TaxCalculatorSection';
import BlogSection from './BlogSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import PublicFooter from './PublicFooter';

export default function PublicPage() {
  return (
    <div className="bg-paper-100">
      <PublicNavbar />
      <main id="top">
        <HeroSection />
        <TrustStatsBar />
        <ServicesSection />
        <WhyUsSection />
        <PortalShowcaseSection />
        <TaxCalculatorSection />
        <BlogSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <PublicFooter />
    </div>
  );
}
