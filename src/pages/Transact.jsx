import React from "react";
import background from '../assets/images/bg2.png';
import transact_img from '../assets/images/transact1.bmp';
import profile_pic2 from '../assets/images/profile_pic2.png';

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
              <div
                className="relative overflow-hidden rounded-xl min-h-[400px] flex flex-col justify-end p-8 md:p-12 mb-10 bg-slate-900"
                data-alt="Modern mobile banking app dashboard UI mockup"
                style={{
                  backgroundImage:
                    `linear-gradient(0deg, rgba(17, 26, 33, 0.9) 0%, rgba(17, 26, 33, 0.2) 100%), url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {" "}
                <div className="max-w-2xl">
                  {" "}
                  <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    Mobile App Case Study
                  </span>{" "}
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mt-4 mb-6">
                    Transact – Mobile Banking Application
                  </h1>{" "}
                  <p className="text-slate-200 text-lg md:text-xl font-medium">
                    Transact is a mobile banking application designed to provide a secure, intuitive, and visually engaging experience for users managing their personal finances.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Project Metadata */}{" "}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white border border-slate-200 rounded-xl">
                {" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Type
                  </span>{" "}
                  <span className="text-slate-900 font-semibold">
                    Mobile Application
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Role
                  </span>{" "}
                  <span className="text-slate-900 font-semibold">
                    UI/UX Designer
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Timeline
                  </span>{" "}
                  <span className="text-slate-900 font-semibold">
                    2–3 Months
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Tech Stack
                  </span>{" "}
                  <span className="text-slate-900 font-semibold">
                    Figma, MVVM
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
            {/* Problem Statement */}{" "}
            <section className="mb-20">
              {" "}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {" "}
                <div className="flex-1">
                  {" "}
                  <h2 className="text-3xl font-black mb-6 flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary">
                      report_problem
                    </span>{" "}
                    Problem Statement{" "}
                  </h2>{" "}
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Many mobile banking applications are complex and difficult to navigate, particularly for users who are not highly familiar with financial technology. Common challenges include complicated transaction flows, poor visual hierarchy, confusing navigation, and difficulty performing basic tasks like transfers or bill payments.
                  </p>{" "}
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    {" "}
                    <p className="font-medium text-slate-800 italic">
                      "These usability issues reduce user trust and increase friction when performing financial transactions."
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-full md:w-1/3 flex justify-center">
                  {" "}
                  <div className="relative w-full aspect-square bg-slate-100 rounded-2xl flex items-center justify-center p-8 text-center overflow-hidden">
                    {" "}
                    <div className="flex flex-col items-center gap-4">
                      {" "}
                      <span className="material-symbols-outlined text-6xl text-primary/40">
                        account_balance
                      </span>{" "}
                      <p className="text-sm font-bold text-slate-500">
                        Complex Financial Interfaces
                      </p>{" "}
                    </div>{" "}
                    <div className="absolute inset-0 bg-primary/5 opacity-50"></div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
            {/* Research & Insights */}{" "}
            <section className="mb-20 space-y-12" id="research">
              {" "}
              <div>
                {" "}
                <h2 className="text-3xl font-black mb-6">
                  Research & Insights
                </h2>{" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {" "}
                  <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
                    {" "}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary">
                        analytics
                      </span>{" "}
                      Competitor Analysis{" "}
                    </h3>{" "}
                    <p className="text-slate-600 ">
                      We conducted a competitor analysis of existing banking apps and an usability review of common fintech interfaces, along with an analysis of user behavior patterns.
                    </p>{" "}
                  </div>{" "}
                  <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
                    {" "}
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary">
                        search_check
                      </span>{" "}
                      Workflow Analysis{" "}
                    </h3>{" "}
                    <p className="text-slate-600 ">
                      Insights showed users want to quickly view balances without navigating multiple screens. Financial apps must visually communicate reliability, and transaction flows must be fast.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* User Persona */}{" "}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                {" "}
                <div className="md:flex">
                  {" "}
                  <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col items-center text-center">
                    {" "}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
                      {" "}
                      <img
                        alt="User Persona Portrait"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of a young professional woman"
                        src={profile_pic2}
                      />{" "}
                    </div>{" "}
                    <h4 className="text-xl font-bold">Sarah Thompson, 29</h4>{" "}
                    <p className="text-primary font-medium text-sm">
                      Marketing Manager
                    </p>{" "}
                    <div className="mt-6 space-y-2 w-full text-left">
                      {" "}
                      <div className="flex justify-between text-xs">
                        <span>Tech Savvy</span>
                        <span className="font-bold text-primary">70%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <div className="bg-primary h-full w-[70%]"></div>{" "}
                      </div>{" "}
                      <div className="flex justify-between text-xs mt-2">
                        <span>Financial Knowledge</span>
                        <span className="font-bold text-primary">40%</span>
                      </div>{" "}
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        {" "}
                        <div className="bg-primary h-full w-[40%]"></div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="md:w-2/3 p-8 lg:p-12 space-y-6">
                    {" "}
                    <div>
                      {" "}
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                        Goals
                      </h4>{" "}
                      <p className="font-medium">
                        Quickly check account balances, send money to friends and family easily, and track spending and transactions.
                      </p>{" "}
                    </div>{" "}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {" "}
                      <div>
                        {" "}
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                          Pain Points
                        </h4>{" "}
                        <ul className="text-sm space-y-2 text-slate-600 ">
                          {" "}
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-red-500 text-sm mt-1">
                              close
                            </span>{" "}
                            Confusing banking interfaces
                          </li>{" "}
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-red-500 text-sm mt-1">
                              close
                            </span>{" "}
                            Too many steps for simple actions
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                          Needs
                        </h4>{" "}
                        <ul className="text-sm space-y-2 text-slate-600 ">
                          {" "}
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-1">
                              check
                            </span>{" "}
                            Fast, secure, and easy mobile banking
                          </li>{" "}
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-1">
                              check
                            </span>{" "}
                            Difficulty understanding financial summaries resolved
                          </li>{" "}
                        </ul>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
            {/* User Journey & Architecture */}{" "}
            <section className="mb-20" id="design">
              {" "}
              <h2 className="text-3xl font-black mb-10">
                Strategy & Architecture
              </h2>{" "}
              {/* Design Goals */}{" "}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {" "}
                <div className="bg-primary p-6 rounded-xl text-white">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4">
                    search
                  </span>{" "}
                  <h4 className="font-bold mb-2">Discovery</h4>{" "}
                  <p className="text-sm text-white/80">
                    Create a simple and intuitive banking interface with clear information hierarchy for financial data.
                  </p>{" "}
                </div>{" "}
                <div className="bg-slate-900 p-6 rounded-xl text-white">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4">
                    forum
                  </span>{" "}
                  <h4 className="font-bold mb-2">Transactions</h4>{" "}
                  <p className="text-sm text-white/80">
                    Reduce complexity in transactions to ensure users can transfer money or pay bills rapidly.
                  </p>{" "}
                </div>{" "}
                <div className="bg-white border border-slate-200 p-6 rounded-xl ">
                  {" "}
                  <span className="material-symbols-outlined text-3xl mb-4 text-primary">
                    verified
                  </span>{" "}
                  <h4 className="font-bold mb-2">Clarity & Trust</h4>{" "}
                  <p className="text-sm text-slate-600 ">
                    Improve accessibility for everyday users and ensure visual design communicates trust and security.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* IA Diagram */}{" "}
              <div className="space-y-8">
                {" "}
                <h3 className="text-xl font-bold">
                  Information Architecture
                </h3>{" "}
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center">
                  {" "}
                  <div className="px-4 py-2 bg-white rounded border border-primary text-primary font-bold shadow-sm">
                    Dashboard
                  </div>{" "}
                  <span className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0 transition-transform">
                    arrow_forward
                  </span>{" "}
                  <div className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm">
                    Account Overview
                  </div>{" "}
                  <span className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0 transition-transform">
                    arrow_forward
                  </span>{" "}
                  <div className="px-4 py-2 bg-primary text-white rounded font-bold shadow-md">
                    Transactions
                  </div>{" "}
                  <span className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0 transition-transform">
                    arrow_forward
                  </span>{" "}
                  <div className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm">
                    Payments / Transfers
                  </div>{" "}
                  <span className="material-symbols-outlined text-slate-400 rotate-90 md:rotate-0 transition-transform">
                    arrow_forward
                  </span>{" "}
                  <div className="px-4 py-2 bg-white rounded border border-slate-200 text-slate-600 font-bold shadow-sm">
                    Settings
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
            {/* Key Screens */}{" "}
            <section className="mb-20">
              {" "}
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                {" "}
                <div>
                  {" "}
                  <h2 className="text-3xl font-black mb-2">
                    UI Design & Key Screens
                  </h2>{" "}
                  <p className="text-slate-600 ">
                    Clean, Professional, and Secure Mobile Banking Ecosystem
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="w-full flex justify-center">
                <img src={transact_img} alt="Transact UI Design Screens" className="w-full max-w-4xl h-auto rounded-xl shadow-2xl border border-slate-200" />
              </div>{" "}
            </section>{" "}
            {/* Usability & Decisions */}{" "}
            <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
              {" "}
              <div>
                {" "}
                <h2 className="text-2xl font-black mb-6">
                  Design Decisions
                </h2>{" "}
                <div className="space-y-6">
                  {" "}
                  <div className="flex gap-4">
                    {" "}
                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {" "}
                      <span className="material-symbols-outlined">
                        dashboard
                      </span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold">Dashboard-Centered Design</h5>{" "}
                      <p className="text-sm text-slate-600 ">
                        The dashboard was designed to show the most important financial information immediately upon login. This reduces the need for additional navigation.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex gap-4">
                    {" "}
                    <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {" "}
                      <span className="material-symbols-outlined">
                        account_tree
                      </span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <h5 className="font-bold">Minimal Navigation Structure</h5>{" "}
                      <p className="text-sm text-slate-600 ">
                        Limiting the number of navigation options helps users focus on essential banking tasks. Financial information is displayed using cards to improve readability.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-8 bg-slate-900 rounded-2xl text-white">
                {" "}
                <h2 className="text-2xl font-black mb-6">
                  Lessons Learned
                </h2>{" "}
                <ul className="space-y-4">
                  {" "}
                  <li className="flex gap-3">
                    {" "}
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>{" "}
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">
                        Importance of Simplicity:
                      </strong>{" "}
                      Financial applications should prioritize clarity and simplicity to build user trust.
                    </p>{" "}
                  </li>{" "}
                  <li className="flex gap-3">
                    {" "}
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>{" "}
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Iterative Design:</strong>{" "}
                      Continuous iteration based on feedback significantly improved the final user experience.
                    </p>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </section>{" "}
            
          </div>{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
};
export default Transact;
