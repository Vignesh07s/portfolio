import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import profilePic from "../assets/profile.png";
import Typing from "react-typing-effect"

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-2 sm:px-10 md:px-20 bg-gradient-to-b from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

            {/* Left Side: Text Content */}
            <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start w-full md:w-1/2 space-y-4">

                {/* Name Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text whitespace-nowrap">
                        S Vigneshwara Reddy
                    </span>
                </motion.h1>

                {/* Typing Animation */}
                <div className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
                    <Typing
                        text={[
                            "Learning. Building. Evolving.",
                            "Exploring new technologies with curiosity",
                            "Web Developer",
                            "Problem Solver"
                        ]}
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={2000}
                        typingDelay={500}
                        loop={true}
                        className="font-semibold text-blue-600 dark:text-blue-400"
                    />
                </div>


                {/* Project Link */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <a href="https://concurrence-2k25.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline text-lg font-medium">
                        Check out my latest project!
                    </a>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4"
                >
                    {/* View Resume */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-lg font-medium rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
                    >
                        Resume <FaExternalLinkAlt className="ml-2 text-lg" />
                    </motion.a>

                    {/* View Projects */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Link
                            to="/projects"
                            className="flex items-center justify-center px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-lg font-medium rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
                        >
                            Projects <span className="ml-2">→</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="flex space-x-6 text-2xl mt-4"
                >
                    <motion.a whileHover={{ scale: 1.2, color: "#2563eb" }} href="https://github.com/Vignesh07s" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 transition">
                        <FaGithub />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: "#2563eb" }} href="https://www.linkedin.com/in/svignesh21/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 transition">
                        <FaLinkedin />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: "#2563eb" }} href="mailto:vigneshwarareddys@gmail.com" className="text-gray-700 dark:text-gray-300 transition">
                        <FaEnvelope />
                    </motion.a>
                </motion.div>
            </div>

            {/* Right Side: Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"
            >
                <motion.img whileHover={{ scale: 1.05 }} src={profilePic} alt="Profile" className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto rounded-full border-4 border-blue-500 shadow-lg" />
            </motion.div>

        </section>
    );
};

export default Home;
