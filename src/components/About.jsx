import { motion } from "framer-motion";
import { MyInfo } from "../constants";
import SectionTitle from "./SectionTitle";
import { fadeInScale, staggerContainer } from "../utils/motion";

const About = () => {
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;

  return (
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-1 py-4 sm:px-2 sm:py-6"
    >
      <SectionTitle
        eyebrow="About"
        title="Built with"
        highlight="precision"
        subtitle="Product-minded, detail-focused, and comfortable working across both UI and application logic."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <MotionArticle
          variants={fadeInScale}
          className="rounded-[1.2rem] bg-app-panel p-6"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Profile
          </p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <InfoRow label="Name" value={MyInfo.name} />
            <InfoRow label="Location" value={MyInfo.address} />
            <InfoRow label="Languages" value={MyInfo.language} />
            <InfoRow label="Experience" value={`${MyInfo.experience}+ years`} />
          </div>
        </MotionArticle>

        <MotionArticle
          variants={fadeInScale}
          className="rounded-[1.2rem] bg-app-surface p-6"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-app-primary">
            Approach
          </p>
          <p className="mt-5 text-sm leading-8 text-slate-300">
            I focus on products that feel polished, communicate clearly, and
            stay maintainable as they grow.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {MyInfo.focus.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-app-chip px-4 py-4 text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </MotionArticle>
      </div>
    </MotionDiv>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 border-b border-white/6 pb-3 last:border-b-0 last:pb-0">
    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
      {label}
    </span>
    <span className="text-right text-white">{value}</span>
  </div>
);

export default About;
