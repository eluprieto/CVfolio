import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader label="Trayectoria" title="Experiencia Profesional" />

          <div className="mt-12 relative timeline-line pl-8">
            {experience.map((job, idx) => (
              <div
                key={job.id}
                className={`relative mb-8 last:mb-0 reveal reveal-delay-${Math.min(idx + 1, 3)}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-5 w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-900 shadow-sm z-10" />

                {/* Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-card hover:shadow-card-md transition-shadow duration-200 border border-slate-100 dark:border-slate-700/60">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {job.company}
                        </span>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-medium">
                            Actual
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {job.position}
                      </h3>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded-lg">
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                        <MapPin size={11} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-5">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={14} className="text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
