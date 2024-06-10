import React from "react";
import { useQuery } from "react-query";
import { fetchProfileById, UserProfile } from "../api/profileApi";
import { useSpring, animated } from "@react-spring/web";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFileAlt,
  FaBriefcase,
  FaCode,
  FaPhone,
} from "react-icons/fa";

const ProfilePage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<UserProfile, Error>(
    ["profile"], // Query key
    () => fetchProfileById("4") // Query function
  );

  const pageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const photoSpring = useSpring({
    transform: "rotate(0deg)",
    from: { transform: "rotate(360deg)" },
    config: { duration: 1000 },
  });

  const nameSpring = useSpring({
    from: { color: "#ff0080" },
    to: [
      { color: "#d72638" },
      { color: "#f46036" },
      { color: "#2e294e" },
      { color: "#1b998b" },
      { color: "#c5d86d" },
      { color: "#ff0080" },
    ],
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  if (isLoading)
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  if (isError)
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Error fetching data
      </div>
    );

  const userProfile = data!;

  return (
    <animated.div
      style={pageSpring}
      className="max-w-4xl mx-auto mt-8 px-4 pb-16 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-lg shadow-2xl"
    >
      <div className="text-center mb-8">
        <animated.img
          style={photoSpring}
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto shadow-lg"
        />
        <animated.h1 style={nameSpring} className="text-4xl font-bold mt-4">
          {userProfile.name}
        </animated.h1>
        <div className="relative flex justify-center mt-4 space-x-4">
          <FaFileAlt size={40} className="animate-bounce text-blue-500" />
          <FaBriefcase size={40} className="animate-bounce text-green-500" />
          <FaCode size={40} className="animate-bounce text-red-500" />
          <FaPhone size={40} className="animate-bounce text-yellow-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Personal Information Card */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold mb-4 bg-white text-black rounded-full px-4 py-1 inline-block">
              Personal Information
            </h2>
          </div>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Location:</strong> {userProfile.location}
          </p>
          <p>
            <strong>Nationality:</strong> {userProfile.nationality}
          </p>
          <p>
            <strong>Date of Birth:</strong> {userProfile.dateOfBirth}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Phone:</strong> {userProfile.phone}
          </p>
          <p>
            <strong>Address:</strong> {userProfile.address}
          </p>
        </div>

        {/* Social Links Card */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold mb-4 bg-white text-black rounded-full px-4 py-1 inline-block">
              Social Links
            </h2>
          </div>
          <p>
            <strong>Github:</strong>{" "}
            <a
              href={userProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {userProfile.github}
            </a>
          </p>
          <p>
            <strong>Twitter:</strong>{" "}
            <a
              href={userProfile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {userProfile.twitter}
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={userProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {userProfile.linkedin}
            </a>
          </p>
        </div>

        {/* Employment Details Card */}
        <div className="bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold mb-4 bg-white text-black rounded-full px-4 py-1 inline-block">
              Employment Details
            </h2>
          </div>
          <p>
            <strong>Availability:</strong>{" "}
            {userProfile.availability ? "Available" : "Not Available"}
          </p>
          <p>
            <strong>Expected Salary:</strong> {userProfile.expectedSalary}
          </p>
          <p>
            <strong>Notice Period:</strong> {userProfile.noticePeriod} days
          </p>
          <p>
            <strong>Immigration Status:</strong> {userProfile.immigrationStatus}
          </p>
          <p>
            <strong>Referees:</strong> {userProfile.referees}
          </p>
          <p>
            <strong>Willing to Relocate:</strong>{" "}
            {userProfile.willingToRelocate ? "Yes" : "No"}
          </p>
        </div>

        {/* Skills and Languages Card */}
        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold mb-4 bg-white text-black rounded-full px-4 py-1 inline-block">
              Skills and Languages
            </h2>
          </div>
          <p>
            <strong>Languages:</strong> {userProfile.languages}
          </p>
          <p>
            <strong>Skills:</strong> {userProfile.skills}
          </p>
        </div>
      </div>

      {/* Biography Card */}
      <div className="mt-6 bg-gradient-to-r from-gray-400 to-gray-700 rounded-lg shadow-lg p-6 text-white">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-4 bg-white text-black rounded-full px-4 py-1 inline-block">
            Biography
          </h2>
        </div>
        <p>{userProfile.bio}</p>
      </div>
    </animated.div>
  );
};

export default ProfilePage;
