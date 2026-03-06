import React from "react";
import imgmtd1 from '../assets/images/mtd1.png';
import imgmtd2 from '../assets/images/mtd2.png';
import imgmtd3 from '../assets/images/mtd3.bmp';
import imgmtd4 from '../assets/images/mtd4.bmp';


const MyTamilDate = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              MyTamilDate
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              A premium dating platform designed to help users build meaningful
              relationships through detailed matchmaking profiles, real-time
              communication, and a secure subscription-based ecosystem.
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">
                React.js
              </span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">
                Node.js
              </span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">
                Socket.io
              </span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">
                Stripe
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
            {/* 1. Project Overview */}
            <div>
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
            </div>

            {/* 2. Problem Statement & Target Users */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                  Problem Statement
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">
                        close
                      </span>{" "}
                      Fake profiles and spam accounts
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">
                        close
                      </span>{" "}
                      Low-quality matches due to shallow onboarding
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">
                        close
                      </span>{" "}
                      Poor moderation tools for administrators
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">
                        close
                      </span>{" "}
                      Limited trust between users
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">
                        check
                      </span>{" "}
                      Individuals seeking meaningful relationships
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">
                        check
                      </span>{" "}
                      Users who value verified profiles
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">
                        check
                      </span>{" "}
                      Platform administrators maintaining standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Solution */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                Solution
              </h2>
              <p className="text-slate-600 mb-6">
                To address these problems, MyTamilDate was designed as a
                premium, trust-first dating platform with a multi-step
                onboarding process, strong authentication, real-time
                communication, administrative moderation tools, and
                subscription-based premium features.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 text-center">
                  Core Workflow
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    User
                  </div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">
                    arrow_forward
                  </span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    Multi-Step Onboarding
                  </div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">
                    arrow_forward
                  </span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    Phone / Email Verification
                  </div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">
                    arrow_forward
                  </span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    Profile Approval
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Key Features */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                  Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    list_alt
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    Multi-Step Interactive Onboarding
                  </h3>
                  <p className="text-sm text-slate-600">
                    A guided process collecting personality traits, lifestyle
                    choices, career details, and relationship preferences.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    verified_user
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    Secure Authentication
                  </h3>
                  <p className="text-sm text-slate-600">
                    Implemented multiple verification layers including Twilio
                    OTP, email verification, and Google reCAPTCHA.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    chat
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    Real-Time Messaging
                  </h3>
                  <p className="text-sm text-slate-600">
                    Instant message delivery, typing indicators, and real-time
                    notifications using WebSocket (Socket.io).
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    credit_card
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    Subscription System
                  </h3>
                  <p className="text-sm text-slate-600">
                    Integrated Stripe API to manage premium memberships,
                    subscription tiers, and billing history.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    person
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    Advanced Profile Management
                  </h3>
                  <p className="text-sm text-slate-600">
                    Users can fully customize their profiles, upload, and crop
                    photos (react-image-crop, react-cropper).
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                    admin_panel_settings
                  </span>
                  <h3 className="font-bold text-lg mb-2">Admin Dashboard</h3>
                  <p className="text-sm text-slate-600">
                    A moderation panel to approve/reject profiles, monitor
                    reports, and track analytics via interactive data grids.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. System Architecture */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                System Architecture
              </h2>
              <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">
                    React Frontend Application
                  </div>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_downward
                  </span>
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">
                    REST API Layer / WebSockets
                  </div>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_downward
                  </span>
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">
                    Backend Services (Stripe, Twilio, Node.js)
                  </div>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_downward
                  </span>
                  <div className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-sm">
                    Database
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Technical Challenges */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">
                Technical Challenges
              </h2>
              <div className="space-y-6">
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">
                    Challenge 1 — Secure Authentication
                  </h3>
                  <p className="text-slate-600">
                    <strong>Problem:</strong> Requiring secure onboarding while
                    maintaining a smooth UX.
                    <br />
                    <strong>Solution:</strong> Twilio OTP, reCAPTCHA, strict
                    validation via react-phone-number-input, and E.164
                    formatting.
                  </p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">
                    Challenge 2 — Role-Based Access Control
                  </h3>
                  <p className="text-slate-600">
                    <strong>Problem:</strong> Both users and admins use the same
                    application.
                    <br />
                    <strong>Solution:</strong> Implemented Protected Routes with
                    strict Role-Based Access Control (RBAC) validations before
                    dashboard render.
                  </p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">
                    Challenge 3 — Large Frontend Codebase
                  </h3>
                  <p className="text-slate-600">
                    <strong>Problem:</strong> Supporting multiple brand
                    identities while sharing the same core codebase.
                    <br />
                    <strong>Solution:</strong> Modular routing and component
                    architecture allowing multiple brand configurations and
                    shared logic.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. UI Design & Key Screens */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
                  UI Design & Key Screens
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12" style={{marginBottom:"2rem"}}>
                {/* Screen 1 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">                   
                    <img src={imgmtd1} alt="Screen 1" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Login Screen</h4>
                  </div>
                </div>

                {/* Screen 2 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={imgmtd2} alt="Screen 2" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Signup Screen</h4>
                  </div>
                </div>
              </div>


              <div className="grid md:grid-cols-2 gap-12">
                {/* Screen 3 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">                   
                    <img src={imgmtd3} alt="Screen 1" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Phone verification</h4>
                  </div>
                </div>

                {/* Screen 4 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={imgmtd4} alt="Screen 2" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Onboarding page 1</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Performance / 10. Results */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Performance & Optimization
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li>
                    <strong>State Management:</strong> Redux Toolkit for
                    centralized state, reducing unnecessary re-renders.
                  </li>
                  <li>
                    <strong>Form Handling:</strong> Formik + Yup for efficient
                    validation and cleaner logic.
                  </li>
                  <li>
                    <strong>Lazy Loading:</strong> Used for large modules
                    (dashboards/analytics) to improve initial load.
                  </li>
                  <li>
                    <strong>API Optimization:</strong> Axios interceptors and
                    better error management flow.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Results & Impact
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-success-green">
                      trending_up
                    </span>{" "}
                    Reduced onboarding drop-off
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-success-green">
                      shield
                    </span>{" "}
                    Improved platform security
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-success-green">
                      forum
                    </span>{" "}
                    Enabled real-time communication
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-success-green">
                      monitoring
                    </span>{" "}
                    Built scalable admin tools
                  </li>
                </ul>
              </div>
            </div>

            {/* 11. Lessons & 12. Future */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Lessons Learned
                </h2>
                <ul className="space-y-4 text-slate-600 list-disc list-inside">
                  <li>
                    Secure user verification flows must balance security and UX.
                  </li>
                  <li>
                    Modular components are essential for large React state
                    architectures.
                  </li>
                  <li>WebSockets require careful connection state handling.</li>
                  <li>Reusable UI heavily improves maintainability.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">
                  Future Improvements
                </h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      psychology
                    </span>{" "}
                    AI-based match recommendations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      gpp_good
                    </span>{" "}
                    Enhanced user safety features
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      smartphone
                    </span>{" "}
                    Native mobile app development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      notifications_active
                    </span>{" "}
                    Improved real-time notifications
                  </li>
                </ul>
            </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyTamilDate;


