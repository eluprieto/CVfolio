import {
  Cloud,
  GitBranch,
  Activity,
  Shield,
  Code2,
  Network,
} from 'lucide-react';
import { skills } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, React.ReactNode> = {
  Cloud:     <Cloud size={16} />,
  GitBranch: <GitBranch size={16} />,
  Activity:  <Activity size={16} />,
  Shield:    <Shield size={16} />,
  Code2:     <Code2 size={16} />,
  Network:   <Network size={16} />,
};

const categoryColors = [
  'from-blue-600 to-blue-400',
  'from-violet-600 to-purple-400',
  'from-emerald-600 to-teal-400',
  'from-rose-600 to-pink-400',
  'from-amber-600 to-yellow-400',
  'from-cyan-600 to-sky-400',
];

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader
            label="Tecnologías"
            title="Skills"
            subtitle="Herramientas y tecnologías con las que trabajo."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((category, idx) => (
              <div
                key={category.label}
                className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-700 hover:shadow-card-md transition-all duration-200 reveal reveal-delay-${Math.min(idx + 1, 3)}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${categoryColors[idx % categoryColors.length]} flex items-center justify-center text-white shadow-sm`}>
                    {iconMap[category.icon] ?? <Code2 size={16} />}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {category.label}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map(skill => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
