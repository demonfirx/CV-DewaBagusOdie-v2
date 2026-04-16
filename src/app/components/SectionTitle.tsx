/**
 * Editorial section title with solid first word + outlined second word.
 * Uses Montserrat Black for bold grotesk display treatment.
 */
export function SectionTitle({
  solidWord,
  outlineWord,
  className = "",
}: {
  solidWord: string;
  outlineWord: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-black uppercase tracking-tighter leading-[0.9] ${className}`}
    >
      <span className="block text-foreground dark:text-white">{solidWord}</span>
      <span 
        className="block" 
        style={{
          color: 'transparent',
          WebkitTextStroke: '2.5px #facc15',
          stroke: '#facc15',
        }}
      >
        {outlineWord}
      </span>
    </h2>
  );
}

/**
 * Variant where the outline color adapts to light/dark mode.
 */
export function SectionTitleAdaptive({
  solidWord,
  outlineWord,
  className = "",
}: {
  solidWord: string;
  outlineWord: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-black uppercase tracking-tighter leading-[0.9] ${className}`}
    >
      <span className="block text-foreground dark:text-white">{solidWord}</span>
      <span
        className="block"
        style={{
          color: 'transparent',
          WebkitTextStroke: '2.5px #facc15',
          stroke: '#facc15',
        }}
      >
        {outlineWord}
      </span>
    </h2>
  );
}