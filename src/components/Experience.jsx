import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-50 dark:bg-[#0b0f17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            03 — EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Practical IT Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
            Real-world software development work within academic ICT infrastructure.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="relative border-l-2 border-indigo-400/40 dark:border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-[#0b0f17] border-2 border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 inline-block mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium text-sm mt-1">
                      <Building className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-left sm:text-right font-mono text-xs text-slate-400">
                    <div className="flex items-center sm:justify-end gap-1.5 text-indigo-600 dark:text-indigo-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Key Contributions & Impact:</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
