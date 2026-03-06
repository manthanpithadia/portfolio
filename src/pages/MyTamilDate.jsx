import React from "react";
import { motion } from "framer-motion";
import imgmtd1 from '../assets/images/mtd1.png';
import imgmtd2 from '../assets/images/mtd2.png';
import imgmtd3 from '../assets/images/mtd3.bmp';
import imgmtd4 from '../assets/images/mtd4.bmp';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const MyTamilDate = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="absolute inset-0 -z-10 bg-slate-50"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              MyTamilDate
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              A premium dating platform designed to help users build meaningful
              relationships through detailed matchmaking profiles, real-time
              communication, and a secure subscription-based ecosystem.
            </motion.p>
            {/* Tech Badges */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3 mb-12">
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">
                React.js
              </motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">
                Node.js
              </motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">
                Socket.io
              </motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">
                Stripe
              </motion.span>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
            {/* 1. Project Overview */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                Project Overview
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  <strong>Purpose of the Product:</strong> MyTamilDate aims to
                  provide a high-quality matchmaking platform focused on serious
                  relationships rather than casual swiping. The platform
                  emphasizes detailed personality-based onboarding, strong user
                  verification and moderation, real-time communication, and
                  premium membership features.
                </p>
                <p>
                  The product includes both user-facing experiences and a
                  powerful administrative dashboard for moderation and
                  analytics.
                </p>
              </div>
            </motion.div>

            {/* 2. Problem Statement & Target Users */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                  Problem Statement
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">
                        close
                      </span>{" "}
                      <span>Fake profiles and spam accounts</span>
                    </li>
                    <li className="flex gap-3 group">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">
                        close
                      </span>{" "}
                      <span>Low-quality matches due to shallow onboarding</span>
                    </li>
                    <li className="flex gap-3 group">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">
                        close
                      </span>{" "}
                      <span>Poor moderation tools for administrators</span>
                    </li>
                    <li className="flex gap-3 group">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">
                        close
                      </span>{" "}
                      <span>Limited trust between users</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-success-green/20 shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(39,165,81,0.2)] hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group">
                      <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">
                        check
                      </span>{" "}
                      <span>Individuals seeking meaningful relationships</span>
                    </li>
                    <li className="flex gap-3 group">
                      <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">
                        check
                      </span>{" "}
                      <span>Users who value verified profiles</span>
                    </li>
                    <li className="flex gap-3 group">
                      <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">
                        check
                      </span>{" "}
                      <span>Platform administrators maintaining standards</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* 3. Solution */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                Solution
              </h2>
              <p className="text-slate-600 mb-6 relative">
                To address these problems, MyTamilDate was designed as a
                premium, trust-first dating platform with a multi-step
                onboarding process, strong authentication, real-time
                communication, administrative moderation tools, and
                subscription-based premium features.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <h3 className="font-bold text-lg mb-6 text-center">
                  Core Workflow
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">
                    User
                  </motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">
                    arrow_forward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">
                    Multi-Step Onboarding
                  </motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">
                    arrow_forward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">
                    Phone / Email Verification
                  </motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">
                    arrow_forward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-primary text-white rounded-lg shadow-md transition-shadow hover:shadow-lg">
                    Profile Approval
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* 4. Key Features */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                  Key Features
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "list_alt", title: "Multi-Step Interactive Onboarding", desc: "A guided process collecting personality traits, lifestyle choices, career details, and relationship preferences." },
                  { icon: "verified_user", title: "Secure Authentication", desc: "Implemented multiple verification layers including Twilio OTP, email verification, and Google reCAPTCHA." },
                  { icon: "chat", title: "Real-Time Messaging", desc: "Instant message delivery, typing indicators, and real-time notifications using WebSocket (Socket.io)." },
                  { icon: "credit_card", title: "Subscription System", desc: "Integrated Stripe API to manage premium memberships, subscription tiers, and billing history." },
                  { icon: "person", title: "Advanced Profile Management", desc: "Users can fully customize their profiles, upload, and crop photos (react-image-crop, react-cropper)." },
                  { icon: "admin_panel_settings", title: "Admin Dashboard", desc: "A moderation panel to approve/reject profiles, monitor reports, and track analytics via interactive data grids." }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="group border border-slate-200 bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20">
                    <span className="material-symbols-outlined text-primary mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 6. System Architecture */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                System Architecture
              </h2>
              <div className="p-10 border border-slate-200 rounded-2xl bg-slate-50 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex flex-col items-center justify-center gap-4 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">
                    React Frontend Application
                  </motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="material-symbols-outlined text-primary/50">
                    arrow_downward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">
                    REST API Layer / WebSockets
                  </motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="material-symbols-outlined text-primary/50">
                    arrow_downward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">
                    Backend Services (Stripe, Twilio, Node.js)
                  </motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="material-symbols-outlined text-primary/50">
                    arrow_downward
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-md transition-all">
                    Database
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* 7. Technical Challenges */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                Technical Challenges
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Challenge 1 — Secure Authentication", problem: "Requiring secure onboarding while maintaining a smooth UX.", sol: "Twilio OTP, reCAPTCHA, strict validation via react-phone-number-input, and E.164 formatting." },
                  { title: "Challenge 2 — Role-Based Access Control", problem: "Both users and admins use the same application.", sol: "Implemented Protected Routes with strict Role-Based Access Control (RBAC) validations before dashboard render." },
                  { title: "Challenge 3 — Large Frontend Codebase", problem: "Supporting multiple brand identities while sharing the same core codebase.", sol: "Modular routing and component architecture allowing multiple brand configurations and shared logic." }
                ].map((chal, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white border text-left border-slate-200 p-6 rounded-xl transition-all hover:shadow-md hover:border-primary/20 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 transition-colors group-hover:bg-primary"></div>
                    <h3 className="font-bold text-lg mb-3 text-slate-800 transition-colors group-hover:text-primary">
                      {chal.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <strong className="text-slate-700">Problem:</strong> {chal.problem}
                      <br />
                      <strong className="text-slate-700 mt-2 inline-block">Solution:</strong> {chal.sol}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 8. UI Design & Key Screens */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <div className="flex items-center justify-between mb-8">
                <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading">
                  UI Design & Key Screens
                </motion.h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">                   
                    <img src={imgmtd1} alt="Login Screen" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Login Screen</h4>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={imgmtd2} alt="Signup Screen" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Signup Screen</h4>
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">                   
                    <img src={imgmtd3} alt="Phone verification" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Phone verification</h4>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={imgmtd4} alt="Onboarding page 1" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Onboarding page 1</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 9. Performance / 10. Results */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Performance & Optimization
                </h2>
                <ul className="space-y-6 text-slate-600">
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">speed</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">State Management:</strong>
                      <span className="text-sm">Redux Toolkit for centralized state, reducing unnecessary re-renders.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">dynamic_form</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Form Handling:</strong>
                      <span className="text-sm">Formik + Yup for efficient validation and cleaner logic.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">hourglass_empty</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Lazy Loading:</strong>
                      <span className="text-sm">Used for large modules (dashboards/analytics) to improve initial load.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">api</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">API Optimization:</strong>
                      <span className="text-sm">Axios interceptors and better error management flow.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">
                  Results & Impact
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined">trending_up</span>
                    </span>{" "}
                    <span className="font-medium text-slate-200">Reduced onboarding drop-off</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined">shield</span>
                    </span>{" "}
                    <span className="font-medium text-slate-200">Improved platform security</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined">forum</span>
                    </span>{" "}
                    <span className="font-medium text-slate-200">Enabled real-time communication</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined">monitoring</span>
                    </span>{" "}
                    <span className="font-medium text-slate-200">Built scalable admin tools</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* 11. Lessons & 12. Future */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Lessons Learned
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Secure user verification flows must balance security and UX.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Modular components are essential for large React state architectures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>WebSockets require careful connection state handling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Reusable UI heavily improves maintainability.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Future Improvements
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">psychology</span>
                    <span className="font-medium">AI-based match recommendations</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">gpp_good</span>
                    <span className="font-medium">Enhanced user safety features</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">smartphone</span>
                    <span className="font-medium">Native mobile app development</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">notifications_active</span>
                    <span className="font-medium">Improved real-time notifications</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyTamilDate;
