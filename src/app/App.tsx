import React from "react";
import { ThemeProvider } from "./providers";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300 antialiased font-sans selection:bg-yellow-400 selection:text-black" id="top">
        <Navbar />
        <main>
          <Hero />
          <div className="bg-diagonal-pattern relative">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}