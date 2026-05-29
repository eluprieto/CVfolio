import { Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { personal, social } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              {personal.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">{personal.shortName}</p>
              <p className="text-xs text-slate-500">{personal.title}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-all duration-200"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-slate-800 transition-all duration-200"
            >
              <LinkedInIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-all duration-200"
            >
              {personal.email}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            © {year} {personal.shortName}
            <span className="flex items-center gap-1">
              · Hecho con <Heart size={11} className="text-rose-500 fill-rose-500" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
