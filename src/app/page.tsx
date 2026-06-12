'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SalaryBand from '@/components/SalaryBand';
import TrustBadges from '@/components/TrustBadges';
import HowItWorks from '@/components/HowItWorks';
import WelfareOfficer from '@/components/WelfareOfficer';
import Certification from '@/components/Certification';
import VideoTestimonials from '@/components/VideoTestimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import StickyBar from '@/components/StickyBar';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SalaryBand />
        <TrustBadges />
        <HowItWorks />
        <WelfareOfficer />
        <Certification />
        <VideoTestimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
