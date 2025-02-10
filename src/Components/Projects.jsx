import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import eventImage from "../assets/concurrence.png";

const projects = [
  {
    title: "CONCURRENCE 2K25",
    description: "CONCURRENCE 2K25 is the official event website with registration, event details, and real-time updates, built using React, Tailwind CSS, and Node.js.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    image: eventImage,
    code: "https://github.com/Vignesh07s/concurrence-2k25",
    demo: "https://concurrence-2k25.vercel.app",
  },
  {
    title: "iNotebook",
    description: "A secure online notebook application where users can create, update, delete, and view their notes. Features user authentication with signup and login functionality.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication"],
    image: "/inotebook.png",
    code: "https://github.com/Vignesh07s/inotebook",
    demo: "https://inotebook-app.vercel.app",
  },
];


const Projects = () => {
  return (
    <div className="container mx-auto py-4 px-16 bg-gray-100 dark:bg-gray-900 h-[100vh]">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-6">
        My projects
      </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project = {project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
