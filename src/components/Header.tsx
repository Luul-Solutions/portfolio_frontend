import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="relative bg-black bg-opacity-75 py-6 rounded-md shadow-2xl transform hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-md opacity-20 blur"></div>
      <div className="relative container mx-auto px-4 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mr-4 shadow-2xl">
              <span className="text-white text-2xl font-bold">AD</span>
            </div>
            <div>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-white mt-1"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                Software Developer
              </h2>
            </div>
          </motion.div>
          <nav className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 space-x-6">
            {["Home", "CV", "Projects", "Achievement", "Hobbies"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-white text-xl font-semibold hover:text-green-300 transition duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
