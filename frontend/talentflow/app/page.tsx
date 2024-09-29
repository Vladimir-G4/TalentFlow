'use client';
import React, { useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation'; 
import bgImage from './images/bg.png';
import TalentFlowBG from './images/talentflowbg.png';
import LoginButton from './components/login';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const router = useRouter();
  let redirectUri;

  if (typeof window !== "undefined") {
    redirectUri = window.location.origin;
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Left Half Circle SVG - Rotated 90 degrees */}
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

      {/* Bottom Right Half Circle SVG with New Gradient */}
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

      <div className="p-10 z-10">
        <h3 className="text-4xl font-bold text-white">TalentFlow</h3>
        <h6 className="text-lg text-white">Connecting Talents with Opportunities</h6>
      </div>

      <div className="flex-grow flex items-center justify-center z-10">
        <div className="relative bg-white bg-opacity-40 rounded-lg shadow-lg p-10 pt-7r max-w-md w-full text-center">
          <img
            src={TalentFlowBG.src}
            alt="Profile"
            className="w-40 h-40 rounded-full absolute -top-20 left-1/2 transform -translate-x-1/2"
          />
          <h3
            className="text-xl font-semibold text-purple-800 mb-5"
            style={{
              fontFamily: 'var(--font-poppins-medium)',
            }}
          >
            Welcome Back to TalentFlow!
          </h3>
          <h4 className="text-lg text-purple-600 mb-5">
            We're thrilled to have you here. Let's explore your opportunities!
          </h4>
          <div className="flex flex-col space-y-4 mt-4">
            <Auth0Provider
              domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
              clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
              authorizationParams={{
                redirect_uri: redirectUri,
              }}
            >
            <LoginButton /> 
            </Auth0Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
