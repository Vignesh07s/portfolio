import React from 'react';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { MdCloud } from 'react-icons/md';

const skillIcons = {
  Java: <FaJava />,
  Python: <FaPython />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  "Tailwind CSS": <SiTailwindcss />,
  Git: <FaGitAlt />,
  Linux: <FaLinux />,
  Docker: <FaDocker />,
  "Cloud Computing (Learning)": <MdCloud />
};

const Skills = () => {
  const skills = Object.keys(skillIcons);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg text-lg">
            <span className="mr-2 text-xl">{skillIcons[skill]}</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;