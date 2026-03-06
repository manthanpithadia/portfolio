import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import profile_pic from '../src/assets/images/profile_pic.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
import Home from './pages/Home';
import MyTamilDate from './pages/MyTamilDate';
import Kanhalo from './pages/Kanhalo';
import Vision from './pages/Vision';
import GrowMore from './pages/GrowMore';
import Transact from './pages/Transact';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-background-light text-main-text font-display">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-3">            
               <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-gray-100">
                <img className="h-full w-full object-cover scale-[1.1] origin-top" data-alt="Professional headshot of Manthan Pithadia" src={profile_pic} />
              </div>
              <div>
                <h2 className="text-heading-text text-lg font-bold leading-none tracking-tight">Manthan Pithadia</h2>
                <p className="technical-label text-[10px] font-medium uppercase tracking-widest text-primary">MVP Architect</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="/#reports">Mission Reports</a>
              <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="/#framework">The Framework</a>
              <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="/#protocol">The Protocol</a>
              <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="/#filter">The Filter</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/+918780572995" target="_blank" rel="noopener noreferrer" className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 md:block">
                Connect with me
              </a>        
            </div>
          </div>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mytamildate" element={<MyTamilDate />} />
          <Route path="/kanhalo" element={<Kanhalo />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/growmore" element={<GrowMore />} />
          <Route path="/transact" element={<Transact />} />
        </Routes>
        
        {/* Universal Footer */}
        <footer className="border-t border-gray-200 bg-white py-12 text-main-text font-display">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-heading-text text-lg font-bold leading-none tracking-tight">Manthan Pithadia</h2>
                  <p className="technical-label text-[10px] font-medium uppercase tracking-widest text-primary">Senior MVP Architect</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-end">
                <div className="flex items-center gap-2 rounded-full border border-success-green/20 bg-success-green/5 px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-green opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success-green"></span>
                  </span>
                  <span className="technical-label text-[11px] font-bold uppercase tracking-widest text-success-green">Status: Open for projects</span>
                </div>
                <p className="text-xs text-sub-text">Estimated project slot availability: June 2026</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-sm text-sub-text md:flex-row">
              <div className="flex gap-8">
                <a className="hover:text-primary" href="https://www.linkedin.com/in/manthanpithadia">LinkedIn</a>
                <a className="hover:text-primary" href="https://github.com/manthanpithadia">Github</a>
              </div>
              <p className="mt-4 md:mt-0">© 2026 Manthan Pithadia. All rights reserved. Built with precision.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
