import React from 'react';
import { FaCertificate, FaTrophy, FaCode } from 'react-icons/fa';
import SectionTitle from './CertificationsPage/SectionTitle';

const CertificationsAchievements = () => {
  const certifications = [
    { name: "Google Cloud Computing Foundations with Kubernetes", link: "/certificates/gccf.pdf" },
    { name: "Generative AI Study Jams", link: "/certificates/genAI.pdf" },
  ];

  const achievements = [
    { title: "Runner-up in Query Crackers competition", college: "SV University, Tirupati" },
    { title: "Runner-up in Coding Gala (technical event)", college: "SVR Engineering College, Nandyal" },
    { title: "Runner-up in web Designing competition", college: "RGMCET, Nandyal" },
    { title: "3rd in Coding competition", college: "RGMCET, Nandyal" },
  ];

  const hackathons = [
    { name: "CodeQuest", organizer: "RGMCET, Nandyal", year: "2024" },
  ];

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12 tracking-wide">
          Credentials & Accomplishments
        </h2>

        {/* Certifications Section */}
        <div>
          <SectionTitle>Certifications</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-between hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-yellow-500 text-3xl mr-4" />
                  <h4 className="text-lg text-gray-900 dark:text-white font-semibold">{cert.name}</h4>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="self-start px-4 py-2 mt-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md">
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mt-12">
          <SectionTitle>Achievements & Hackathons</SectionTitle>
          <div className="relative border-l-2 border-blue-500 ml-4">
            {/* Mapping Achievements */}
            {achievements.map((ach, index) => (
              <div key={`ach-${index}`} className="mb-8 pl-10">
                <div className="absolute -left-4 mt-1.5 w-7 h-7 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <FaTrophy className="text-white text-sm" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{ach.title}</h4>
                <p className="text-md text-blue-600 dark:text-blue-400">{ach.college}</p>
              </div>
            ))}
            {/* Mapping Hackathons */}
            {hackathons.map((hack, index) => (
              <div key={`hack-${index}`} className="mb-8 pl-10">
                <div className="absolute -left-4 mt-1.5 w-7 h-7 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <FaCode className="text-white text-sm" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{hack.name} ({hack.year})</h4>
                <p className="text-md text-blue-600 dark:text-blue-400">{hack.organizer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsAchievements;