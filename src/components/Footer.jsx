import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-100 dark:bg-[#080c14] border-t border-slate-200 dark:border-[#1f293d] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">

          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/40 flex items-center justify-center font-extrabold text-indigo-600 dark:text-indigo-400 text-xs">
                {personalInfo.initials}
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-lg">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="GitHub Profile">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="LinkedIn Profile">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={personalInfo.socialLinks.email}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="Send Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl bg-white dark:bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 transition-all duration-300">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4 text-center">
          <p>© 2026 Mikiyas Sebsibe Taye. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS • Deployed on Netlify</p>
        </div>
      </div>
    </footer>
  );
}
