import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { TimelineScrubber } from '@/components/layout/TimelineScrubber';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScanlineOverlay } from '@/components/layout/ScanlineOverlay';
import { ExposureCursor } from '@/components/layout/ExposureCursor';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import { Home } from '@/pages/Home';
import { WorkIndex } from '@/pages/WorkIndex';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Contact } from '@/pages/Contact';
import { Privacy } from '@/pages/Privacy';
import { NotFound } from '@/pages/NotFound';
import { Admin } from '@/pages/Admin';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipToContent />
      <TimelineScrubber />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ScanlineOverlay />
      <ExposureCursor />
    </BrowserRouter>
  );
};

export default App;
