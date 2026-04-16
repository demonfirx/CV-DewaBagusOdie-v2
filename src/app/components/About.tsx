import { motion } from "motion/react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";
import { Code2, Palette, FileText, Users } from "lucide-react";
import { useState } from "react";

export function About() {
  const highlights = [
    { icon: Code2, label: "Frontend Dev", color: "text-yellow-500" },
    { icon: Palette, label: "UI/UX Design", color: "text-yellow-500" },
    { icon: FileText, label: "Documentation", color: "text-yellow-500" },
    { icon: Users, label: "HR Support", color: "text-yellow-500" },
  ];

  const stackTools = [
    { name: "JavaScript", color: "bg-[#F7DF1E]", textColor: "text-black", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "JS" },
    { name: "React", color: "bg-[#61DAFB]", textColor: "text-black", link: "https://react.dev", icon: "⚛" },
    { name: "Tailwind", color: "bg-[#06B6D4]", textColor: "text-white", link: "https://tailwindcss.com", icon: "↗" },
    { name: "Python", color: "bg-[#4B8BBE]", textColor: "text-white", link: "https://www.python.org", icon: "🐍" },
    { name: "Next.js", color: "bg-white", textColor: "text-black", link: "https://nextjs.org", icon: "▲" },
    { name: "TypeScript", color: "bg-[#3178C6]", textColor: "text-white", link: "https://www.typescriptlang.org", icon: "TS" },
    { name: "Node.js", color: "bg-[#68A063]", textColor: "text-white", link: "https://nodejs.org", icon: "node" },
    { name: "MongoDB", color: "bg-[#47A248]", textColor: "text-white", link: "https://www.mongodb.com", icon: "🍃" },
    { name: "PostgreSQL", color: "bg-[#336791]", textColor: "text-white", link: "https://www.postgresql.org", icon: "🐘" },
    { name: "PHP", color: "bg-[#777BB4]", textColor: "text-white", link: "https://www.php.net", icon: "php" },
    { name: "Laravel", color: "bg-[#FF2D20]", textColor: "text-white", link: "https://laravel.com", icon: "L" },
    { name: "Docker", color: "bg-[#2496ED]", textColor: "text-white", link: "https://www.docker.com", icon: "🐳" },
    { name: "Git", color: "bg-[#F05032]", textColor: "text-white", link: "https://git-scm.com", icon: "◇" },
    { name: "Figma", color: "bg-[#F24E1E]", textColor: "text-white", link: "https://www.figma.com", icon: "F" },
    { name: "GraphQL", color: "bg-[#E10098]", textColor: "text-white", link: "https://graphql.org", icon: "◈" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <SectionTitleAdaptive
              solidWord="ABOUT"
              outlineWord="ME."
              className="text-5xl md:text-7xl"
            />
            <div className="h-1 w-24 bg-yellow-400" />
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="font-bold text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {portfolioData.about.copy.map((paragraph, i) => (
              <p key={i} className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-lg font-medium">{portfolioData.personalInfo.location}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">Status</p>
                <p className="text-lg font-medium text-yellow-500 dark:text-yellow-400">Available</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 w-full aspect-square md:aspect-[4/5] bg-[#1a1a1a] relative p-6 md:p-8 flex flex-col border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            {/* Diagonal Stripe Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
            
            {/* Title */}
            <h3 className="text-lg md:text-xl font-display font-black text-zinc-400 mb-4 z-10">
              // STACK & TOOLS
            </h3>

            {/* Stack Tools Grid with 3D Hover Animation */}
            <div className="grid grid-cols-4 gap-3 z-10 flex-1">
              {stackTools.map((tool, idx) => (
                <motion.a
                  key={idx}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (idx * 0.05),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotateY: Math.random() * 20 - 10,
                    rotateX: Math.random() * 20 - 10,
                    z: 50,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  className={`aspect-square flex flex-col items-center justify-center ${tool.color} ${tool.textColor} rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group`}
                  style={{ 
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Icon/Logo */}
                  <span className="text-2xl md:text-3xl font-black mb-1 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </span>
                  {/* Name */}
                  <span className="text-[0.5rem] md:text-xs font-bold opacity-90">
                    {tool.name}
                  </span>
                  {/* Arrow indicator */}
                  <span className="absolute top-2 right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-yellow-400 z-20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-yellow-400 z-20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-yellow-400 z-20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-yellow-400 z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}