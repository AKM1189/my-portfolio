import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MyInfo } from "../constants";
import { fadeInScale, fadeInUp, staggerContainer } from "../utils/motion";

const specialties = ["React.js", "TypeScript", "Express.js", "PostgreSQL"];

const featureCards = [
  {
    eyebrow: "Featured project",
    title: "Movie Ticketing System",
    description:
      "A real-time movie ticketing system with live seat selection and synchronized booking.",
  },
];

const Hero = ({ onNavigate }) => {
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const MotionH1 = motion.h1;
  const MotionArticle = motion.article;

  return (
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="rounded-[1.75rem] bg-app-surface px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pt-4">
          <MotionP
            variants={fadeInUp}
            className="text-[10px] font-semibold uppercase tracking-[0.28em] text-app-primary"
          >
            Available for new projects
          </MotionP>
          <MotionH1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-[0.95] text-white sm:text-6xl"
          >
            {MyInfo.name}
          </MotionH1>
          <MotionP
            variants={fadeInUp}
            className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-400"
          >
            Full-Stack Engineer
          </MotionP>
          <MotionP
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base"
          >
            Building polished full-stack products with clean architecture,
            thoughtful interfaces, and a strong focus on practical delivery.
          </MotionP>

          <MotionDiv variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 text-white! rounded-full bg-[image:var(--app-primary-gradient)] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              onClick={() => onNavigate("projects")}
            >
              View My Work
              <FaArrowRight className="text-xs" />
            </button>
            <button
              className="rounded-full bg-app-panel-alt px-5 py-3 text-sm font-semibold text-white transition-colors transition-transform duration-300 hover:-translate-y-0.5"
              onClick={() => onNavigate("contact")}
            >
              Contact Me
            </button>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="mt-16">
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
              Specialized in
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-app-chip px-3 py-1.5 text-[11px] font-medium text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>

        <div className="flex flex-col justify-end gap-4">
          <div className="">
            {featureCards.map((card, index) => (
              <MotionArticle
                key={card.title}
                variants={fadeInScale}
                className={`rounded-[1.35rem] ${
                  index === 0 ? "bg-app-panel" : "bg-app-panel-alt"
                } p-6`}
              >
                <p className="text-[10px] uppercase tracking-[0.26em] text-app-primary">
                  {card.eyebrow}
                </p>
                <h2 className="mt-4 text-xl font-bold text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </MotionArticle>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <MotionArticle
              variants={fadeInScale}
              className="rounded-[1.35rem] bg-app-panel p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.26em] text-app-primary">
                Technical excellence
              </p>
              <h2 className="mt-4 text-xl font-bold text-white">
                Modern Systems Expertise
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Strong across application architecture, integration-heavy
                builds, and production-ready front-end systems.
              </p>
            </MotionArticle>

            <MotionArticle
              variants={fadeInScale}
              className={`rounded-[1.35rem] bg-app-panel p-6`}
            >
              <p className="text-[10px] uppercase tracking-[0.26em] text-app-primary">
                Core strength
              </p>
              <h2 className="mt-4 text-xl font-bold text-white">
                Architecture First
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Clean structure, scalable thinking, and careful implementation
                decisions from the start.
              </p>
            </MotionArticle>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Hero;
