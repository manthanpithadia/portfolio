import React from 'react';
import imgmtd1 from '../assets/images/kanhalo1.png';
import imgmtd2 from '../assets/images/kanhalo2.png';
import imgmtd3 from '../assets/images/kanhalo3.png';
import imgmtd4 from '../assets/images/kanhalo4.png';


const Kanhala = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              Kanhalo
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              An online learning platform designed to teach French language courses (A1–B2 levels) through structured lessons, digital resources, and integrated online booking and payment systems.
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">WordPress CMS</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">Tutor LMS</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">WooCommerce</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">MySQL</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">

            {/* 1. Project Overview */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Project Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p><strong>Purpose of the Product:</strong> The platform was built to provide structured French language courses online, allow students to easily enroll in courses, manage classes, resources, and payments in one centralized system, and enable instructors to deliver digital learning efficiently.</p>
                <p>Kanhalo focuses on language education accessibility, allowing students to learn French remotely while managing lessons, schedules, and course materials through a single platform.</p>
              </div>
            </div>

            {/* 2. Problem Statement & Target Users */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Problem Statement</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <p className="mb-4 text-sm text-slate-600">Many independent language instructors struggle to manage their online courses because they rely on fragmented tools such as WhatsApp, Google Forms, and manual payments.</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Inefficient course management</li>
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Poor student experience</li>
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Difficulty scaling teaching operations</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> French language learners (A1–B2 levels)</li>
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> Students preparing for exams such as TEF or DELF</li>
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> Language instructors offering online courses</li>
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 italic">A unified platform was needed to simplify course delivery, enrollment, and payments.</p>
                </div>
              </div>
            </div>

            {/* 3. Solution */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Solution</h2>
              <p className="text-slate-600 mb-6">
                Kanhalo was developed as a centralized online learning platform that integrates course management, student enrollment, payment processing, learning resources, and instructor scheduling. Students can browse courses, enroll, pay online, and access learning materials in one place.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 text-center">Core Workflow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Student</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Browse Courses</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Enroll &amp; Pay</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Access Dashboard</div>
                </div>
              </div>
            </div>

            {/* 4. Key Features */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">menu_book</span>
                  <h3 className="font-bold text-lg mb-2">Structured Course Catalog</h3>
                  <p className="text-sm text-slate-600">Students can browse structured courses including A1, A2, and B1/B2 levels, complete with syllabus details.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">how_to_reg</span>
                  <h3 className="font-bold text-lg mb-2">Online Enrollment System</h3>
                  <p className="text-sm text-slate-600">Streamlined enrollment process featuring course selection, registration, and automated confirmations.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">payments</span>
                  <h3 className="font-bold text-lg mb-2">Integrated Payment System</h3>
                  <p className="text-sm text-slate-600">Securely processes multiple payment gateways including UPI, Credit/Debit cards, and PayPal.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">folder_open</span>
                  <h3 className="font-bold text-lg mb-2">Learning Resource Access</h3>
                  <p className="text-sm text-slate-600">Digital materials access including downloadable worksheets, recordings, exercises, and notes.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">edit_calendar</span>
                  <h3 className="font-bold text-lg mb-2">Instructor Scheduling</h3>
                  <p className="text-sm text-slate-600">Calendar integration for class time management, session scheduling, and automated reminders.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">reviews</span>
                  <h3 className="font-bold text-lg mb-2">Student Reviews</h3>
                  <p className="text-sm text-slate-600">Feedback system that helps maintain course quality and credibility of the platform.</p>
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
                    <h4 className="font-bold text-slate-800">Home Screen</h4>
                  </div>
                </div>

                {/* Screen 2 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={imgmtd2} alt="Screen 2" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Blog Post</h4>
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
                    <h4 className="font-bold text-slate-800">Courses Page</h4>
                  </div>
                </div>

                {/* Screen 4 */}
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={imgmtd4} alt="Screen 2" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Booking Page</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* 6. System Architecture */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">System Architecture</h2>
              <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">Frontend Website (Student Browser)</div>
                  <span className="material-symbols-outlined text-slate-400">arrow_downward</span>
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">WordPress CMS / Tutor LMS Plugin</div>
                  <span className="material-symbols-outlined text-slate-400">arrow_downward</span>
                  <div className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-sm">Course Database (MySQL)</div>
                </div>
                <p className="mt-8 text-sm text-slate-600 max-w-2xl mx-auto">The CMS-based architecture was selected because it allows rapid course publishing, simplifies content updates, provides built-in LMS features, and reduces custom backend development complexity.</p>
              </div>
            </div>

            {/* 7. Technical Challenges */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Technical Challenges</h2>
              <div className="space-y-6">
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 1 — Course Access Control</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> Ensuring that only enrolled students could access course materials.<br/>
                  <strong>Solution:</strong> Implemented LMS-based permission systems where content becomes accessible only after successful enrollment and payment.</p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 2 — Payment Gateway Integration</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> Supporting domestic and international students required multiple payment methods.<br/>
                  <strong>Solution:</strong> Integrated payment gateways supporting UPI, credit cards, and PayPal for global accessibility.</p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 3 — Managing Course Content</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> Organizing lessons, materials, and resources effectively.<br/>
                  <strong>Solution:</strong> Used a structured LMS approach with lesson modules, downloadable resources, and categorized content.</p>
                </div>
              </div>
            </div>

            {/* 8. Performance / 9. Results */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Performance & Optimization</h2>
                <ul className="space-y-4 text-slate-600">
                  <li><strong>Content Delivery:</strong> Static assets optimized to reduce load times.</li>
                  <li><strong>Efficient Plugins:</strong> Only essential plugins used to minimize overhead.</li>
                  <li><strong>Lazy Loading:</strong> Media assets loaded only when needed.</li>
                  <li><strong>Caching Strategy:</strong> Reduced server load and expedited page responses.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Results & Impact</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">trending_up</span> Simplified enrollment for students</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">inventory_2</span> Centralized management of course content</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">payments</span> Streamlined payment collection</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">auto_graph</span> Scalable structure for adding more courses</li>
                </ul>
              </div>
            </div>


            {/* 10. Lessons & 11. Future */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Lessons Learned</h2>
                <ul className="space-y-4 text-slate-600 list-disc list-inside">
                  <li>LMS significantly reduces custom development needs.</li>
                  <li>Multiple payment options are essential for international reach.</li>
                  <li>Structured modules heavily improve user navigation and experience.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Future Improvements</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">smartphone</span> Mobile learning application</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">smart_toy</span> AI-powered learning assistance</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">analytics</span> Automated quizzes and student analytics</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">forum</span> Community discussion forums</li>
                </ul>
              </div>
            </div>

            {/* 12. Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6 text-center">Technology Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">WordPress CMS</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">Tutor LMS</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">MySQL</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">Hostinger Hosting</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">WooCommerce</span>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Kanhala;
