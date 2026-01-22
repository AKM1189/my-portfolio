import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';

import "./App.css";
import Education from "./components/Education";

export default function App() {
  const sectionRefs = useRef({});

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <MantineProvider>
      <div className="bg-white text-black scroll-smooth">
      <section className="h-svh bg-[linear-gradient(75deg,rgba(79,70,229,1)_22%,rgba(252,252,252,1)_22%)]">
        <Navbar onNavClick={scrollToSection} />

        <section ref={(el) => (sectionRefs.current.hero = el)}>
          <Hero onAboutClick={() => scrollToSection('about')}/>
        </section>
      </section>


     <section className="lg:px-32 md:px-20 px-10">
       <section ref={(el) => (sectionRefs.current.about = el)}>
        <About />
      </section>

       <section ref={(el) => (sectionRefs.current.education = el)}>
        <Education />
      </section>

      <section ref={(el) => (sectionRefs.current.skills = el)}>
        <Skills />
      </section>

      <section ref={(el) => (sectionRefs.current.services = el)}>
        <Services />
      </section>

      <section ref={(el) => (sectionRefs.current.projects = el)}>
        <Projects />
      </section>
     </section>

      <section ref={(el) => (sectionRefs.current.contact = el)}>
        <Contact />
      </section>

      <Footer />
    </div>
    </MantineProvider>
  );
}
