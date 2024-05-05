import React from "react";

const ProfilePage: React.FC = () => {
  const userProfile = {
    name: "Your Name",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    location: "London",
    nationality: "British",
    availability: true,
    dateOfBirth: "1990-01-01",
    email: "your.email@example.com",
    phone: "+1234567890",
    address: "123 Street, London, UK",
    github: "https://github.com/yourgithub",
    twitter: "https://twitter.com/yourtwitter",
    linkedin: "https://linkedin.com/in/yourlinkedin",
    expectedSalary: 50000,
    ownACar: true,
    haveDrivingLicense: true,
    noticePeriod: 30,
    immigrationStatus: "Citizen",
    referees: "John Doe, Jane Smith",
    willingToRelocate: false,
    languages: ["English", "Spanish"],
    skills: ["React", "JavaScript", "HTML", "CSS"],
    imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg"
  };

  return (
   
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center">
              <img src={userProfile.imageUrl} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
              <h1 className="text-3xl font-bold text-gray-800 mt-4">{userProfile.name}</h1>
              <p className="text-lg text-gray-600">{userProfile.location}, {userProfile.nationality}</p>
            </div>
            <div className="mt-6">
              <p className="text-lg text-gray-700">{userProfile.bio}</p>
            </div>
            <div className="mt-6">
              <p><strong>Email:</strong> {userProfile.email}</p>
              <p><strong>Phone:</strong> {userProfile.phone}</p>
              <p><strong>Address:</strong> {userProfile.address}</p>
              <p><strong>Github:</strong> <a href={userProfile.github} target="_blank" rel="noopener noreferrer">{userProfile.github}</a></p>
              <p><strong>Twitter:</strong> <a href={userProfile.twitter} target="_blank" rel="noopener noreferrer">{userProfile.twitter}</a></p>
              <p><strong>LinkedIn:</strong> <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer">{userProfile.linkedin}</a></p>
            </div>
            <div className="mt-6">
              <p><strong>Expected Salary:</strong> {userProfile.expectedSalary}</p>
              <p><strong>Own a Car:</strong> {userProfile.ownACar ? "Yes" : "No"}</p>
              <p><strong>Driving License:</strong> {userProfile.haveDrivingLicense ? "Yes" : "No"}</p>
              <p><strong>Notice Period:</strong> {userProfile.noticePeriod} days</p>
              <p><strong>Immigration Status:</strong> {userProfile.immigrationStatus}</p>
              <p><strong>Referees:</strong> {userProfile.referees}</p>
              <p><strong>Willing to Relocate:</strong> {userProfile.willingToRelocate ? "Yes" : "No"}</p>
              <p><strong>Languages:</strong> {userProfile.languages.join(", ")}</p>
              <p><strong>Skills:</strong> {userProfile.skills.join(", ")}</p>
            </div>
          </div>
        </div>
  );
};

export default ProfilePage;
