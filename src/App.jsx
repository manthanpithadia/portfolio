import React from 'react';

const App = () => {
  return (
    <div className="bg-background-light text-main-text font-display">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <div>
              <h2 className="text-heading-text text-lg font-bold leading-none tracking-tight">Manthan Pithadia</h2>
              <p className="technical-label text-[10px] font-medium uppercase tracking-widest text-primary">MVP Architect</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="#reports">Mission Reports</a>
            <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="#framework">The Framework</a>
            <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="#protocol">The Protocol</a>
            <a className="text-sm font-semibold text-sub-text hover:text-primary transition-colors" href="#filter">The Filter</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 md:block">
              Apply for Strategy Call
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-gray-100">
              <img className="h-full w-full object-cover" data-alt="Professional headshot of Manthan Pithadia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdUW63kDA56Ymcfvx2UM2NlACg4Kny6VKfhhgjMZe2iqbMUxS_mhOYN4ZPCbtvqJAUSrADh3VMleV9InEqk8k4qKNxjXL7YXNtMcE5e123yVWtIgGH3P2m7v3h1CcJjgQWS6X4XNyrmKvDaSM3dJVx6ZEcDalb4khDg5ZTusvDtPz46v4lAIq2-wCg8Us_u83WjyGQjRMr6ATOIS_-l9L-PrCXiahqJyqPD9H2VHqvyVc0vgXL39QfYJIgoMfPOOJS8jtntzyBDCha" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="grid-pattern absolute inset-0 -z-10"></div>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="technical-label text-[11px] font-bold uppercase tracking-[0.2em] text-primary">System Architecture Active</span>
          </div>
          <h1 className="text-heading-text mb-8 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            I build scalable MVPs that <br className="hidden md:block" /> <span className="text-primary">don’t bleed your runway.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sub-text md:text-xl">
            Senior Product Developer &amp; MVP Architect with 9+ years of experience. Applying a <span className="font-bold text-heading-text">fiduciary mindset</span> to your technical architecture.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl">
              Apply for Strategy Call
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <button className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-8 py-4 text-base font-bold text-heading-text transition-all hover:bg-gray-50">
              View Methodology
            </button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>9+ Years Build Time</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>40+ MVPs Shipped</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest">
              <span>$50M+ Raised by Clients</span>
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
            <div className="group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Web application interface showing a social community platform dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBy0sv1HZlkWpeYSMHSttGF8hskuUf6duNy5FPYm8xZsdqHDdjYRLC6qqf1pqm8DwYgek4y_DxzLXF6lOqwYGyL6x0jQNEhD-2gvlI-V3c7h5qA4yV_0zMrASs6v00W59YOwKwVikksV9zZyQi7LBjA33dQpOeIjNHqHJzCofWs0tNCD1YUwYVMQQWN7cxmJy8KplJgjp1-t6i0SpYxnWwvVl0wPYBMb1gtMdiDzcv2pA3EEWsUVDN0kJKpkfZrL2paySPnj_jSNOi" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 01: Community Platform</p>
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">mytamildate</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  Scaling community-driven platforms with robust architecture. Focused on high-availability and seamless user growth through a cloud-native infrastructure.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">NEXT.JS</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">SUPABASE</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">POSTGRES</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">REDIS</span>
                </div>
                <button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">
                  View Full Technical Report
                </button>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Sophisticated data visualization and analytics dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZf-qvxk53UPUZzlk3tK0lpnCSrePMKrKajtYnXDEquJ8AViuxH_HHZmVD_prphEw5VAkPNebPbtKpF3yNjs7UmW2Y2De-01Jn3qcVvLeMbqDFdXnMXV80jWkjEwJpSv06SPFNd734HhgcjijI0z3dDXEPKXrdNGhOTQEt2LO8zVjszV2QXZh-6C2IkpbDOy7DuSt-90mUo9pVvvdG83nix7diBQXPWQef_AAUuiv2X8QHLJAfQ5XcR_QKl32DWeZBBk10l5lAKe_N" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text">Report 02: Fintech MVP</p>
                  <span className="material-symbols-outlined text-primary">data_thresholding</span>
                </div>
                <h3 className="text-heading-text mb-3 text-2xl font-bold">Kanhala</h3>
                <p className="mb-6 leading-relaxed text-sub-text">
                  Architecting a high-performance financial data engine. Engineered for low-latency processing and secure transactional integrity across distributed nodes.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">REACT</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">NODE.JS</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">AWS LAMBDA</span>
                  <span className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100">DYNAMODB</span>
                </div>
                <button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">
                  View Full Technical Report
                </button>
              </div>
            </div>
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
            <button className="rounded-lg bg-primary px-12 py-5 text-lg font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95">
              Ready to Build? Apply for Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-heading-text text-white">
                <span className="material-symbols-outlined">architecture</span>
              </div>
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
                <span className="technical-label text-[11px] font-bold uppercase tracking-widest text-success-green">System Status: Accepting Q3 Founders</span>
              </div>
              <p className="text-xs text-sub-text">Estimated project slot availability: Sept 2024</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-sm text-sub-text md:flex-row">
            <div className="flex gap-8">
              <a className="hover:text-primary" href="#">LinkedIn</a>
              <a className="hover:text-primary" href="#">Twitter / X</a>
              <a className="hover:text-primary" href="#">Github</a>
            </div>
            <p className="mt-4 md:mt-0">© 2024 Manthan Pithadia. All rights reserved. Built with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
