import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceDescription from '../components/ServiceDescription';
import ProcessSteps from '../components/ProcessSteps';
import RelatedServices from '../components/RelatedServices';
import ContactCard from '../components/ContactCard';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceDescription />
      <ProcessSteps />
      <RelatedServices />
      <ContactCard />
    </>
  );
};

export default HomePage;