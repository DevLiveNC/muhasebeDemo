import React from 'react';
import PublicNavbar from './PublicNavbar';
import HeroSection from './HeroSection';
import TrustStatsBar from './TrustStatsBar';
import ServicesSection from './ServicesSection';
import WhyUsSection from './WhyUsSection';
import PortalShowcaseSection from './PortalShowcaseSection';
import TaxCalculatorSection from './TaxCalculatorSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import PublicFooter from './PublicFooter';

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <HeroSection />
        <TrustStatsBar />
        <ServicesSection />
        <WhyUsSection />
        <PortalShowcaseSection />
        <TaxCalculatorSection />
        <TestimonialsSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <PublicFooter />
    </div>
  );
}
