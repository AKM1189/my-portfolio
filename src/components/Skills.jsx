import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaScrewdriverWrench } from "react-icons/fa6";
import { skillsByCategory } from "../data/skillsData";
import SectionTitle from "./SectionTitle";
import { fadeInScale, fadeInUp, staggerContainer } from "../utils/motion";

const iconByCategory = {
  Frontend: FaCode,
  "Backend & Data": FaDatabase,
  "Tools & Workflow": FaScrewdriverWrench,
};

const Skills = () => {
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          highlight="Technical Arsenal"
          subtitle="Mastering a wide range of technologies to deliver industry-leading solutions."
        />

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="p-8 md:p-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-cyan-50/50 shadow-[0_10px_60px_-30px_rgba(2,132,199,0.35)]"
        >
          {/* <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-teal-200/30 blur-3xl" /> */}

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillsByCategory.map((group) => {
              const Icon = iconByCategory[group.title] || FaCode;

              return (
                <MotionArticle
                  key={group.title}
                  variants={fadeInScale}
                  // className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-5 sm:p-6 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.65)]"
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center">
                        <Icon className="text-sm" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {group.title}
                      </h3>
                    </div>
                    {/* <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      {group.skills.length} skills
                    </span> */}
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <MotionDiv
                        key={skill.name}
                        variants={fadeInUp}
                        className="rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-semibold text-slate-700 text-sm leading-snug">
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-cyan-700">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-1.5 w-full rounded-full bg-slate-200/80 overflow-hidden">
                          <MotionDiv
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"
                          />
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </MotionDiv>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
          <a
            href="./cv/AUNG KAUNG MYAT.pdf"
            download="Aung Kaung Myat CV"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
