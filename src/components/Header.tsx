// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-emerald-500 to-90% py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Your Name
            </h1>
            <p className="text-lg md:text-xl text-white mt-1">
              Software Developer
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 space-x-6">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#cv" className="nav-link">
            CV
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#achievement" className="nav-link">
            Achievement
          </a>
          <a href="#hobbies" className="nav-link">
            Hobbies
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
