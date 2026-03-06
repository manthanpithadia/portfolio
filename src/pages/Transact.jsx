import React from "react";
import { motion } from "framer-motion";
import transact1 from '../assets/images/transact1.bmp';

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

const Transact = () => {
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
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="relative md:overflow-hidden md:rounded-xl md:min-h-[400px] flex flex-col justify-end md:p-12 mb-10 group bg-slate-100">
                <div 
                  className="hidden md:block absolute inset-0 z-0 bg-slate-900 transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(14, 165, 233, 0.9) 0%, rgba(14, 165, 233, 0.2) 100%)`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {" "}
                <div className="max-w-2xl relative z-10">
                  {" "}
                  <span className="bg-white text-sky-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-2 md:mb-0 shadow-sm">
                    Fintech Mobile App
                  </span>{" "}
                  <h1 className="text-slate-900 md:text-white text-4xl md:text-5xl font-black leading-tight mt-4 mb-4 md:mb-6">
                    Transact – Banking & Wallet Application
                  </h1>{" "}
                  <p className="text-slate-600 md:text-white/90 text-lg md:text-xl font-medium">
                    A streamlined digital banking platform focused on simplifying
                    peer-to-peer transfers, bill payments, and financial insights
                    for younger demographics.
                  </p>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* Project Metadata */}{" "}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white border border-slate-200 rounded-xl transition-shadow hover:shadow-lg">
                {" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Type</span>{" "}
                  <span className="text-slate-900 font-semibold">Mobile App Design</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Role</span>{" "}
                  <span className="text-slate-900 font-semibold">UI/UX Designer</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Timeline</span>{" "}
                  <span className="text-slate-900 font-semibold">2 Months</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Tools</span>{" "}
                  <span className="text-slate-900 font-semibold">Figma, Miro, InVision</span>{" "}
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
                    <span className="material-symbols-outlined text-sky-500">account_balance_wallet</span>{" "}
                    Problem Statement{" "}
                  </h2>{" "}
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {" "}
                    Traditional banking apps are overly complex, cluttered with
                    irrelevant offers, and lack intuitive transaction histories.
                    Younger users need a faster, stress-free way to move money
                    and track daily spending.{" "}
                  </p>{" "}
                  <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg">
                    {" "}
                    <p className="font-medium text-slate-800 italic">
                      {" "}
                      "Millennial and Gen-Z users feel overwhelmed by banking interfaces built for complex wealth management rather than daily cash flow."{" "}
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
                      <span className="material-symbols-outlined text-sky-500 transition-transform group-hover:scale-110">trending_down</span>{" "}
                      Cognitive Load{" "}
                    </h3>{" "}
                    <p className="text-slate-600">
                      Users spend 3x longer finding the "Transfer" button in legacy banking apps compared to modern neo-banks (e.g., CashApp, Venmo).
                    </p>{" "}
                  </motion.div>{" "}
                  <motion.div variants={fadeUp} className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {" "}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 group">
                      {" "}
                      <span className="material-symbols-outlined text-sky-500 transition-transform group-hover:scale-110">security</span>{" "}
                      Trust Signals{" "}
                    </h3>{" "}
                    <p className="text-slate-600">
                      While demanding modern UI, users still require strong visual indicators of security (e.g., biometric login prompts, instant transaction receipts) to feel safe holding funds in digital-only wallets.
                    </p>{" "}
                  </motion.div>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* User Persona */}{" "}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                {" "}
                <div className="md:flex">
                  {" "}
                  <div className="md:w-1/3 bg-sky-50 p-8 flex flex-col items-center text-center">
                    {" "}
                    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4 shadow-md transition-transform bg-sky-200 flex items-center justify-center">
                      {" "}
                      <span className="material-symbols-outlined text-6xl text-sky-600">face_3</span>
                    </motion.div>{" "}
                    <h4 className="text-xl font-bold">Sarah Chen, 24</h4>{" "}
                    <p className="text-sky-600 font-medium text-sm">Freelance Designer</p>{" "}
                    <div className="mt-6 space-y-2 w-full text-left">
                      {" "}
                      <div className="flex justify-between text-xs">
                        <span>Digital Native</span>
                        <span className="font-bold text-sky-600">95%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="bg-sky-500 h-full rounded-full"></motion.div>{" "}
                      </div>{" "}
                      <div className="flex justify-between text-xs mt-2">
                        <span>Financial Literacy</span>
                        <span className="font-bold text-sky-600">40%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="bg-sky-500 h-full rounded-full"></motion.div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="md:w-2/3 p-8 lg:p-12 space-y-6">
                    {" "}
                    <div>
                      {" "}
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Goals</h4>{" "}
                      <p className="font-medium">
                        Send money to friends for dinner splits instantly, pay rent without navigating complex menus, and see visually how much money is left for the week.
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
                            Hidden fees for rapid transfers.
                          </li>{" "}
                          <li className="flex items-start gap-3 group">
                            <span className="material-symbols-outlined text-red-500 text-sm mt-1 transition-transform group-hover:scale-125">close</span>{" "}
                            Clunky contact list integration requiring account routing numbers.
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
                            One-tap transfers to recent contacts.
                          </li>{" "}
                          <li className="flex items-start gap-3 group">
                            <span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span>{" "}
                            Visual graphs categorizing "Food", "Rent", and "Fun" automatically.
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
            </section>{" "}
            {/* Strategy & Architecture */}{" "}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mb-20" id="design">
              {" "}
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-10">
                Strategy & Architecture
              </motion.h2>{" "}
              {/* Design Goals */}{" "}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {" "}
                <motion.div variants={fadeUp} className="bg-sky-500 p-6 rounded-xl text-white transition-all hover:shadow-lg hover:-translate-y-1 group">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 transition-transform group-hover:scale-110">bolt</span>{" "}
                  <h4 className="font-bold mb-2">Speed</h4>{" "}
                  <p className="text-sm text-white/80">
                    Reduce peer-to-peer transfer time from 5 steps to just 2 taps.
                  </p>{" "}
                </motion.div>{" "}
                <motion.div variants={fadeUp} className="bg-slate-900 p-6 rounded-xl text-white transition-all hover:shadow-lg hover:-translate-y-1 group">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 transition-transform group-hover:scale-110">insights</span>{" "}
                  <h4 className="font-bold mb-2">Visual Clarity</h4>{" "}
                  <p className="text-sm text-white/80">
                    Replace text-heavy ledgers with colorful, categorised spending graphs.
                  </p>{" "}
                </motion.div>{" "}
                <motion.div variants={fadeUp} className="bg-white border border-slate-200 p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 group hover:border-sky-500/20">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 text-sky-500 transition-transform group-hover:scale-110">fingerprint</span>{" "}
                  <h4 className="font-bold mb-2">Frictionless Security</h4>{" "}
                  <p className="text-sm text-slate-600">
                    Implement FaceID/TouchID natively ensuring quick yet secure access.
                  </p>{" "}
                </motion.div>{" "}
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
                  <p className="text-slate-600">Modern Banking Interfaces Focusing on Neo-Bank Aesthetics</p>{" "}
                </div>{" "}
              </motion.div>{" "}
                {" "}
                {/* Screens Image */}{" "}
                <motion.div variants={fadeUp} className="space-y-4">
                  {" "}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-2xl hover:border-sky-500/20">
                    <img src={transact1} alt="Transact App Screens showcasing Dashboard, Transfer Flow and Analytics" className="w-full h-auto object-cover block transition-transform duration-1000 group-hover:scale-[1.02] drop-shadow-xl" />
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
                    <div className="h-10 w-10 shrink-0 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                      {" "}
                      <span className="material-symbols-outlined transition-transform group-hover:scale-110">palette</span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold text-slate-800 transition-colors group-hover:text-sky-600">Color Psychology</h5>{" "}
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        Selected a deep trust-building blue mixed with vibrant neon accents (green/purple) to signify modern tech while maintaining financial credibility.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex gap-4 group">
                    {" "}
                    <div className="h-10 w-10 shrink-0 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                      {" "}
                      <span className="material-symbols-outlined transition-transform group-hover:scale-110">touch_app</span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold text-slate-800 transition-colors group-hover:text-sky-600">Thumb-Zone Navigation</h5>{" "}
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        Placed the core "Send/Request" action as a floating FAB and moved secondary navigation to a bottom tab bar to optimize for one-handed smartphone use.
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
                    <span className="material-symbols-outlined text-sky-400 mt-0.5 transition-transform group-hover:scale-110">check_circle</span>{" "}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">Error Prevention is Key:</strong>{" "}
                      When dealing with money, rapid animations must be balanced with clear confirmation modals before transaction execution preventing costly mistakes.
                    </p>{" "}
                  </li>{" "}
                  <li className="flex gap-4 group">
                    {" "}
                    <span className="material-symbols-outlined text-sky-400 mt-0.5 transition-transform group-hover:scale-110">check_circle</span>{" "}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">Micro-interactions build confidence:</strong>{" "}
                      Haptic feedback and custom success-state animations (e.g. green checkmarks) assure users that their invisible digital money has actually moved.
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
export default Transact;
