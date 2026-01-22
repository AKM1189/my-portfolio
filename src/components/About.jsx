
import data from "./../../data/about.json";

const About = () => {
  const {about} = data;
  const experience = about.filter(item => item.label === "Experience")[0].value;
  return (
    <section id="about-me" className="mt-10 mb-32">
      <div className="pt-28">
        <h3 className="title text-center">
          ABOUT <span className="text-indigo-600">ME</span>
        </h3>

        {/* <div className="flex justify-center mt-12"> */}
          <div className="w-full">
            <h3 className="side-title mb-10">Personal Information</h3>

            {/* <div className="md:grid md:grid-cols-3 gap-40 sm:text-lg text-base"> */}
            <div className="flex justify-between">
              {/* Left */}
              <div className="space-y-5">
                {about.map((item, index) => {
                  if(index < 3) {
                    return  <InfoItem
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                  }
                })}
              </div>

              {/* Right */}
              <div className="space-y-5">
                {about.map((item, index) => {
                  if(index >= 3 && index < 6) {
                    return  <InfoItem
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                  }
                })}
              </div>
               {/* Experience */}
            <div className="text-lg">
              <p className="info-name">Experience</p>
              <div className="flex items-end gap-2 ps-10">
                <h3 className="text-8xl font-bold text-indigo-600">{experience}</h3>
                <span className="info-name">years</span>
              </div>
            </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;

const InfoItem = ({ label, value }) => {
  return (
    <p className="text-lg">
      <span className="info-name">{label}: </span>
      <b className="info-value">{value}</b>
    </p>
  );
};
