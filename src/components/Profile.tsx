import React from "react";
import { useQuery } from "react-query";
import { fetchProfileById, UserProfile } from "../api/profileApi";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

const ProfilePage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<UserProfile, Error>(
    ["profile"], // Query key
    () => fetchProfileById("1") // Query function
  );

  if (isLoading) return <Loading />;
  if (isError) return <ErrorComponent />;

  const userProfile = data!;

  return (
    <motion.div
      className="relative max-w-5xl mx-auto mt-10 p-6 bg-black bg-opacity-75 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-20"></div>
      <div className="absolute inset-0 bg-pattern bg-opacity-50"></div>
      <div className="relative text-center z-10 mb-8">
        <motion.img
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-2xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h1
          className="text-4xl font-bold text-white mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {userProfile.name}
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        <motion.div
          className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg shadow-2xl p-6 hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
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
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-2xl p-6 hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-lg font-semibold mb-4">Social Links</h2>
          <p>
            <FaGithub className="inline mr-2" />
            <a
              href={userProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {userProfile.github}
            </a>
          </p>
          <p>
            <FaTwitter className="inline mr-2" />
            <a
              href={userProfile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {userProfile.twitter}
            </a>
          </p>
          <p>
            <FaLinkedin className="inline mr-2" />
            <a
              href={userProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {userProfile.linkedin}
            </a>
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg shadow-2xl p-6 hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-lg font-semibold mb-4">Employment Details</h2>
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
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded-lg shadow-2xl p-6 hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-lg font-semibold mb-4">Skills and Languages</h2>
          <p>
            <GiSkills className="inline mr-2" />
            <strong>Languages:</strong> {userProfile.languages}
          </p>
          <p>
            <FaCode className="inline mr-2" />
            <strong>Skills:</strong> {userProfile.skills}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg shadow-2xl p-6 hover:scale-105 transition-transform duration-500 relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h2 className="text-lg font-semibold mb-4">Biography</h2>
        <p>{userProfile.bio}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;
