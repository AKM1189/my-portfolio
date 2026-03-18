import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import data from "../../data/projects.json";
import SectionTitle from "./SectionTitle";
import { fadeInScale, fadeInUp, staggerContainer } from "../utils/motion";

const Projects = () => {
  const MotionDiv = motion.div;
  const { projects } = data;
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          highlight="Featured Projects"
          subtitle="Selected work that blends problem solving, product thinking, and solid implementation details."
        />

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </MotionDiv>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const MotionArticle = motion.article;
  const techList = useMemo(
    () =>
      project.technologies
        .split(",")
        .map((item) => item.trim())
        .slice(0, 3),
    [project.technologies],
  );

  return (
    <MotionArticle
      variants={fadeInScale}
      className="group relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-[1px] shadow-[0_22px_45px_-30px_rgba(3,105,161,0.85)]"
    >
      <div className="h-full rounded-2xl bg-white overflow-hidden">
        <button
          type="button"
          onClick={onOpen}
          className="text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-700">
              {String(index).padStart(2, "0")}
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {techList.map((tech) => (
                <span
                  key={`${project.title}-${tech}`}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-slate-950/60 text-cyan-50 rounded-md border border-cyan-200/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-cyan-700 transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
              View details
              <span className="group-hover:translate-x-1 transition-transform">
                ?
              </span>
            </div>
          </div>
        </button>

        <div className="px-6 pb-6 mt-auto flex items-center gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm gap-2 px-3.5 py-2 border border-slate-200 rounded-lg text-slate-700 hover:border-cyan-500/50 hover:text-cyan-700 transition-colors"
            >
              <FaGithub />
              Code
            </a>
          )}
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500 transition-colors"
            >
              <FaArrowUpRightFromSquare />
              Live
            </a>
          )}
        </div>
      </div>
    </MotionArticle>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const MotionDiv = motion.div;
  const MotionH3 = motion.h3;
  const MotionP = motion.p;
  const technologies = project.technologies
    .split(",")
    .map((item) => item.trim());

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] bg-slate-900/70 backdrop-blur-sm p-4 md:p-10 overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-2xl"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 md:h-72 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
            aria-label="Close project details"
          >
            x
          </button>
        </div>

        <div className="p-6 md:p-8">
          <MotionH3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold text-slate-800"
          >
            {project.title}
          </MotionH3>

          <MotionP
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-slate-600 leading-relaxed"
          >
            {project.description}
          </MotionP>

          <div className="mt-6">
            <p className="font-semibold text-slate-800 mb-3">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={`${project.title}-${tech}-modal`}
                  className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 text-teal-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <FaGithub />
                View Code
              </a>
            )}
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <FaArrowUpRightFromSquare />
                Live Preview
              </a>
            )}
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Projects;
