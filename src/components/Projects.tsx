// src/components/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Sample Project Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-700 mt-2">
              Description of the project goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
