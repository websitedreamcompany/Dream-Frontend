const Skeleton = ({ className }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
    {/* This is the moving light bar that creates the "shimmer" */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
  </div>
);



export default Skeleton;