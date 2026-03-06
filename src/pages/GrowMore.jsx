import React from "react";
import { motion } from "framer-motion";
import background from '../assets/images/bg1.png';
import growmore1 from '../assets/images/growmore1.bmp';

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
    transition: { staggerChildren: 0.15 }
  }
};

const GrowMore = () => {
  return (
    <div className="bg-background-light text-slate-900 antialiased relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {" "}
      <div className="layout-container flex h-full grow flex-col">
        {" "}
        <main className="flex flex-1 justify-center py-10 px-6 lg:px-40">
          {" "}
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
            {" "}
            {/* Hero Section */}{" "}
            <section className="mb-16" id="overview">
              {" "}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="relative md:overflow-hidden md:rounded-xl md:min-h-[400px] flex flex-col justify-end md:p-12 mb-10 group">
                {/* Desktop Background */}
                <div 
                  className="hidden md:block absolute inset-0 z-0 bg-slate-900 transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Modern couple interacting on digital devices in a vibrant urban setting"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(17, 26, 33, 0.9) 0%, rgba(17, 26, 33, 0.2) 100%), url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {" "}
                <div className="max-w-2xl relative z-10">
                  {" "}
                  <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider inline-block mb-2 md:mb-0">
                    Mobile App Case Study
                  </span>{" "}
                  <h1 className="text-slate-900 md:text-white text-4xl md:text-5xl font-black leading-tight mt-4 mb-4 md:mb-6">
                    Grow More – Investment & Startup Platform
                  </h1>{" "}
                  <p className="text-slate-600 md:text-slate-200 text-lg md:text-xl font-medium">
                    Connecting startups and small businesses with potential
                    investors to simplify fundraising.
                  </p>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* Project Metadata */}{" "}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white border border-slate-200 rounded-xl transition-shadow hover:shadow-lg">
                {" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Type</span>{" "}
                  <span className="text-slate-900 font-semibold">Mobile Application</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Role</span>{" "}
                  <span className="text-slate-900 font-semibold">UI/UX Designer & Dev</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Timeline</span>{" "}
                  <span className="text-slate-900 font-semibold">3–4 Months</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Tech Stack</span>{" "}
                  <span className="text-slate-900 font-semibold">Native Android, Node, MongoDB</span>{" "}
                </div>{" "}
              </motion.div>{" "}
            </section>{" "}
            {/* Problem Statement */}{" "}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-20">
              {" "}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {" "}
                <div className="flex-1">
                  {" "}
                  <h2 className="text-3xl font-black mb-6 flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary">report_problem</span>{" "}
                    Problem Statement{" "}
                  </h2>{" "}
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {" "}
                    Early-stage startups often face significant challenges when
                    trying to raise funding. Limited access to investor
                    networks, lack of visibility for promising startups, and
                    fragmented communication make the process highly
                    inefficient.{" "}
                  </p>{" "}
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    {" "}
                    <p className="font-medium text-slate-800 italic">
                      {" "}
                      "For small businesses seeking Series A or Series B
                      funding, finding the right investors is fragmented,
                      time-consuming and difficult."{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.section>{" "}
            {/* Research & User Persona */}{" "}
            <section className="mb-20 space-y-12" id="research">
              {" "}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
                {" "}
                <motion.h2 variants={fadeUp} className="text-3xl font-black mb-6">
                  Research & Insights
                </motion.h2>{" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {" "}
                  <motion.div variants={fadeUp} className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {" "}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group">
                      {" "}
                      <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">analytics</span>{" "}
                      Competitor Analysis{" "}
                    </h3>{" "}
                    <p className="text-slate-600">
                      Analyzed platforms like AngelList and Crunchbase.
                      Identified that discovery is incredibly difficult for
                      newer founders without established networks or
                      introductions.
                    </p>{" "}
                  </motion.div>{" "}
                  <motion.div variants={fadeUp} className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {" "}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group">
                      {" "}
                      <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">search_check</span>{" "}
                      Workflow Analysis{" "}
                    </h3>{" "}
                    <p className="text-slate-600">
                      Founders use fragmented tools (emails, spreadsheets).
                      Conversely, investors suffer from inefficient filtering
                      due to receiving large volumes of irrelevant pitches.
                    </p>{" "}
                  </motion.div>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* User Persona */}{" "}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                {" "}
                <div className="md:flex">
                  {" "}
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col items-center text-center">
                    {" "}
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4 shadow-md transition-transform">
                      {" "}
                      <img
                        alt="User Persona Portrait"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of a young professional man of South Asian descent"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnE2DJTXwNtwr4tt5S1CNaX25cAB1rbB-hKfynbfWppRHD3OHXtQrEcRSciIjiTkUDDznLC6twyEeg17TDWu6C8hflN5EuMVyDw-1xbJQ6kh_p0CxJLdZqpTDiMWmhTfQuMnY6j51SXJwPVoenz15ylQMQ33-WBrT9GLhqD5uCel7uZe9hA1SdJHQWnbU9ZlQDlWltPEKdk2I9GExR-p_ACiVaZ0NIlgpQ0C66XYLethSCXOyT1_nRqXNgoLyMmP_4GbMKf3bFZ6oD"
                      />{" "}
                    </motion.div>{" "}
                    <h4 className="text-xl font-bold">Jay Patel, 32</h4>{" "}
                    <p className="text-primary font-medium text-sm">Startup Founder</p>{" "}
                    <div className="mt-6 space-y-2 w-full text-left">
                      {" "}
                      <div className="flex justify-between text-xs">
                        <span>Tech Savvy</span>
                        <span className="font-bold text-primary">90%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="bg-primary h-full rounded-full"></motion.div>{" "}
                      </div>{" "}
                      <div className="flex justify-between text-xs mt-2">
                        <span>Network Connections</span>
                        <span className="font-bold text-primary">30%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="bg-primary h-full rounded-full"></motion.div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="md:w-2/3 p-8 lg:p-12 space-y-6">
                    {" "}
                    <div>
                      {" "}
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Goals</h4>{" "}
                      <p className="font-medium">
                        Find investors interested in early-stage tech startups
                        quickly and present the company clearly efficiently.
                      </p>{" "}
                    </div>{" "}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {" "}
                      <div>
                        {" "}
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Pain Points</h4>{" "}
                        <ul className="text-sm space-y-4 text-slate-600">
                          {" "}
                          <li className="flex items-start gap-3 group">
                            <span className="material-symbols-outlined text-red-500 text-sm mt-1 transition-transform group-hover:scale-125">close</span>{" "}
                            Limited access to investor networks
                          </li>{" "}
                          <li className="flex items-start gap-3 group">
                            <span className="material-symbols-outlined text-red-500 text-sm mt-1 transition-transform group-hover:scale-125">close</span>{" "}
                            Time-consuming fundraising outreach
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Needs</h4>{" "}
                        <ul className="text-sm space-y-4 text-slate-600">
                          {" "}
                          <li className="flex items-start gap-3 group">
                            <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span>{" "}
                            Centralized communication tools
                          </li>{" "}
                          <li className="flex items-start gap-3 group">
                            <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span>{" "}
                            Clear profile presentation platform
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
            </section>{" "}
            {/* User Journey & Architecture */}{" "}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mb-20" id="design">
              {" "}
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-10">
                Strategy & Architecture
              </motion.h2>{" "}
              {/* Design Goals */}{" "}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {" "}
                <motion.div variants={fadeUp} className="bg-primary p-6 rounded-xl text-white transition-all hover:shadow-lg hover:-translate-y-1 group">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 transition-transform group-hover:scale-110">search</span>{" "}
                  <h4 className="font-bold mb-2">Discovery</h4>{" "}
                  <p className="text-sm text-white/80">
                    Simplify the startup discovery experience using minimal
                    navigation levels.
                  </p>{" "}
                </motion.div>{" "}
                <motion.div variants={fadeUp} className="bg-slate-900 p-6 rounded-xl text-white transition-all hover:shadow-lg hover:-translate-y-1 group">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 transition-transform group-hover:scale-110">forum</span>{" "}
                  <h4 className="font-bold mb-2">Communication</h4>{" "}
                  <p className="text-sm text-white/80">
                    Enable easy and immediate investor-startup connection
                    protocols.
                  </p>{" "}
                </motion.div>{" "}
                <motion.div variants={fadeUp} className="bg-white border border-slate-200 p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 group hover:border-primary/20">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 text-primary transition-transform group-hover:scale-110">verified</span>{" "}
                  <h4 className="font-bold mb-2">Clarity & Trust</h4>{" "}
                  <p className="text-sm text-slate-600">
                    Provide structured information and clean UI for rapid
                    evaluation.
                  </p>{" "}
                </motion.div>{" "}
              </div>{" "}
              {/* IA Diagram */}{" "}
              <div className="space-y-8 relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                {" "}
                <h3 className="text-xl font-bold relative z-10">Information Architecture</h3>{" "}
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center relative z-10">
                  {" "}
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white rounded border border-primary text-primary font-bold shadow-sm transition-colors hover:bg-primary hover:text-white cursor-pointer">Home Dashboard</motion.div>{" "}
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0">arrow_forward</motion.span>{" "}
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm transition-colors hover:bg-primary hover:text-white cursor-pointer">Startup Listings</motion.div>{" "}
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0">arrow_forward</motion.span>{" "}
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-primary text-white rounded font-bold shadow-md cursor-pointer">Profile Details</motion.div>{" "}
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0">arrow_forward</motion.span>{" "}
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm transition-colors hover:bg-primary hover:text-white cursor-pointer">Investor Interaction</motion.div>{" "}
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0">arrow_forward</motion.span>{" "}
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm transition-colors hover:bg-primary hover:text-white cursor-pointer">Investment Requests</motion.div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.section>{" "}
            {/* Key Screens */}{" "}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mb-20">
              {" "}
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                {" "}
                <div>
                  {" "}
                  <h2 className="text-3xl font-black mb-2">UI Design & Key Screens</h2>{" "}
                  <p className="text-slate-600">Clean, Professional, and Accessible Mobile Ecosystem</p>{" "}
                </div>{" "}
              </motion.div>{" "}
                {" "}
                {/* Discovery Grid */}{" "}
                <motion.div variants={fadeUp} className="space-y-4">
                  {" "}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg group transition-shadow hover:shadow-2xl">
                    <img src={growmore1} alt="Home Dashboard Screen" className="w-full h-auto object-cover block transition-transform duration-1000 group-hover:scale-[1.02]" />
                  </div>{" "}
                </motion.div>{" "}
               
            </motion.section>{" "}
            {/* Usability & Decisions */}{" "}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
              {" "}
              <motion.div variants={fadeUp}>
                {" "}
                <h2 className="text-2xl font-black mb-6">Design Decisions</h2>{" "}
                <div className="space-y-6">
                  {" "}
                  <div className="flex gap-4 group">
                    {" "}
                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {" "}
                      <span className="material-symbols-outlined transition-transform group-hover:scale-110">dashboard</span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold text-slate-800 transition-colors group-hover:text-primary">Card-Based Layouts</h5>{" "}
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        Startup profiles were displayed using card layouts to
                        allow users to quickly scan multiple investment
                        opportunities, accommodating rapid decision-making.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex gap-4 group">
                    {" "}
                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {" "}
                      <span className="material-symbols-outlined transition-transform group-hover:scale-110">account_tree</span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold text-slate-800 transition-colors group-hover:text-primary">Simplified Navigation</h5>{" "}
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        The app uses minimal navigation levels to ensure
                        founders can quickly access core features such as
                        profile management and investment discovery without
                        overwhelming friction.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={fadeUp} className="p-8 bg-slate-900 rounded-2xl text-white shadow-xl">
                {" "}
                <h2 className="text-2xl font-black mb-6">Lessons Learned</h2>{" "}
                <ul className="space-y-6">
                  {" "}
                  <li className="flex gap-4 group">
                    {" "}
                    <span className="material-symbols-outlined text-primary mt-0.5 transition-transform group-hover:scale-110">check_circle</span>{" "}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">Information Structure:</strong>{" "}
                      Investors require structured and highly concise formatting
                      to evaluate startups without reading long paragraphs.
                    </p>{" "}
                  </li>{" "}
                  <li className="flex gap-4 group">
                    {" "}
                    <span className="material-symbols-outlined text-primary mt-0.5 transition-transform group-hover:scale-110">check_circle</span>{" "}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">Trust is Critical:</strong>{" "}
                      Design decisions in fintech/investment spaces must lean
                      toward professional and calm visual languages rather than
                      gamified interfaces.
                    </p>{" "}
                  </li>{" "}
                </ul>{" "}
              </motion.div>{" "}
            </motion.section>{" "}
           
          </div>{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
};
export default GrowMore;
