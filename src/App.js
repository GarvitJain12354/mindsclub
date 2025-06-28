import React from 'react';
import './index.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutWorkshop from './components/AboutWorkshop';
import WhyGoa from './components/WhyGoa';
import WorkshopOverview from './components/WorkshopOverview';
import CTA from './components/CTA';
import CreatorSection from './components/CreatorSection';
import MentorSection from './components/MentorSection';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <AboutWorkshop />

      {/* Workshop Categories Section */}
      <WhyGoa />

      {/* Workshop Overview Section */}
      <WorkshopOverview />

      {/* Testimonials Section */}
      <CTA />

      {/* Creators Section */}
      <CreatorSection />

      {/* Mentor Section */}
      <MentorSection />
    </Layout>
  );
}

export default App;
