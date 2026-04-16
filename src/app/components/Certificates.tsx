import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";

export function Certificates() {
  const { intro, items } = portfolioData.certificates;

  return (
    <section id="certificates" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end gap-6 mb-6">
            <SectionTitleAdaptive
              solidWord="MY"
              outlineWord="CERTS."
              className="text-5xl md:text-7xl"
            />
            <div className="flex-1 h-1 bg-gradient-to-r from-yellow-400 to-transparent mb-4" />
          </div>
          <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed">
            {intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 p-6 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-black" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase bg-zinc-100 dark:bg-zinc-900 px-3 py-1">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-black tracking-tight mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}