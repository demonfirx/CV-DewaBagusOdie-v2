import { motion } from "motion/react";
import { portfolioData } from "../data";

const AnimatedTape = ({
  text,
  rotate,
  className,
  duration = 20,
  reverse = false,
}: {
  text: string;
  rotate: number;
  className: string;
  duration?: number;
  reverse?: boolean;
}) => {
  const repeatedText = Array(10).fill(text).join(" — ");

  return (
    <div
      className={`absolute w-[200vw] left-[-50vw] overflow-hidden whitespace-nowrap flex py-3 pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <motion.div
        className="flex whitespace-nowrap font-display font-black uppercase text-5xl tracking-tighter"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        <span className="px-4">{repeatedText}</span>
        <span className="px-4">{repeatedText}</span>
      </motion.div>
    </div>
  );
};

export function Hero() {
  const { personalInfo } = portfolioData;
  const nameParts = personalInfo.name.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Tapes - ODIE branding ribbons */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30">
        <AnimatedTape
          text="ODIE"
          rotate={-15}
          className="bg-yellow-400 text-black shadow-xl -mt-40"
          duration={30}
        />
        <AnimatedTape
          text="ODIE"
          rotate={20}
          className="bg-black text-white dark:bg-white dark:text-black border-y border-white/20 dark:border-black/20 mt-10"
          duration={35}
          reverse
        />
        <AnimatedTape
          text="ODIE"
          rotate={-5}
          className="bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 mt-64"
          duration={40}
        />
        <AnimatedTape
          text="ODIE"
          rotate={12}
          className="bg-yellow-400/80 text-black shadow-lg mt-[28rem]"
          duration={25}
          reverse
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 text-sm font-bold tracking-widest uppercase border border-yellow-400/20 backdrop-blur-sm">
            Hi, I'm
          </span>

          {/* Name - oversized display typography */}
          <h1 className="font-display font-black uppercase tracking-tighter leading-[0.85] text-6xl md:text-8xl lg:text-9xl">
            {/* First two words solid white */}
            <span className="block text-black dark:text-white">
              {nameParts[0]} {nameParts[1]}
            </span>
            {/* Last two words outlined orange */}
            <span
              className="block"
              style={{
                color: 'transparent',
                WebkitTextStroke: '3px #facc15',
                stroke: '#facc15',
              }}
            >
              {nameParts[2]} {nameParts[3]}
            </span>
          </h1>

          {/* Role */}
          <p className="text-yellow-400 font-display font-bold uppercase tracking-[0.2em] text-sm md:text-base">
            {personalInfo.role}
          </p>

          {/* Headline */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            {personalInfo.headline}
          </p>

          {/* Supporting Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-4">
            {[
              { value: "3+", label: "Years Professional Experience" },
              { value: "20+", label: "Completed Projects" },
              { value: "∞", label: "Cross-Functional Strength" },
              { value: "→", label: "Growing Focus on Digital Product" },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-display font-black text-3xl md:text-4xl text-yellow-400">{metric.value}</p>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 leading-tight">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-black text-black dark:border-white dark:text-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-zinc-400"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}