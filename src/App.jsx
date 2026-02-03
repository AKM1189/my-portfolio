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

import { Badge, MantineProvider } from '@mantine/core';

import "./App.css";
import Education from "./components/Education";
import { useWindowScroll } from "@mantine/hooks";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp } from "react-icons/fa6";

export default function App() {
  const sectionRefs = useRef({});
  const [scroll, scrollTo] = useWindowScroll();

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
        <div className="">
          <Navbar onNavClick={scrollToSection} />
        </div>

         <div className={twMerge(
          'w-screen  h-20 transition-all duration-500 fixed z-100',
          scroll.y> 300 ? ' bg-white top-0 left-0 shadow-md': '-top-32'
         )}>
          <Navbar onNavClick={scrollToSection} />
        </div>

        <section ref={(el) => (sectionRefs.current.hero = el)}>
          <Hero onAboutClick={() => scrollToSection('about')}/>
        </section>
      </section>


     <section className="lg:px-32 md:px-20 px-10">
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

      <div className="w-10 h-10 fixed z-100 right-10 bottom-10 flex items-center justify-center bg-primary rounded-full"
      onClick={() => scrollTo({y: 0})}><FaArrowUp size={20} color="white"/></div>
    </div>
    </MantineProvider>
  );
}
