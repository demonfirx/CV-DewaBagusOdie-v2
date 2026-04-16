import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolioData } from "../data";
import { SectionTitleAdaptive } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-white dark:bg-black relative overflow-hidden">
      {/* Background large ODIE text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black uppercase text-zinc-50 dark:text-zinc-950 select-none pointer-events-none tracking-tighter w-full text-center whitespace-nowrap overflow-hidden">
        {portfolioData.personalInfo.shortName}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 block">
            Let's Connect
          </span>
          <SectionTitleAdaptive
            solidWord="CONTACT"
            outlineWord="ME."
            className="text-6xl md:text-8xl mb-8"
          />
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {portfolioData.contact.copy}
          </p>
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-bold text-xs uppercase tracking-widest mb-12">
            Available for Opportunities
          </div>
          
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pb-8 border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 transition-colors duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black dark:group-hover:bg-yellow-400 dark:group-hover:text-black transition-all duration-300">
              <ArrowRight size={28} className="stroke-[3] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <p className="font-display text-2xl md:text-4xl font-black tracking-tight group-hover:text-yellow-400 transition-colors">
                {portfolioData.personalInfo.email}
              </p>
            </div>
          </a>

          <div className="flex flex-wrap gap-8 pt-12">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-base font-bold hover:text-yellow-400 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-base font-bold hover:text-yellow-400 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href={`https://wa.me/${portfolioData.personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-base font-bold hover:text-yellow-400 transition-colors"
            >
              <Phone size={20} />
              WhatsApp
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="flex items-center gap-3 text-base font-bold hover:text-yellow-400 transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}