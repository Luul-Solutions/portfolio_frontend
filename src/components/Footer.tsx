import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "Abdallah Ali";

  return (
    <footer className="relative bg-black bg-opacity-75 py-6 w-full mt-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-md opacity-20 blur"></div>
      <div className="relative container mx-auto px-4 text-white text-center">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg">
            &copy; {currentYear} {yourName}. All rights reserved. Long live
            Palestine.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-300 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-300 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
