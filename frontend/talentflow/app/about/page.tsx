'use client';
import React from 'react';
import bgImage from '../images/bg.png';

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Left Half Circle SVG */}
      <div className="absolute top-15 left-neg4 transform rotate-90">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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

      {/* Bottom Right Half Circle SVG */}
      <div className="absolute bottom-12 right-14 transform translate-y-1/2">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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

      <div className="p-10 z-10 text-center">
        <h3 className="text-4xl font-bold text-white">About TalentFlow</h3>
        <h6 className="text-lg text-white mt-2">
          Connecting Talents with Opportunities
        </h6>
      </div>

      <div className="flex-grow flex items-center justify-center z-10">
        <div className="relative bg-white bg-opacity-40 rounded-lg shadow-lg p-10 pt-7r max-w-3xl w-full text-center">
          <p className="text-lg text-purple-800 mb-5">
            At TalentFlow, our mission is to bridge the gap between students and opportunities in the job market. We aim to empower students with the insights they need to make informed career decisions and connect them with organizations that align with their goals and aspirations.
          </p>
          <p className="text-lg text-purple-800 mb-5">
            Our platform leverages data from previous interns and employees to provide personalized recommendations, reviews, and valuable resources that simplify the job search process. Whether you are just starting your career or looking for new challenges, TalentFlow is here to help you navigate your journey.
          </p>
          <p className="text-lg text-purple-800 mb-5">
            Join us in shaping the future of talent acquisition and career development. Together, we can create pathways to success for students everywhere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
