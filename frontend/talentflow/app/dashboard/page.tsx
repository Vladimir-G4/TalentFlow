'use client';
import React, { useState, useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import mockData from '../mock_data.json';
import LogoutButton from '../components/logout';
import { Marck_Script } from 'next/font/google';

const marckScript = Marck_Script({
  weight: '400',
  subsets: ['latin'],
});

const Dashboard = () => {
  const { user, dashboard } = mockData;

  // State for search query and filtered companies
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(dashboard.companies);

  // Update filtered companies whenever the search query changes
  useEffect(() => {
    setFilteredCompanies(
      dashboard.companies.filter((company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, dashboard.companies]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-100 text-black px-6">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute top-10 left-20">
          <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="url(#gradientShape1)" />
            <defs>
              <linearGradient id="gradientShape1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FF8C00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="pt-10 pb-6 z-10 text-black">
        <h3 className="text-4xl font-bold">TalentFlow</h3>
        <h6 className="text-lg">Connecting Talents with Opportunities</h6>
      </div>

      {/* Navigation Bar with Centered Search */}
      <header className="flex justify-center items-center mb-6 z-10 relative">
        <div className="w-full md:w-2/3 flex items-center justify-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Companies..."
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
          />
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 ml-4">
            <a href="/dashboard" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/profile" className="text-gray-600 hover:text-purple-600">Profile</a>
            <a href="/about" className="text-gray-600 hover:text-purple-600">About Us</a>
            {user && (
              <Auth0Provider
                domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
                clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
                authorizationParams={{
                  redirect_uri: window.location.origin,
                }}
              >
                <LogoutButton />
              </Auth0Provider>
            )} {/* Display Logout button if user is authenticated */}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        <section className="mb-6">
          <h2 className={`text-4xl font-poppins-medium ${marckScript}`}>
            Opportunities <br />
            <span className="text-purple-600 font-marck-script">ebb</span> and <span className="text-purple-600 font-marck-script">flow</span>, <br />
            but <br />
            your next internship <br />
            is within reach.
          </h2>
          <p className="mt-2 text-gray-600">Explore insights and receive tailored recommendations for each company.</p>
        </section>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies
            .sort((a, b) => b.studentsWorked.total - a.studentsWorked.total)
            .map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              >
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
