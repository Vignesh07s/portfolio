const certifications = [
  {
    name: "Google Cloud Computing Foundations with Kubernetes",
    link: "/certificates/gccf.pdf",
  },
  {
    name: "Generative AI Study Jams",
    link: "/certificates/genAI.pdf",
  },
];

const achievements = [
  {
    title: "Runner-up in Query Crackers competition",
    college: "SV University, Tirupati",
  },
  {
    title: "Runner-up in Coding Gala (technical event)",
    college: "SVR Engineering College, Nandyal",
  },
  {
    title: "Runner-up in web Designing competition",
    college: "RGMCET, Nandyal",
  },
  {
    title: "3rd in Coding competition",
    college: "RGMCET, Nandyal",
  }
];


const hackathons = [
  {
    name: "CodeQuest",
    organizer: "RGMCET, Nandyal",
    year: "2024",
  },
];

const CertificationsAchievements = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-8 tracking-wide">
          Certifications & Achievements
        </h2>

        {/* Certifications List */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 border-b-2 border-blue-500 pb-2">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="flex flex-wrap justify-between items-center bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition"
              >
                <span className="text-lg text-gray-900 dark:text-white font-medium">{cert.name}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm"
                >
                  View Certificate
                </a>

              </li>
            ))}
          </ul>
        </div>

        {/* Achievements List */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 border-b-2 border-blue-500 pb-2">
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((ach, index) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition text-lg text-gray-900 dark:text-white font-medium"
              >
                <span className="font-semibold">{ach.title}</span>
                <span className="block text-sm text-blue-600 dark:text-blue-400">{ach.college}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hackathons Section */}
<div className="mt-10">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 border-b-2 border-blue-500 pb-2">
    Hackathon Participation
  </h3>
  <ul className="space-y-4">
    {hackathons.map((hack, index) => (
      <li
        key={index}
        className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition text-lg text-gray-900 dark:text-white font-medium"
      >
        <span className="font-semibold">{hack.name}</span>
        <span className="block text-sm text-blue-600 dark:text-blue-400">
          {hack.organizer} - {hack.year}
        </span>
      </li>
    ))}
  </ul>
</div>
      </div>
    </div>
  );
};

export default CertificationsAchievements;
