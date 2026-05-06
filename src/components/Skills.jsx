import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaShieldHalved,
} from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { skillsByCategory } from "../data/skillsData";
import { fadeInScale, staggerContainer } from "../utils/motion";

const toolChips = [
  // { label: "AWS", icon: FaAws },
  { label: "Docker", icon: FaDocker },
  { label: "Git / GitHub", icon: FaGitAlt },
  // { label: "Kubernetes", icon: FaDocker },
  // { label: "Terraform", icon: FaShieldHalved },
  // { label: "Linux Security", icon: FaLinux },
];

const Skills = () => {
  const frontend = skillsByCategory.find((group) => group.title === "Frontend");
  const backend = skillsByCategory.find(
    (group) => group.title === "Backend & Data",
  );
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
      className="px-1 py-4 sm:px-2 sm:py-6"
    >
      <SectionTitle
        eyebrow="Skill overview"
        title="Technical"
        highlight="Arsenal"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <SkillColumn title="Frontend" skills={frontend?.skills || []} />
        <SkillColumn title="Backend" skills={backend?.skills || []} />
      </div>

      <MotionDiv
        variants={fadeInScale}
        className="mt-4 rounded-[1.1rem] bg-app-panel p-5"
      >
        <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
          Tools
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {toolChips.map((tool) => {
            const Icon = tool.icon;
            return (
              <span
                key={tool.label}
                className="inline-flex items-center gap-2 rounded-md bg-app-panel-dark px-3 py-2 text-[11px] text-white"
              >
                <Icon className="text-[10px] text-app-primary" />
                {tool.label}
              </span>
            );
          })}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

const SkillColumn = ({ title, skills }) => {
  const MotionArticle = motion.article;

  return (
    <MotionArticle
      variants={fadeInScale}
      className="rounded-[1.1rem] bg-app-panel p-7"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <span className="text-app-primary">+</span>
      </div>

      <div className="mt-5 space-y-5">
        {skills.slice(0, 4).map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-300 tracking-wide">
                {skill.name}
              </span>
              <span className="text-xs text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-app-panel-dark">
              <div
                className="h-full rounded-full bg-app-primary"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </MotionArticle>
  );
};

export default Skills;
