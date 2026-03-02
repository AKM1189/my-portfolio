import skillsData from "../../data/skills.json";
import { FaCheck } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const { skills } = skillsData;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle highlight="Technical Arsenal" subtitle="Mastering a wide range of technologies to deliver industry-leading solutions." />

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="mt-0.5 w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-sm" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    {typeof skill.level === "number" && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
            <a
              href="./cv/AUNG KAUNG MYAT.pdf"
              download="Aung Kaung Myat CV"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
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
      </div>
    </section>
  );
};

export default Skills;
