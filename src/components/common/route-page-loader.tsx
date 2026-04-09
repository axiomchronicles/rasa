type RoutePageLoaderProps = {
  label?: string;
};

export function RoutePageLoader({ label = "Loading page" }: RoutePageLoaderProps) {
  return (
    <div className="min-h-[55vh] w-full bg-surface text-on-surface flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-outline-variant/50 border-t-primary animate-spin" />
        <p className="font-label text-[10px] uppercase tracking-[0.16em] font-bold text-on-surface-variant">
          {label}
        </p>
      </div>
    </div>
  );
}
