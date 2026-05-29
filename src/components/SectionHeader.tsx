interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
