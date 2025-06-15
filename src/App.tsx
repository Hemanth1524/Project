import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Main Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ApplicationsPage from './pages/ApplicationsPage';
import GalleryPage from './pages/GalleryPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';

// Company Subpages
import AboutUsPage from './pages/company/AboutUsPage';
import WhyUsPage from './pages/company/WhyUsPage';
import HowWeWorkPage from './pages/company/HowWeWorkPage';
import MissionVisionPage from './pages/company/MissionVisionPage';
import TestimonialsPage from './pages/company/TestimonialsPage';

// Technology Subpages
import SLSPage from './pages/technologies/SLSPage';
import SLAPage from './pages/technologies/SLAPage';
import FDMPage from './pages/technologies/FDMPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Company Subpages */}
            <Route path="/company/about-us" element={<AboutUsPage />} />
            <Route path="/company/why-us" element={<WhyUsPage />} />
            <Route path="/company/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/company/mission-vision" element={<MissionVisionPage />} />
            <Route path="/company/testimonials" element={<TestimonialsPage />} />
            
            {/* Technology Subpages */}
            <Route path="/technologies/sls" element={<SLSPage />} />
            <Route path="/technologies/sla" element={<SLAPage />} />
            <Route path="/technologies/fdm" element={<FDMPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;