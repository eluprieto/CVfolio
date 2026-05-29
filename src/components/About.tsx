import { MapPin, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { personal, social } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader label="Sobre mí" title="Quién soy" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Avatar */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-card-lg">
                  <span className="text-6xl font-bold text-white select-none">
                    {personal.initials}
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-2xl border-2 border-blue-200 dark:border-blue-900 -z-10" />
                <div className="absolute -inset-4 rounded-2xl border border-blue-100 dark:border-blue-900/50 -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <p className="text-slate-700 dark:text-slate-300 text-base lg:text-lg leading-relaxed whitespace-pre-line mb-6">
                {personal.bio}
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <InfoChip icon={<MapPin size={14} />} text={personal.location} />
                <InfoChip icon={<Mail size={14} />} text={personal.email} href={`mailto:${personal.email}`} />
              </div>

              {/* Social + CV */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-all duration-200 bg-white dark:bg-slate-900"
                >
                  <LinkedInIcon size={15} /> LinkedIn
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm font-medium transition-all duration-200 bg-white dark:bg-slate-900"
                >
                  <GitHubIcon size={15} /> GitHub
                </a>
                <a
                  href={personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-200 shadow-sm"
                >
                  Ver CV completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoChip({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const classes =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200';

  if (href) {
    return (
      <a href={href} className={`${classes} hover:text-blue-600 dark:hover:text-blue-400`}>
        {icon}
        {text}
      </a>
    );
  }
  return (
    <span className={classes}>
      {icon}
      {text}
    </span>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center lg:text-left">
      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
