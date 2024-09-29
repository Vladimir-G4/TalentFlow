'use client';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/logout';
import { Marck_Script } from 'next/font/google';

const marckScript = Marck_Script({
  weight: '400',
  subsets: ['latin'],
});

const CompanyProfile = () => {
  const { user } = useAuth0();

  // Static data for Amazon
  const company = {
    name: "Amazon",
    sector: "E-commerce, Cloud Computing",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon logo
    blurb: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    careerPage: "https://www.amazon.jobs/",
    students: [
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        fullName: "John Doe",
        major: "Computer Science",
        school: "New Jersey Institute of Technology",
        starRating: 5,
        review: "Great internship experience with hands-on projects!",
      },
      {
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        fullName: "Jane Smith",
        major: "Information Technology",
        school: "New Jersey Institute of Technology",
        starRating: 4,
        review: "The work environment was very supportive and collaborative.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-100 text-black px-6">
      {/* Header */}
      <div className="pt-10 pb-6 z-10 text-black text-center">
        <h3 className="text-4xl font-bold">{company.name}</h3>
        <h6 className="text-lg">{company.sector}</h6>
      </div>

      {/* Navigation Bar */}
      <header className="flex justify-center items-center mb-6 z-10 relative">
        <div className="w-full md:w-2/3 flex items-center justify-center space-x-4">
          <nav className="flex items-center space-x-6">
            <a href="/dashboard" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/profile" className="text-gray-600 hover:text-purple-600">Profile</a>
            <a href="/about" className="text-gray-600 hover:text-purple-600">About Us</a>
            {user && <LogoutButton />}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        <section className="mb-6 text-center">
          <img src={company.photo} alt={company.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
          <p className="mt-2 text-gray-600">{company.blurb}</p>
        </section>

        {/* Company Details */}
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className={`text-3xl font-poppins-medium ${marckScript}`}>About {company.name}</h2>
          <p className="mt-2 text-gray-700">{company.blurb}</p>
          <div className="mt-4">
            <span className="text-gray-600">Sector: {company.sector}</span>
          </div>
          {/* Apply Button */}
          <div className="mt-6">
            <a 
              href={company.careerPage}
              className="bg-purple-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Students Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Student Reviews</h3>
          {company.students.map((student, index) => (
            <div key={index} className="flex items-center mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <img src={student.photo} alt={student.fullName} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">{student.fullName}</h4>
                <span className="text-gray-600">{student.major} at {student.school}</span>
                <div className="flex items-center mt-1">
                  {/* Star rating */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 h-4 ${starIndex < student.starRating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-6.18 3.236 1.18-6.863L0 6.865l6.91-1.002L10 0l3.09 5.863L20 6.865l-4.82 4.508 1.18 6.863z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-500">{student.review}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CompanyProfile;
