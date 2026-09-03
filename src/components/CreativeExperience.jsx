import React from 'react';
import { Sparkles, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { creativeExperienceData } from '../data/portfolioData';
import { personalInfo } from '../data/portfolioData';

export default function CreativeExperience() {
  return (
    <section id="creative" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            {creativeExperienceData.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            {creativeExperienceData.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
            Leveraging emerging AI tools, animation, and digital media to engage audiences online.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="glass-card p-8 rounded-2xl border-indigo-200 dark:border-indigo-500/30 bg-gradient-to-br from-white via-white to-indigo-50/50 dark:from-[#131926] dark:via-[#131926] dark:to-indigo-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Role & Metric */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold border border-indigo-200 dark:border-indigo-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Tools & Content Creation</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {creativeExperienceData.role}
                </h3>
                <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-1">
                  {creativeExperienceData.platform} • Status: {creativeExperienceData.status}
                </p>
              </div>

              {/* Audience metric */}
              <div className="p-4 rounded-xl bg-indigo-100/60 dark:bg-indigo-600/15 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Audience Reach</span>
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {creativeExperienceData.audienceMetric}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              {/* TikTok clickable button */}
              <a
                href={personalInfo.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-slate-900 dark:bg-black text-white text-sm font-semibold border border-slate-700 hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
                aria-label="View TikTok Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/>
                </svg>
                <span>View @abika2121 on TikTok</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Right: Takeaways */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {creativeExperienceData.description}
              </p>
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  What This Demonstrates to Employers:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {creativeExperienceData.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
