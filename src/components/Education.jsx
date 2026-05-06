import data from "../../data/experience.json";
import SectionTitle from "./SectionTitle";

const Education = () => {
  const { education } = data;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="section-frame rounded-[2rem] px-6 py-16 sm:px-8 lg:px-12">
        <SectionTitle
          eyebrow="Education"
          title="A background built through"
          highlight="structured learning and applied practice."
          subtitle="My education moved from engineering into computing and software, creating a mix of analytical thinking, technical training, and collaborative project experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <article
              key={`${item.title}-${item.years}`}
              className="rounded-[1.7rem] bg-white/[0.04] p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e7d8bf]">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-stone-300">
                  {item.years}
                </span>
              </div>

              <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-400">
                {item.location}
              </p>
              <p className="mt-6 leading-8 text-stone-300">
                {item.description.trim()}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
