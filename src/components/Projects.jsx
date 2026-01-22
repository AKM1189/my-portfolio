import { Modal } from "@mantine/core";
import ProjectsCarousel from "./ProjectsCarousel";


const Projects = () => {
  const projects = [
    {
      title: "Recipe Website",
      description: "A full-stack recipe website with user authentication and admin panel.",
      link: "#",
    },
    {
      title: "Movie Booking System",
      description: "An online platform to book movie tickets with real-time seat selection.",
      link: "#",
    },
    {
      title: "Restaurant Order App",
      description: "Web app for waiters to take and manage restaurant orders efficiently.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="my-32">
      <h3 className="title mb-10">MY <span className="text-indigo-600">PROJECTS</span></h3>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-100 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="font-bold mb-3">{project.title}</h4>
            <p className="mb-3">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
        <div className="w-full mt-5">
          <ProjectsCarousel/>
        </div>
        {/* <Modal centered opened>Hello</Modal> */}
    </section>
  );
};

export default Projects;



