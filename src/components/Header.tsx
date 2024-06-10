import React from "react";
import { useSpring, animated } from "@react-spring/web";

const useHoverAnimation = () => {
  const [isHovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    transform: isHovered ? "translateY(-10px)" : "translateY(0px)",
    config: { duration: 300 },
  });

  return [springProps, setHovered] as const;
};

const Header: React.FC = () => {
  const [homeSpring, setHomeHovered] = useHoverAnimation();
  const [cvSpring, setCvHovered] = useHoverAnimation();
  const [projectsSpring, setProjectsHovered] = useHoverAnimation();
  const [achievementsSpring, setAchievementsHovered] = useHoverAnimation();
  const [hobbiesSpring, setHobbiesHovered] = useHoverAnimation();

  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-emerald-500 to-90% py-6 rounded-md">
      <div className="container mx-auto px-4 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
            <animated.a
              href="#home"
              className="nav-link"
              style={homeSpring}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
            >
              Home
            </animated.a>
            <animated.a
              href="#cv"
              className="nav-link"
              style={cvSpring}
              onMouseEnter={() => setCvHovered(true)}
              onMouseLeave={() => setCvHovered(false)}
            >
              CV
            </animated.a>
            <animated.a
              href="#projects"
              className="nav-link"
              style={projectsSpring}
              onMouseEnter={() => setProjectsHovered(true)}
              onMouseLeave={() => setProjectsHovered(false)}
            >
              Projects
            </animated.a>
            <animated.a
              href="#achievement"
              className="nav-link"
              style={achievementsSpring}
              onMouseEnter={() => setAchievementsHovered(true)}
              onMouseLeave={() => setAchievementsHovered(false)}
            >
              Achievement
            </animated.a>
            <animated.a
              href="#hobbies"
              className="nav-link"
              style={hobbiesSpring}
              onMouseEnter={() => setHobbiesHovered(true)}
              onMouseLeave={() => setHobbiesHovered(false)}
            >
              Hobbies
            </animated.a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
