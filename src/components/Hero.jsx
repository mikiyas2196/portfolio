import React from 'react';
import { ArrowRight, Mail, FileText, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'Mikiyas-Sebsibe-Taye-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 dark:bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-400/5 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
          {personalInfo.title}
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
          Building practical web<br className="hidden sm:block" /> experiences with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400">
            modern technologies.
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {personalInfo.summary}
        </p>

        {/* Quick highlights */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-10">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Jimma University IT Graduate (3.78 CGPA)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>React &amp; Laravel Specialist</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>CCNA Certified</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 text-sm"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-0.5 text-sm"
          >
            <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3.5 border border-indigo-300 dark:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 font-semibold rounded-xl transition-all duration-300 text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-4 text-slate-400 dark:text-slate-500">
          <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">Connect:</span>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            className="p-2 bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
