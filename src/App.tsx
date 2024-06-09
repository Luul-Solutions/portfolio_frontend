// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProfilePage from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-fixed bg-cover">
      <Header />
      <main className="flex-grow">
        <ProfilePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
