import { portfolioData } from "../data";

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-display font-black uppercase tracking-tighter">
            {portfolioData.personalInfo.shortName}
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-2">
            {portfolioData.footer.copy}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-yellow-400 transition-colors bg-transparent border-none cursor-pointer text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}