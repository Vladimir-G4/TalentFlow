'use client';
import React, { useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import mockData from '../mock_data.json';
import bgImage from '../images/bg.png';
import { FaUpload } from 'react-icons/fa';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [profileData, setProfileData] = useState(mockData.user);

  return (
    <Auth0Provider
      domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
      clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div
        className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="p-5 z-10">
          <a href='/'>
            <h3 className="text-4xl font-bold text-white">TalentFlow</h3>
          </a>
          <h6 className="text-lg text-white">Connecting Talents with Opportunities</h6>
        </div>

        <div className="p-5 z-10 flex space-x-4">
          <div className="w-1/3 bg-white bg-opacity-70 rounded-lg shadow-lg p-10 text-center">
            <img
              src={profileData.profilePhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-purple-800">{profileData.name}</h3>
            <p className="text-gray-700">{profileData.email}</p>
            <h4 className="mt-4 font-semibold">About Me</h4>
            <p className="text-gray-600">{profileData.aboutMe}</p>
            <h4 className="mt-4 font-semibold">Education</h4>
            <p className="text-gray-600">{profileData.education.degree}, {profileData.education.institution}, Class of {profileData.education.yearOfGraduation}</p>
            <h4 className="mt-4 font-semibold">Skills</h4>
            <ul className="list-disc list-inside">
              {profileData.skills.map((skill: any, index: any) => (
                <li key={index} className="text-gray-600">{skill}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                <FaUpload className="mr-2" /> Upload Resume
              </button>
            </div>
          </div>

          <div className="w-2/3 ml-4">
            <h4 className="text-2xl font-semibold">Experience</h4>
            {profileData.experiences.map((experience: any, index: any) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 mt-4">
                <h5 className="font-bold">{experience.positionTitle} at {experience.company}</h5>
                <img src={experience.logo} alt={experience.company} className="h-12 inline-block mb-2" />
                <p>{experience.positionType} | {experience.startDate} - {experience.endDate}</p>
                <p>{experience.remote ? "Remote" : "On Site"} | {experience.location}</p>
                <ul className="list-disc list-inside">
                  {experience.bulletPoints.map((point: any, idx: any) => (
                    <li key={idx} className="text-gray-600">• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation links */}
        <div className="absolute top-5 right-5">
          <nav className="flex space-x-4">
            <a href="/dashboard" className="font-poppins text-white hover:text-blue-500 transition">Home</a>
            <a href="/profile" className="font-poppins text-white hover:text-blue-500 transition">Profile</a>
            <a href="/about" className="font-poppins text-white hover:text-blue-500 transition">About Us</a>
          </nav>
        </div>
      </div>
    </Auth0Provider>
  );
};

export default Profile;
