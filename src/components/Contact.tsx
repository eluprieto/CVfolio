import { Mail, MapPin, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { personal, social } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/elias-prieto',
    href: social.linkedin,
    color: 'from-blue-700 to-blue-500',
  },
  {
    icon: <GitHubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/eluprieto',
    href: social.github,
    color: 'from-slate-700 to-slate-500',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Ubicación',
    value: personal.location,
    href: undefined,
    color: 'from-emerald-600 to-teal-400',
  },
];

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader
            label="Contacto"
            title="Hablemos"
            subtitle="Disponible para oportunidades laborales, consultas técnicas y colaboraciones."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contactItems.map((item, idx) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 reveal reveal-delay-${Math.min(idx + 1, 3)} ${item.href ? 'hover:border-blue-200 dark:hover:border-slate-700 hover:shadow-card transition-all duration-200' : ''}`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate block">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CV download CTA */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/40">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              ¿Querés ver mi CV completo?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
              Descargá mi CV actualizado con toda mi experiencia y formación.
            </p>
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
