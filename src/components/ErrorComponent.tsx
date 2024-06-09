import React from "react";
import { motion } from "framer-motion";

const ErrorComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative bg-black bg-opacity-75">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-md opacity-20 blur"></div>
      <div className="relative text-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <motion.h1
            className="text-3xl font-bold text-red-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Error Fetching Data
          </motion.h1>
          <p className="text-lg mt-4 text-gray-700">
            There was an error fetching the data. Please try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
