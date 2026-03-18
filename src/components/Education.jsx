import data from "../../data/education.json";
import SectionTitle from "./SectionTitle";

const Education = () => {
  const { education } = data;

  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle highlight="Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <EducationCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ data }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

      <div className="relative flex gap-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="degree-name">{data.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-2 mb-3">
            <span className="university">{data.location}</span>
            <span className="duration">{data.years}</span>
          </div>
          <p className="text-slate-600 leading-relaxed">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;


