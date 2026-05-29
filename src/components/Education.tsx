import { GraduationCap, MapPin, Monitor } from 'lucide-react';
import { education } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader label="Formación" title="Educación" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {education.map((edu, idx) => (
              <div
                key={edu.id}
                className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-card-md transition-all duration-200 reveal reveal-delay-${Math.min(idx + 1, 3)}`}
              >
                {/* Header row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-sm shrink-0">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="shrink-0 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-medium">
                          En curso
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-400">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                    {edu.modalidad && (
                      <span className="flex items-center gap-1">
                        <Monitor size={11} />
                        {edu.modalidad}
                      </span>
                    )}
                    {edu.location && !edu.modalidad && (
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {edu.location}
                      </span>
                    )}
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
