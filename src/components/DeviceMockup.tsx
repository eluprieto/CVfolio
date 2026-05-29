interface Props {
  color: string;   // Tailwind gradient classes, e.g. "from-blue-600 to-cyan-500"
  title: string;
}

export default function DeviceMockup({ color, title }: Props) {
  return (
    <div className="w-full overflow-hidden bg-[#1a1a1a] rounded-t-2xl border-b border-slate-700/30">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#2a2a2a]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-3 px-3 py-0.5 rounded bg-[#3a3a3a] text-[11px] text-slate-500 font-mono truncate">
          localhost:3000
        </div>
      </div>

      {/* Screen area */}
      <div className={`h-24 bg-gradient-to-br ${color} flex items-center justify-center`}>
        <span className="text-white/20 text-xs font-bold tracking-[0.25em] uppercase">
          {title}
        </span>
      </div>
    </div>
  );
}
