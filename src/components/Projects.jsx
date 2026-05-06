import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaBolt,
  FaCode,
  FaDatabase,
  FaGithub,
  FaLayerGroup,
  FaShieldHalved,
  FaSignal,
  FaStar,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";
import data from "../../data/projects.json";
import SectionTitle from "./SectionTitle";
import { fadeInScale, staggerContainer } from "../utils/motion";

const featureIcons = {
  bolt: FaBolt,
  code: FaCode,
  database: FaDatabase,
  layout: FaLayerGroup,
  shield: FaShieldHalved,
  signal: FaSignal,
  sparkles: FaStar,
  users: FaUsers,
};

const featureToneStyles = {
  primary: {
    card: "border-app-primary/40 bg-app-panel-dark",
    icon: "text-app-primary",
    stripe: "bg-app-primary",
  },
  tertiary: {
    card: "border-emerald-400/25 bg-app-panel-dark",
    icon: "text-emerald-300",
    stripe: "bg-emerald-300",
  },
  muted: {
    card: "border-white/10 bg-app-panel-dark",
    icon: "text-slate-300",
    stripe: "bg-slate-400",
  },
};

const getTechnologies = (project) =>
  project.technologies
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const Projects = () => {
  const { projects } = data;
  const [activeProject, setActiveProject] = useState(null);
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <>
      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="px-1 py-4 sm:px-2 sm:py-6"
      >
        <SectionTitle
          eyebrow="Portfolio archive"
          title="Featured"
          highlight="Projects"
          subtitle="Selected work across interfaces, systems, and product-focused builds."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const technologies = getTechnologies(project);

            return (
              <MotionArticle
                key={`${project.title}-${index}`}
                variants={fadeInScale}
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-[15px] bg-app-panel transition duration-300 hover:-translate-y-1 hover:bg-app-panel-alt/90"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-app-panel-alt">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-stretch transition duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-app-panel-deep via-app-panel-deep/70 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.18em] text-app-primary">
                      {technologies.slice(0, 5).map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className="flex gap-2 items-center"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-300 min-h-[112px]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-end gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex min-w-[8.5rem] items-center justify-center gap-2 rounded-lg border border-app-primary px-4 py-2.5 text-[13px] font-semibold text-white"
                      >
                        <FaGithub className="text-xs" />
                        Source Code
                      </a>
                    )}
                    {project.previewLink && (
                      <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex min-w-[8.5rem] items-center justify-center gap-2 rounded-lg bg-[image:var(--app-primary-gradient)] px-4 py-2.5 text-[13px] font-semibold text-slate-950"
                      >
                        <FaArrowUpRightFromSquare className="text-xs" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </MotionArticle>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <a
            href="https://github.com/AKM1189"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium !text-app-muted bg-clip-text hover:opacity-80 transition"
          >
            Explore more on GitHub
          </a>
        </div>
      </MotionDiv>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const MotionDiv = motion.div;
  const technologies = getTechnologies(project);
  const features = project.features || [];
  const tagline =
    project.tagline ||
    "Product-focused implementation with clean user experience and thoughtful engineering decisions.";

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 px-4 py-4 backdrop-blur-md sm:items-center sm:p-8"
      onClick={onClose}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.35rem] border border-white/8 bg-app-panel shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] md:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-app-panel-alt text-base text-slate-300 transition duration-300 hover:bg-app-panel-alt-hover hover:text-white"
          aria-label="Close project details"
        >
          <FaXmark />
        </button>

        <div className="flex w-full flex-col bg-app-panel-dark md:w-[45%]">
          <div className="relative aspect-[16/10] overflow-hidden bg-app-panel-alt md:aspect-square">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-app-panel-dark via-transparent to-transparent" />
          </div>

          <div className="space-y-7 p-6 sm:p-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={`${project.title}-${tech}-modal`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-app-panel-alt px-3 py-2 text-sm text-slate-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-app-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {project.previewLink && (
                <ModalActionLink
                  href={project.previewLink}
                  primary
                  icon={<FaArrowUpRightFromSquare className="text-xs" />}
                  label={"View Live Demo"}
                />
              )}
              <ModalActionLink
                href={project.githubLink}
                icon={<FaGithub />}
                label="GitHub Repository"
              />
            </div>
          </div>
        </div>

        <div className="hide-scrollbar w-full overflow-y-auto bg-app-panel md:w-[55%]">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <header className="mb-10">
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                {tagline}
              </p>
            </header>

            <div className="space-y-10">
              <section className="space-y-4">
                <h3 className="flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl text-white">
                  <FaCode className="text-app-primary" />
                  Overview
                </h3>
                <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  {project.description}
                </p>
              </section>

              <section className="space-y-5">
                <h3 className="flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl text-white">
                  <FaStar className="text-app-primary" />
                  Key Features
                </h3>
                <div className="grid gap-4">
                  {features.map((feature, index) => {
                    const Icon = featureIcons[feature.icon] || FaStar;
                    const tone =
                      featureToneStyles[feature.tone] ||
                      featureToneStyles.muted;

                    return (
                      <div
                        key={`${project.title}-feature-${index}`}
                        className={`relative overflow-hidden rounded-xl border p-4 pl-5 ${tone.card}`}
                      >
                        <span
                          className={`absolute inset-y-0 left-0 w-1 ${tone.stripe}`}
                        />
                        <div className="flex items-start gap-4">
                          <Icon className={`mt-0.5 text-base ${tone.icon}`} />
                          <div>
                            <h4 className="font-semibold text-white">
                              {feature.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>,
    document.body,
  );
};

const ModalActionLink = ({ href, icon, label, primary = false }) => {
  const sharedClassName =
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300";

  if (!href) {
    return (
      <span
        className={`${sharedClassName} cursor-not-allowed border border-white/10 bg-app-panel-alt text-slate-500`}
      >
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? `${sharedClassName} bg-[image:var(--app-primary-gradient)] text-slate-950 shadow-[0_18px_40px_-20px_rgba(48,197,210,0.7)] hover:-translate-y-0.5`
          : `${sharedClassName} border border-white/12 bg-transparent text-white hover:bg-app-panel-alt`
      }
    >
      {icon}
      {label}
    </a>
  );
};

export default Projects;
