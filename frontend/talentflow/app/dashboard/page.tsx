'use client';
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';
import mockData from '../mock_data.json';
import LogoutButton from '../components/logout';

const Dashboard = () => {
  const { user, dashboard } = mockData;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-100 text-black">
      {/* Background Image Section */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('./images/bg.png')` }}>
        <div className="absolute top-15 left-neg4 transform rotate-90">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z"
              fill="url(#gradientTopLeft)"
            />
            <defs>
              <linearGradient
                id="gradientTopLeft"
                x1="0"
                y1="0"
                x2="200"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6A88" />
                <stop offset="1" stopColor="#FFB6A0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-12 right-14 transform translate-y-1/2">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z"
              fill="url(#gradientBottomRight)"
            />
            <defs>
              <linearGradient
                id="gradientBottomRight"
                x1="0"
                y1="200"
                x2="200"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A85FF" />
                <stop offset="1" stopColor="#A0D7FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="p-10 z-10 text-black">
        <h3 className="text-4xl font-bold">TalentFlow</h3>
        <h6 className="text-lg">Connecting Talents with Opportunities</h6>
      </div>

      {/* Navigation Bar */}
      <header className="flex justify-between items-center mb-6 z-10 relative">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button>
            <img src="/search-icon.svg" alt="Search" className="w-6 h-6" />
          </button>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/profile" className="text-gray-600 hover:text-purple-600">Profile</a>
            <a href="/about" className="text-gray-600 hover:text-purple-600">About Us</a>
          </nav>
          {user && <LogoutButton />} {/* Display Logout button if user is authenticated */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        <section className="mb-6">
          <h2 className="text-4xl font-poppins-medium">
            Opportunities <span className="font-marck-script text-purple-600">ebb</span> and <span className="font-marck-script text-purple-600">flow</span>, but your next internship is within reach.
          </h2>
          <p className="mt-2 text-gray-600">Explore insights and receive tailored recommendations for each company.</p>
        </section>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboard.companies
            .sort((a, b) => b.studentsWorked.total - a.studentsWorked.total)
            .map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
                <div className="flex items-start">
                  <img src={company.photo} alt={company.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{company.name}</h3>
                    <div className="flex items-center">
                      {/* Star rating */}
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-4 h-4 ${starIndex < company.averageRating ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-6.18 3.236 1.18-6.863L0 6.865l6.91-1.002L10 0l3.09 5.863L20 6.865l-4.82 4.508 1.18 6.863z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-500">{`${company.studentsWorked.total} students worked here`}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{company.blurb}</p>
                <div className="mt-2">
                  <span className="text-gray-600">Sector: {company.sector}</span>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
