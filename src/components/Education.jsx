import React from 'react';
import { GraduationCap, Award, CheckCircle, MapPin, Calendar, BookOpen, ShieldCheck } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#0b0f17]/50 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            05 — ACADEMICS & CERTIFICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-slate-900 mt-1">
            Education & Certification
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm mt-2 max-w-xl">
            Formal university education in Information Technology alongside professional networking certification.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Degree Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 light:bg-slate-100 text-slate-300 light:text-slate-700">
                  Degree Program
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white light:text-slate-900">
                  {educationData.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-slate-300 light:text-slate-700 text-sm font-medium mt-2">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    {educationData.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    {educationData.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    Graduation {educationData.graduationYear}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-sm leading-relaxed">
                Comprehensive training in software engineering, database management systems, networking, system analysis, and web technology applications.
              </p>
            </div>

            {/* CGPA Score Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-indigo-950/30 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  Academic Performance
                </span>
                <span className="text-slate-300 light:text-slate-700 text-xs">
                  Cumulative Grade Point Average
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {educationData.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Certification Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Verified Credential
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  {educationData.certification.title}
                </h3>
                <p className="text-xs font-mono text-amber-400 mt-1">
                  Issued by {educationData.certification.issuer}
                </p>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-sm leading-relaxed">
                {educationData.certification.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 light:text-slate-700 font-medium">
                Professional Networking & Infrastructure Certification
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
