import { FaGraduationCap } from "react-icons/fa";

const About = () => {

  const skills = ["Java", "Python", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "Linux", "Docker", "Cloud Computing (Learning)"];

  const education = [
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
    <div className="container mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-6">
          About Me
        </h2>

        {/* About Description */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I am a **passionate Full-Stack Developer** with a strong interest in **Cloud Computing**.
          I enjoy building scalable, efficient web applications and continuously exploring new technologies
          to improve my skills.
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Currently, I am **learning Cloud Computing** and focusing on **MERN Stack Development** to
          strengthen my expertise in **backend systems, databases, and cloud infrastructure**.
          My goal is to become a **skilled Full-Stack Developer and Cloud Engineer** in the future.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Education
          </h3>

          {/* Education Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    {edu.institution}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
