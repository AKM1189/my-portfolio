import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { MantineProvider } from "@mantine/core";

import "./App.css";
import Education from "./components/Education";
import { useWindowScroll } from "@mantine/hooks";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp } from "react-icons/fa6";

export default function App() {
  const sectionRefs = useRef({});
  const [scroll, scrollTo] = useWindowScroll();
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        const matchedKey = Object.entries(sectionRefs.current).find(
          ([, el]) => el === mostVisible.target
        )?.[0];
        if (matchedKey && (matchedKey !== activeSection || matchedKey === "hero")) {
          setActiveSection(matchedKey);
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    const elements = Object.values(sectionRefs.current);
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MantineProvider>
      <div className="bg-slate-50 text-slate-900 scroll-smooth font-[family-name:var(--font-sans)]">
        {/* Fixed navbar - outside hero so it stays viewport-fixed on mobile */}
        <div
          className={twMerge(
            "w-screen transition-all duration-500 fixed top-0 left-0 z-50",
            scroll.y > 100
              ? "bg-gradient-to-r text-white from-slate-900 via-slate-800 to-teal-900 shadow-lg"
              : "bg-transparent",
          )}
        >
          <Navbar
            onNavClick={scrollToSection}
            scrolled={scroll.y > 100}
            activeSection={activeSection}
          />
        </div>

        {/* Hero section with gradient background */}
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            <section ref={(el) => (sectionRefs.current.hero = el)}>
              <Hero onAboutClick={() => scrollToSection("about")} />
            </section>
          </div>
        </section>

        {/* Content sections */}
        <section className="lg:px-24 md:px-16 px-6">
          <Fade>
            <section ref={(el) => (sectionRefs.current.about = el)}>
              <About />
            </section>
          </Fade>

          <section ref={(el) => (sectionRefs.current.education = el)}>
            <Fade>
              <Education />
            </Fade>
          </section>

          <section ref={(el) => (sectionRefs.current.skills = el)}>
            <Fade>
              <Skills />
            </Fade>
          </section>

          <section ref={(el) => (sectionRefs.current.services = el)}>
            <Fade>
              <Services />
            </Fade>
          </section>

          <section ref={(el) => (sectionRefs.current.projects = el)}>
            <Fade>
              <Projects />
            </Fade>
          </section>

          <section ref={(el) => (sectionRefs.current.contact = el)}>
            <Fade>
              <Contact />
            </Fade>
          </section>
        </section>

        <Footer />

        {/* Back to top button */}
        <button
          className="fixed z-40 right-6 bottom-6 w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={() => scrollTo({ y: 0 })}
          aria-label="Back to top"
        >
          <FaArrowUp size={20} color="white" />
        </button>
      </div>
    </MantineProvider>
  );
}
