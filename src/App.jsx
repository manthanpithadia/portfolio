import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import FutureLab from './components/FutureLab';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyView from './components/CaseStudyView';

const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenProject = (project) => {
    setActiveProject(project);
  };

  const handleBack = () => {
    setActiveProject(null);
  };

  if (activeProject) {
    return <CaseStudyView project={activeProject} onBack={handleBack} />;
  }

  return (
    <div className="font-sans antialiased text-neutral-900 selection:bg-neutral-200 selection:text-black">
      <Navbar />
      <Hero />
      <WorkSection onOpenProject={handleOpenProject} />
      <AboutSection />
      <FutureLab />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
