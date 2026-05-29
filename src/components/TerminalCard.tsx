import { useEffect, useState } from 'react';

type Line = { type: 'prompt' | 'output'; text: string };

const terminalLines: Line[] = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output',  text: 'DevOps Analyst II — Cloud Operations, Incident Response & Cybersecurity.' },
  { type: 'prompt', text: 'cat focus.txt' },
  { type: 'output',  text: 'Monitoring 24×7, production troubleshooting, automation, runbooks and service reliability.' },
  { type: 'prompt', text: 'ls skills/' },
  { type: 'output',  text: 'Azure  AWS  Datadog  Site24x7  PagerDuty  PowerShell  Python  Security+' },
  { type: 'prompt', text: 'cat certifications.txt' },
  { type: 'output',  text: 'AZ-900  ·  CompTIA Security+  ·  Google Cybersecurity Professional' },
];

export default function TerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), 200 + i * 520));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-[26rem] rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-slate-700/60 select-none">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2d2d2d]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-slate-500 font-mono">elias@ops — bash</span>
      </div>

      {/* Body */}
      <div className="bg-[#1a1a1a] px-5 pt-4 pb-5 font-mono text-sm min-h-[230px] space-y-0.5">
        {terminalLines.slice(0, visible).map((line, i) =>
          line.type === 'prompt' ? (
            <div key={i} className="flex items-baseline gap-1.5 flex-wrap pt-1">
              <span className="text-cyan-400 font-semibold">elias@ops</span>
              <span className="text-slate-500">~</span>
              <span className="text-blue-400">$</span>
              <span className="text-slate-200 break-all">{line.text}</span>
            </div>
          ) : (
            <div key={i} className="pl-4 pb-1.5">
              <span className="text-emerald-400 leading-snug">{line.text}</span>
            </div>
          )
        )}

        {/* Blinking cursor */}
        {visible >= terminalLines.length && (
          <div className="flex items-baseline gap-1.5 pt-1">
            <span className="text-cyan-400 font-semibold">elias@ops</span>
            <span className="text-slate-500">~</span>
            <span className="text-blue-400">$</span>
            <span className="w-2 h-[0.9em] bg-slate-300 animate-pulse inline-block align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
