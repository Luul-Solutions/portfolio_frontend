import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 py-4">
      <div className="container mx-auto px-4 text-white text-center">
        <p>
          &copy; {currentYear} Abdallah Ali. All rights reserved. Long live
          Palestine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
