import { Award, ExternalLink, CalendarDays, Clock } from 'lucide-react';
import { certifications } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const issuerGradient: Record<string, string> = {
  'Amazon Web Services': 'from-orange-500 to-yellow-400',
  'CompTIA':             'from-red-600 to-red-400',
  'Google Cloud':        'from-blue-500 to-green-400',
  'Google / Coursera':   'from-blue-500 to-emerald-400',
  'HashiCorp':           'from-violet-600 to-purple-400',
  'Microsoft':           'from-blue-600 to-cyan-400',
};

function getGradient(issuer: string) {
  return issuerGradient[issuer] ?? 'from-blue-600 to-cyan-500';
}

export default function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionHeader
            label="Certificaciones"
            title="Credenciales"
            subtitle="Certificaciones obtenidas y verificables."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/60 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-200 flex flex-col reveal reveal-delay-${Math.min(idx + 1, 3)}`}
              >
                {/* Top */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${getGradient(cert.issuer)} flex items-center justify-center shadow-sm shrink-0`}>
                    <Award size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                      {cert.issuer}
                    </p>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug">
                      {cert.name}
                    </h3>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                    <CalendarDays size={12} />
                    <span>Emitido: <span className="font-medium text-slate-700 dark:text-slate-400">{cert.issuedDate}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                    <Clock size={12} />
                    <span>Vence: <span className="font-medium text-slate-700 dark:text-slate-400">{cert.expiry}</span></span>
                  </div>
                  {cert.credentialId && (
                    <p className="text-xs text-slate-400 dark:text-slate-600 font-mono truncate mt-0.5">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                    >
                      <ExternalLink size={12} />
                      Ver credencial
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-700/40 cursor-not-allowed opacity-60">
                      <ExternalLink size={12} />
                      Link pendiente
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
