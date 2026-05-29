import { Download, Eye, ArrowDown } from 'lucide-react';
import { personal, social } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import TerminalCard from './TerminalCard';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="flex flex-col text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-in self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
              Disponible para nuevas oportunidades
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              {personal.name.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-gradient">{personal.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            {/* Title */}
            <p
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              {personal.title}
            </p>

            {/* Tagline */}
            <p
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Eye size={16} />
                Ver CV
              </a>
              <a
                href={personal.cvUrl}
                download="CV-Elias-Prieto.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm bg-white/60 dark:bg-slate-800/60 glass transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Descargar CV
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm transition-all duration-200"
              >
                Contactar
              </button>
            </div>

            {/* Social */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-800 transition-all duration-200"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <TerminalCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
