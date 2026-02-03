import skillsData from "../../data/skills.json";

const Skills = () => {
  const { skills } = skillsData;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold text-slate-800">{skill.name}</span>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-teal-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

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
