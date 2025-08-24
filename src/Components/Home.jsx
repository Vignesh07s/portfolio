import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaReact, FaNodeJs, FaChevronDown } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import profilePic from "../assets/profile.png";
import Typing from "react-typing-effect";

const Home = () => {
    // Animation variants for staggering children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl w-full flex flex-col items-center space-y-6"
            >
                {/* Profile Image */}
                <motion.div variants={itemVariants}>
                    <img
                        src={profilePic}
                        alt="Profile of S Vigneshwara Reddy"
                        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl"
                    />
                </motion.div>

                {/* Name Heading */}
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                        S Vigneshwara Reddy
                    </span>
                </motion.h1>

                {/* Typing Animation */}
                <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 h-8">
                    <Typing
                        text={["Full-Stack Developer", "MERN Stack Specialist", "Cloud Enthusiast"]}
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={2000}
                        typingDelay={500}
                        className="font-semibold"
                    />
                </motion.div>

                {/* Summary Paragraph */}
                <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300">
                    I build robust and scalable web applications using modern technologies. I'm passionate about solving complex problems and creating seamless user experiences.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        View My Work
                    </Link>
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        View Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex space-x-6 text-3xl text-gray-500 dark:text-gray-400">
                    <a href="https://github.com/Vignesh07s" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/svignesh21/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:vigneshwarareddys@gmail.com" className="hover:text-blue-500 transition-colors">
                        <FaEnvelope />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;