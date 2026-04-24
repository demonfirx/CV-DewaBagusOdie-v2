import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { portfolioData } from "../data";

const navLinks = [
  { name: "About", target: "about" },
  { name: "Experience", target: "experience" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Certificates", target: "certificates" },
  { name: "Contact", target: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button onClick={scrollToTop} className="text-2xl font-display font-black tracking-tighter cursor-pointer bg-transparent border-none">
          {portfolioData.personalInfo.shortName}
          <span className="text-yellow-400">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.target)}
              className="text-sm font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors uppercase tracking-widest bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800 p-6 flex flex-col space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => { scrollTo(link.target); setIsOpen(false); }}
              className="text-lg font-medium hover:text-yellow-500 dark:hover:text-yellow-400 uppercase tracking-widest bg-transparent border-none cursor-pointer text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}