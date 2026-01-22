import skillsData from '../../data/skills.json';
const Skills = () => {
  const {skills} = skillsData;
  return (
    <section id="skills" className="my-32">
      <h3 className="title mb-10">MY <span className="text-indigo-600">SKILLS</span></h3>
      <div className="sm:grid sm:grid-cols-2 md:gap-x-20 gap-x-10 gap-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
       <div className='mt-10'>
        <a  href="./cv/AUNG KAUNG MYAT.pdf" download="Aung Kaung Myat CV">
              <button type="button" class="border border-indigo-600 text-indigo-600 px-4 py-2 
              rounded-full hover:text-white cursor-pointer hover:bg-indigo-600 transition 
              ease-in-out duration-300">Download CV</button>
              </a>
       </div>
    </section>
  );
};


export default Skills;
