import ProjectsCarousel from "./ProjectsCarousel";
import data from "../../data/projects.json";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { projects } = data;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle highlight="Featured Projects" subtitle="Showcasing a selection of my best work, each project represents a unique challenge and solution." />
        <div className="mt-8">
          <ProjectsCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
