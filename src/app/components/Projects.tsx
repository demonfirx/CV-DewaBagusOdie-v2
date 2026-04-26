import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";

const INITIAL_DISPLAY_COUNT = 5;

export function Projects() {
  const { intro, items } = portfolioData.projects;
  const [showAll, setShowAll] = useState(false);

  const hasMore = items.length > INITIAL_DISPLAY_COUNT;
  const visibleItems = showAll ? items : items.slice(0, INITIAL_DISPLAY_COUNT);
  const hiddenCount = items.length - INITIAL_DISPLAY_COUNT;

  return (
    <section id="projects" className="py-24 md:py-40 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
            <SectionTitleAdaptive
              solidWord="MY"
              outlineWord="PROJECTS."
              className="text-6xl md:text-8xl"
            />
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg font-bold border-b-2 border-black dark:border-white pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-colors">
              View All GitHub <ArrowUpRight size={20} />
            </a>
          </div>
          <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400 mb-20 leading-relaxed">
            {intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((project, index) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index >= INITIAL_DISPLAY_COUNT ? (index - INITIAL_DISPLAY_COUNT) * 0.1 : (index % 2) * 0.2 }}
                  className={`group block ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6 border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-yellow-400 transition-colors duration-300">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 bg-yellow-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
                        <ArrowUpRight size={20} className="stroke-[3]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-display text-3xl font-black tracking-tight mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-base">
                    {project.description}
                  </p>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mt-20"
            >
              <motion.button
                onClick={() => setShowAll((prev) => !prev)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative inline-flex items-center gap-3 px-10 py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-300 transition-all duration-300 cursor-pointer"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp size={18} className="stroke-[3] transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    Show All Projects
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-black text-yellow-400 text-xs font-black">
                      +{hiddenCount}
                    </span>
                    <ChevronDown size={18} className="stroke-[3] transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}