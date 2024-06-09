import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative bg-black bg-opacity-75">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-md opacity-20 blur"></div>
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-green-300 rounded-full animate-ping"></div>
        <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute inset-0 bg-purple-300 rounded-full animate-ping animation-delay-400"></div>
        <div className="relative bg-white rounded-full p-6 shadow-2xl">
          <svg
            className="w-12 h-12 text-gray-800 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
