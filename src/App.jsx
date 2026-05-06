import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaArrowUp } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { fadeInUp } from "./utils/motion";
import "./App.css";
import Experience from "./components/Experience";

const sections = [
  { key: "hero", component: Hero },
  { key: "about", component: About },
  { key: "skills", component: Skills },
  { key: "projects", component: Projects },
  { key: "experiences", component: Experience },
  { key: "contact", component: Contact },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const MotionSection = motion.section;
  const MotionButton = motion.button;

  const scrollToSection = (section) => {
    const target =
      section === "hero"
        ? 0
        : (document.getElementById(section)?.offsetTop ?? 0);
    window.scrollTo({ top: target, behavior: "smooth" });
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

        if (mostVisible.target.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: 0.35 },
    );

    const elements = sections
      .map(({ key }) => document.getElementById(key))
      .filter(Boolean);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-app-bg text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--app-shell-overlay)]" />

      <div className="relative z-10">
        <header
          className={twMerge(
            "fixed inset-x-0 top-0 z-20 px-4 pt-3 transition-all duration-300 sm:px-6 lg:px-10",
            scrollY > 16 ? "backdrop-blur-sm" : "",
          )}
        >
          <div className="mx-auto max-w-[72rem]">
            <Navbar
              onNavClick={scrollToSection}
              activeSection={activeSection}
            />
          </div>
        </header>

        <main className="relative z-10 px-4 pb-8 pt-24 sm:px-6 sm:pt-26 lg:px-10">
          <div className="mx-auto max-w-[72rem] space-y-6">
            {sections.map(({ key, component }) => {
              const Component = component;
              const isHero = key === "hero";

              return (
                <MotionSection
                  key={key}
                  id={key}
                  variants={isHero ? undefined : fadeInUp}
                  initial={isHero ? undefined : "hidden"}
                  whileInView={isHero ? undefined : "show"}
                  viewport={isHero ? undefined : { once: true, amount: 0.2 }}
                  className={isHero ? "pt-4" : ""}
                >
                  <Component onNavigate={scrollToSection} />
                </MotionSection>
              );
            })}
          </div>
        </main>

        <Footer />
      </div>

      <AnimatePresence>
        {scrollY > 260 && (
          <MotionButton
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--app-primary-gradient)] text-slate-950 shadow-[0_20px_44px_-18px_rgba(54,199,255,0.55)] transition-transform duration-300 hover:-translate-y-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <FaArrowUp size={16} />
          </MotionButton>
        )}
      </AnimatePresence>
    </div>
  );
}
