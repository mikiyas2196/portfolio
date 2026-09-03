import React from 'react';
import { Award, CheckCircle, MapPin, Building2, Calendar } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-[#0b0f17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            {aboutData.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            {aboutData.heading}
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
            {aboutData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg">{paragraph}</p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium text-slate-700 dark:text-slate-200 text-sm">
              {[
                'Problem Solving & Logic',
                'Independent Web Development',
                'Team System Collaboration',
                'Continuous Learning Mindset',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-white dark:bg-[#131926] border border-slate-200 dark:border-[#1f293d]">
                  <CheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Degree</span>
              <p className="font-bold text-slate-900 dark:text-white text-base">BSc Information Technology</p>
              <p className="text-xs text-slate-400">Jimma University</p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2 border-indigo-200 dark:border-indigo-500/40 bg-indigo-50 dark:bg-indigo-950/20">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block font-bold">Academic Distinction</span>
              <p className="font-extrabold text-2xl text-emerald-600 dark:text-emerald-400">3.78 / 4.00</p>
              <p className="text-xs text-slate-400">Cumulative GPA</p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Graduation</span>
              <p className="font-bold text-slate-900 dark:text-white text-base">Class of 2026</p>
              <p className="text-xs text-slate-400">Jimma, Ethiopia</p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Current Location</span>
              <p className="font-bold text-slate-900 dark:text-white text-base">{personalInfo.location}</p>
              <p className="text-xs text-slate-400">Open to Remote / Onsite</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
