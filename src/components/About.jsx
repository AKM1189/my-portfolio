import SectionTitle from "./SectionTitle";
import { MyInfo } from "../constants";

const About = () => {
  const about = [
    {label: "Name", value: MyInfo.name},
    {label: "Date of Birth", value: MyInfo.dateOfBirth},
    {label: "Language", value: MyInfo.language},
    {label: "Phone", value: MyInfo.phone},
    {label: "Email", value: MyInfo.email},
    {label: "Address", value: MyInfo.address},
    {label: "Experience", value: MyInfo.experience},
  ]
  const experience = about.filter((item) => item.label === "Experience")[0]?.value ?? 0;
  const personalInfo = about.filter((item) => item.label !== "Experience");

  return (
    <section id="about-me" className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle highlight="About Me" />

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <h3 className="side-title text-lg mb-8">Personal Information</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.slice(0, 6).map((item) => (
              <InfoItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-4xl font-bold text-white">{experience}+</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">Years of Experience</p>
                <p className="text-slate-500 mt-1">Building web applications and growing with technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const InfoItem = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="info-name text-sm">{label}</span>
      <span className="info-value font-medium text-slate-800">{value}</span>
    </div>
  );
};
