import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";
import data from "../../data/projects.json";
import { fadeInScale, staggerContainer } from "../utils/motion";

const Projects = () => {
  const MotionDiv = motion.div;
  const { projects } = data;
  const githubProfileLink = useMemo(() => {
    const firstGithubLink = projects.find(
      (project) => project.githubLink,
    )?.githubLink;

    if (!firstGithubLink) return null;

    try {
      const url = new URL(firstGithubLink);
      const [username] = url.pathname.split("/").filter(Boolean);
      return username ? `${url.origin}/${username}` : firstGithubLink;
    } catch {
      return firstGithubLink;
    }
  }, [projects]);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Portfolio Highlights
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Crafted <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 md:text-base">
            A collection of professional work and personal experiments, focusing
            on clean code, user-centric design, and scalable architecture.
          </p>
        </header>

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </MotionDiv>

        {githubProfileLink && (
          <div className="mt-14 text-center">
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-primary"
            >
              View more projects on GitHub
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const MotionArticle = motion.article;
  const techList = useMemo(
    () =>
      project.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    [project.technologies],
  );

  return (
    <MotionArticle
      variants={fadeInScale}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {techList.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.previewLink ? (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3.5 py-2.5 text-sm! font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark sm:text-sm"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              Live Demo
            </a>
          ) : (
            <span />
          )}

          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm! font-semibold text-slate-700 transition-colors hover:border-primary/30 hover:text-primary sm:text-sm"
            >
              <FaGithub />
              Source Code
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </MotionArticle>
  );
};

export default Projects;
