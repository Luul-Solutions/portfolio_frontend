// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./App.css"
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Projects />
      {/* Add more sections/components as needed */}
    </div>
  );
};

export default App;
