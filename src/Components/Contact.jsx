import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('SUCCESS');
        form.reset();
      } else {
        setSubmissionStatus('ERROR');
      }
    } catch (error) {
      setSubmissionStatus('ERROR');
    }
  };

  return (
    <div className="container mx-auto px-6 py-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:vigneshwarareddys@gmail.com" className="text-4xl text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/svignesh21" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Vignesh07s" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            <FaGithub />
          </a>
        </div>

        <form 
          action="https://formspree.io/f/mjkebvnz"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg mx-auto text-left"
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Send Message
          </button>
          
          {submissionStatus === 'SUCCESS' && <p className="mt-4 text-green-500">Thank you for your message!</p>}
          {submissionStatus === 'ERROR' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;