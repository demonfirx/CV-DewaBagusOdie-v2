import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";

export function Experience() {
  const { summary, jobs } = portfolioData.experienceData;

  return (
    <section id="experience" className="py-24 md:py-32 bg-white dark:bg-black relative border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitleAdaptive
                solidWord="EXPERI"
                outlineWord="ENCE."
                className="text-5xl md:text-6xl mb-6"
              />
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                {summary}
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="space-y-12">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300"
                >
                  {/* Company & Period Badge */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 font-bold text-sm">
                      <Briefcase className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-4 leading-tight">
                    {job.role}
                  </h3>

                  <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Key Points as Badges */}
                  <div className="flex flex-wrap gap-2">
                    {job.bullets.map((bullet, idx) => (
                      <div 
                        key={idx} 
                        className="text-sm px-3 py-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}