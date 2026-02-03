import ProjectsCarousel from "./ProjectsCarousel";
import data from "../../data/projects.json";

const Projects = () => {
  const { projects } = data;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="mt-8">
          <ProjectsCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
