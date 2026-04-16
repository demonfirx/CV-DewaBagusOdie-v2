import { motion } from "motion/react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";

export function Skills() {
  const { intro, groups } = portfolioData.skills;

  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <SectionTitleAdaptive
              solidWord="SKILLS &"
              outlineWord="EXPERTISE."
              className="text-5xl md:text-7xl inline-block"
            />
          </div>
          <p className="max-w-3xl mx-auto text-center text-base text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed">
            {intro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-yellow-400 dark:hover:border-yellow-400 transition-colors duration-300"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-widest mb-6 pb-4 border-b-2 border-yellow-400 flex items-center justify-between">
                  {group.title}
                  <span className="text-yellow-400 font-black text-2xl">{(index + 1).toString().padStart(2, '0')}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-zinc-100 text-zinc-800 dark:bg-black dark:text-zinc-200 font-medium text-sm border border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}