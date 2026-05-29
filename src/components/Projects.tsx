import { ExternalLink, Clock, Star } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { projects } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import DeviceMockup from './DeviceMockup';

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader
            label="Proyectos"
            title="Trabajo personal"
            subtitle="Proyectos técnicos propios o de práctica."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-200 flex flex-col reveal reveal-delay-${Math.min(idx + 1, 3)}`}
              >
                {/* Mockup visual */}
                <DeviceMockup color={project.color} title={project.title} />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <Star size={14} className="text-amber-500 fill-amber-500 shrink-0 mt-1" />
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                      >
                        <GitHubIcon size={13} />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 dark:text-slate-600 cursor-not-allowed">
                        <GitHubIcon size={13} />
                        GitHub
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    ) : null}

                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink size={13} />
                        Ver proyecto
                      </a>
                    ) : null}

                    {!project.demoUrl && !project.projectUrl && (
                      <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-xs font-medium text-slate-400 dark:text-slate-500">
                        <Clock size={11} />
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-10 text-center">
            <a
              href={`https://github.com/eluprieto`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm font-medium bg-white dark:bg-slate-900 transition-all duration-200"
            >
              <GitHubIcon size={15} />
              Ver todos los repositorios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
