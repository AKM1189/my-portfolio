import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaArrowUp } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { fadeInUp } from "./utils/motion";
import "./App.css";

export default function App() {
  const sectionRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const MotionSection = motion.section;
  const MotionButton = motion.button;

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        const matchedKey = Object.entries(sectionRefs.current).find(
          ([, el]) => el === mostVisible.target,
        )?.[0];

        if (matchedKey && (matchedKey !== activeSection || matchedKey === "hero")) {
          setActiveSection(matchedKey);
        }
      },
      {
        root: null,
        threshold: 0.4,
      },
    );

    const elements = Object.values(sectionRefs.current);
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 scroll-smooth font-[family-name:var(--font-sans)]">
      <div
        className={twMerge(
          "w-screen transition-all duration-500 fixed top-0 left-0 z-50",
          scrollY > 100
            ? "bg-gradient-to-r text-white from-slate-900 via-slate-800 to-teal-900 shadow-lg"
            : "bg-transparent",
        )}
      >
        <Navbar
          onNavClick={scrollToSection}
          scrolled={scrollY > 100}
          activeSection={activeSection}
        />
      </div>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
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

      <section className="lg:px-24 md:px-16 px-6">
        <MotionSection
          ref={(el) => (sectionRefs.current.about = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </MotionSection>

        <MotionSection
          ref={(el) => (sectionRefs.current.education = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Education />
        </MotionSection>

        <MotionSection
          ref={(el) => (sectionRefs.current.skills = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </MotionSection>

        <MotionSection
          ref={(el) => (sectionRefs.current.services = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </MotionSection>

        <MotionSection
          ref={(el) => (sectionRefs.current.projects = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </MotionSection>

        <MotionSection
          ref={(el) => (sectionRefs.current.contact = el)}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </MotionSection>
      </section>

      <Footer />

      <AnimatePresence>
        {scrollY > 240 && (
          <MotionButton
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed z-40 right-6 bottom-6 w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <FaArrowUp size={20} color="white" />
          </MotionButton>
        )}
      </AnimatePresence>
    </div>
  );
}
