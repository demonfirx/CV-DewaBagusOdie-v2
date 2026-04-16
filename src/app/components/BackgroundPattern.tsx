export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none opacity-[0.03] dark:opacity-[0.05] text-black dark:text-white">
      <svg width="100%" height="100%">
        <pattern id="diagonal-stripe" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="10" height="40" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diagonal-stripe)" />
      </svg>
    </div>
  );
}
