import React from "react";
import { useQuery } from "react-query";
import { fetchProfileById, UserProfile } from "../api/profileApi";

const ProfilePage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<UserProfile, Error>(
    ["profile"], // Query key
    () => fetchProfileById("4") // Query function
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const userProfile = data!;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
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
        </div>

        {/* Social Links Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Social Links</h2>
          <p>
            <strong>Github:</strong>{" "}
            <a
              href={userProfile.github}
              target="_blank"
              rel="noopener noreferrer"
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
            >
              {userProfile.linkedin}
            </a>
          </p>
        </div>

        {/* Employment Details Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
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
        </div>

        {/* Skills and Languages Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Skills and Languages</h2>
          <p>
            <strong>Languages:</strong> {userProfile.languages}
          </p>
          <p>
            <strong>Skills:</strong> {userProfile.skills}
          </p>
        </div>
      </div>

      {/* Biography Card */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Biography</h2>
        <p>{userProfile.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
