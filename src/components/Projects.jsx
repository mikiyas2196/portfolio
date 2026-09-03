import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            04 — PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
            Real full-stack web platforms built independently, collaboratively, and during university internship.
          </p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const isKeneanKids = project.id === 'kenean-kids';
            const cardContent = (
              <>
                {/* Image area */}
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#0b0f17]/90 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-medium shadow-sm">
                    {project.typeBadge}
                  </div>
                  {project.emphasis && (
                    <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                      Featured
                    </div>
                  )}
                  {isKeneanKids && project.demoUrl && (
                    <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5" /> Open Live Site
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {project.title}
                      {isKeneanKids && project.demoUrl && (
                        <ExternalLink className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-400 dark:text-slate-400">
                    {project.keyFeatures.slice(0, 2).map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-indigo-600 dark:text-indigo-300 border border-slate-200 dark:border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedProject(project); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-mono group/btn focus:outline-none"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Live Demo">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );

            return isKeneanKids && project.demoUrl ? (
              <a
                key={project.id}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 ring-2 ring-indigo-500/40 shadow-xl shadow-indigo-500/10 cursor-pointer"
                aria-label={`Open ${project.title} live site`}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

      </div>
    </section>
  );
}
