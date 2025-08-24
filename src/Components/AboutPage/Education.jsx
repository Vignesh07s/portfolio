import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Rajeev Gandhi Memorial College of Engineering and Technology",
      website: "https://www.rgmcet.edu.in/",
      year: "2021 - 2025",
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Sri Bhavishya Junior College, Vijayawada",
      website: "https://sribhavishya.com/",
      year: "2019 - 2021",
    },
    {
      degree: "High School (Class 10)",
      institution: "RGM International School, Nandyal",
      website: "https://rgminternational.unicampus.in/",
      year: "2018 - 2019",
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
      <div className="relative border-l-2 border-blue-500 ml-4">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 pl-8">
            <div className="absolute -left-3.5 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <FaGraduationCap className="text-white text-xs" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
            <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              {edu.institution}
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;