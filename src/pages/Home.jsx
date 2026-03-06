import React from 'react';
import { Link } from 'react-router-dom';
import imgMtd from '../assets/images/img_mtd.png';
import imgVision from '../assets/images/img_vision.png';
import imgGrowmore from '../assets/images/img_growmore.png';
import imgTransact from '../assets/images/img_transact.png';
import imgKanhalo from '../assets/images/img_kanhalo.png';

const Home = () => {
  return (
    <>
{/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="grid-pattern absolute inset-0 -z-10"></div>
        <div className="mx-auto max-w-5xl px-6 text-center">
         <h1 className="text-heading-text mb-8 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            I build scalable MVPs that <br className="hidden md:block" /> <span className="text-primary">don’t bleed your runway.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sub-text md:text-xl">
            Senior Product Developer &amp; MVP Architect with 9+ years of experience. Applying a <span className="font-bold text-heading-text">fiduciary mindset</span> to your technical architecture.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl">
              Connect with me
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </a>
            <button 
              onClick={() => document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-8 py-4 text-base font-bold text-heading-text transition-all hover:bg-gray-50"
            >
              View Methodology
            </button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>9+ Years Build Time</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>UI/UX Specialist</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>Industry Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Reports */}
      <section className="py-24 bg-white" id="reports">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Case Studies</span>
              <h2 className="text-heading-text mt-2 text-3xl font-black tracking-tight md:text-4xl">Mission Reports</h2>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-sm text-sub-text">Technical documentation of</p>
              <p className="technical-label text-sm font-bold text-heading-text">HIGH-VELOCITY SHIPMENTS</p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project 1 */}
            <Link to="/mytamildate" className="block outline-none group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  data-alt="Web application interface showing a social community platform dashboard" 
                  src={imgMtd} />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 01: Community Platform</p>
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">mytamildate</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  A premium dating platform designed to help users build meaningful relationships through detailed matchmaking profiles, real-time communication, and a secure subscription-based ecosystem.
                                  </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Material UI (MUI)</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Emotion</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Bootstrap</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">GSAP (animations)</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Formik & Yup (forms and validation)</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Axios</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">Recharts</span>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">View Full Technical Report</div>
              </div>
            </Link>
            {/* Project 2 */}
            <Link to="/kanhalo" className="block outline-none group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Sophisticated data visualization and analytics dashboard" src={imgKanhalo} />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 02: Educational Platform</p>
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">Kanhalo</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  An online learning platform designed to teach French language courses through structured lessons, digital resources, and integrated online booking and payment systems.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">WORDPRESS</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">TUTOR LMS</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">WOOCOMMERCE</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">MYSQL</span>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">View Full Technical Report</div>
              </div>
            </Link>
            {/* Project 3 */}
            <Link to="/vision" className="block outline-none group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Screenshot of an AI vision reading assistive application" src={imgVision} />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 03: Assistive AI App</p>
                  <span className="material-symbols-outlined text-primary">visibility</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">VISION</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  An Android mobile application designed to assist visually impaired individuals by providing real-time text reading, object detection, and voice interactions.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">ANDROID</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">TENSORFLOW</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">YOLO V3</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">OPENCV</span>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">View Full Technical Report</div>
              </div>
            </Link>
            {/* Project 4 */}
            <Link to="/growmore" className="block outline-none group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Screenshot of a startup and investor mobile dashboard" src={imgGrowmore} />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 04: Finance & Investment</p>
                  <span className="material-symbols-outlined text-primary">pie_chart</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">Grow More</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  An Android application connecting startups and small businesses with potential investors to simplify the fundraising process for early-stage funding rounds.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">ANDROID (JAVA)</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">NODE.JS</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">MONGODB</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">FIGMA</span>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">View Full Technical Report</div>
              </div>
            </Link>
            {/* Project 5 */}
            <Link to="/transact" className="block outline-none group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Screenshot of Transact mobile banking application" src= {imgTransact} />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 05: Mobile Banking</p>
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">Transact</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  A mobile banking application designed to provide a secure, intuitive, and visually engaging experience for users managing their personal finances.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">FIGMA</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">UI/UX</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">MVVM</span>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">View Full Technical Report</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The Fiduciary Framework */}
      <section className="py-24 bg-background-light" id="framework">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Operational Ethos</span>
          <h2 className="text-heading-text mt-4 mb-16 text-3xl font-black tracking-tight md:text-5xl">The Fiduciary Framework</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-left transition-all hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">key</span>
              </div>
              <h3 className="text-heading-text mb-4 text-xl font-bold">Absolute Ownership</h3>
              <p className="leading-relaxed text-sub-text">
                You own 100% of the code, the accounts, and the data. No proprietary "black box" dependencies or developer-lock-ins.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-left transition-all hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-heading-text mb-4 text-xl font-bold">Hardened Security</h3>
              <p className="leading-relaxed text-sub-text">
                Enterprise-grade protocols from Day 1. Every MVP is architected with a security-first posture to protect your intellectual property and user data.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-left transition-all hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <h3 className="text-heading-text mb-4 text-xl font-bold">Radical Transparency</h3>
              <p className="leading-relaxed text-sub-text">
                Real-time velocity tracking and clear spend reports. You see exactly where every hour and every dollar of your runway is being invested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="py-24 bg-white" id="protocol">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Ship Fast. Ship Right.</span>
            <h2 className="text-heading-text mt-4 text-3xl font-black tracking-tight md:text-5xl">The Protocol</h2>
            <p className="mt-4 text-sub-text">A 6-week velocity process to move from concept to deployment.</p>
          </div>
          <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:h-full before:w-0.5 before:bg-gray-100 md:before:left-1/2">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="technical-label text-sm font-bold">01</span>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 bg-background-light p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold">Discovery &amp; Audit</h4>
                <p className="text-sm leading-relaxed text-sub-text">Deep dive into your business logic, user personas, and core technical requirements to define the MVP scope.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="technical-label text-sm font-bold">02</span>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 bg-background-light p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold">Architectural Blueprint</h4>
                <p className="text-sm leading-relaxed text-sub-text">Defining the stack, database schema, and infrastructure setup to ensure scalability from the first line of code.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="technical-label text-sm font-bold">03</span>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 bg-background-light p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold">Sprint 0: Infrastructure</h4>
                <p className="text-sm leading-relaxed text-sub-text">Setting up CI/CD, staging environments, and boilerplate foundation for rapid feature iteration.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row-reverse md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="technical-label text-sm font-bold">04</span>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 bg-background-light p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold">Velocity Build</h4>
                <p className="text-sm leading-relaxed text-sub-text">The meat of the project. Shipping core features in 1-week cycles with frequent stakeholder updates.</p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="technical-label text-sm font-bold">05</span>
              </div>
              <div className="mt-4 rounded-xl border border-gray-100 bg-background-light p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold">Security Hardening</h4>
                <p className="text-sm leading-relaxed text-sub-text">Penetration testing, optimization, and refining the user experience for production-ready polish.</p>
              </div>
            </div>
            {/* Step 6 */}
            <div className="relative flex flex-col md:flex-row-reverse md:items-center">
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-success-green text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
              </div>
              <div className="mt-4 rounded-xl border-2 border-success-green/20 bg-success-green/5 p-6 shadow-sm md:mt-0 md:w-[45%]">
                <h4 className="text-heading-text mb-2 font-bold text-success-green">Mission Deployment</h4>
                <p className="text-sm leading-relaxed text-sub-text">Final handoff, training, and production launch. Your MVP is live and ready for real users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Filter */}
      <section className="py-24 bg-background-light" id="filter">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Pre-Qualification Matrix</span>
            <h2 className="text-heading-text mt-4 text-3xl font-black tracking-tight md:text-5xl">The Filter</h2>
            <p className="mt-4 text-sub-text">I only partner with founders where I can provide a 10x ROI on architecture.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Ideal Match */}
            <div className="rounded-xl border-2 border-success-green/30 bg-white p-10 shadow-lg">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-green text-white">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-heading-text">Ideal Partnership</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-success-green">add</span>
                  <span className="text-main-text font-medium">Founders with a validated market and a clear roadmap for the next 12 months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-success-green">add</span>
                  <span className="text-main-text font-medium">Startups looking for a long-term technical partner, not just a "feature factory."</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-success-green">add</span>
                  <span className="text-main-text font-medium">Ventures that value scalability, security, and technical excellence from Day 1.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-success-green">add</span>
                  <span className="text-main-text font-medium">Teams with seed funding or a self-sustaining revenue model.</span>
                </li>
              </ul>
            </div>
            {/* Non-Match */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-10 grayscale opacity-80">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-icon-gray">
                  <span className="material-symbols-outlined">cancel</span>
                </div>
                <h3 className="text-2xl font-bold text-heading-text">Non-Match</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-icon-gray">remove</span>
                  <span className="text-sub-text font-medium">Pre-validation "ideas" that haven't talked to a single potential customer yet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-icon-gray">remove</span>
                  <span className="text-sub-text font-medium">Founders looking for the "cheapest possible" offshore dev shop build.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-icon-gray">remove</span>
                  <span className="text-sub-text font-medium">Projects where technical debt is viewed as a "future problem" rather than a cost.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-icon-gray">remove</span>
                  <span className="text-sub-text font-medium">Short-term mercenary work without a vision for a scalable product.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a href="https://wa.me/+918780572995" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-primary px-12 py-5 text-lg font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95">
              Ready to Build? Connect with me
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
