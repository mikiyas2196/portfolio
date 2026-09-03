import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-slate-50 dark:bg-[#0b0f17]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            07 — CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            What I Can Build
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
            Practical development services tailored to web applications, business requirements, and client needs.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div key={service.number} className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-indigo-500 dark:text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <span>Production Ready Implementation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
