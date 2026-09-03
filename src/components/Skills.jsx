import React from 'react';
import { Code2, Server, Layers, Flame, GitBranch, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const iconMap = { Code2, Server, Layers, Flame, GitBranch };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            02 — SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Technical Skills
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
            Core technologies and tools utilized across full-stack web development projects.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => {
            const Icon = iconMap[skill.iconName] || Code2;
            return (
              <div key={skill.id} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                      {skill.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    "{skill.description}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Check className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>Practical CV Verified Skill</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
