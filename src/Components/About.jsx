import React from 'react';
import Skills from './AboutPage/Skills'; 
import Education from './AboutPage/Education';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-300 mb-8">About Me</h2>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm a passionate **Full-Stack Developer** currently specializing in the **MERN stack** and diving deep into the world of **Cloud Computing**. My goal is to architect and build robust, scalable applications that solve real-world problems.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I enjoy the challenge of learning new technologies and am on a journey to become a proficient **Cloud Engineer**.
          </p>
        </div>

        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default About;