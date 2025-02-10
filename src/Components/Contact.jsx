import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:your-email@example.com" className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800">
            <FaGithub />
          </a>
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
            disabled
          >
            Send Message (Under Development)
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;