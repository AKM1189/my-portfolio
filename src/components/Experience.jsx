import { motion } from "framer-motion";
import { fadeInScale, fadeInUp } from "../utils/motion";
import educationData from "../../data/experience.json";

export default function Experience() {
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;
  const timeline = educationData.experience.slice().reverse();

  return (
    <>
      <MotionDiv variants={fadeInUp} className="mt-14">
        <p className="text-[10px] uppercase tracking-[0.26em] text-app-primary">
          Milestones
        </p>
        <h3 className="mt-2 text-4xl font-bold text-white">My Journey</h3>

        <div className="relative mt-8 space-y-8 pl-6 before:absolute before:left-[8px] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-app-line">
          {timeline.map((item) => (
            <MotionArticle
              key={`${item.title}-${item.years}`}
              variants={fadeInUp}
              className="relative"
            >
              <span className="absolute -left-6 top-1 h-4 w-4 rounded-full border border-app-primary bg-app-surface" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                    {item.description.trim()}
                  </p>
                </div>
                <p className="text-[12px] uppercase tracking-[0.22em] text-slate-500">
                  {item.years}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </MotionDiv>

      <MotionDiv
        variants={fadeInScale}
        className="mt-12 rounded-[1.35rem] bg-app-panel px-6 py-8 text-center"
      >
        <h3 className="text-3xl font-bold text-white">
          Ready to build something extraordinary?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          I&apos;m currently looking for opportunities to take on complex
          interfaces, scalable systems, and meaningful products.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full bg-[image:var(--app-primary-gradient)] px-5 py-3 text-sm font-semibold text-slate-950"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/AKM1189"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-app-panel-alt px-5 py-3 text-sm font-semibold text-white"
          >
            View GitHub
          </a>
        </div>
      </MotionDiv>
    </>
  );
}
