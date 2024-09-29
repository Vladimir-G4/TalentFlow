'use client';
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/login';
import bgImage from './images/bg.png';

const Home = () => {
  // Get the origin once the component mounts to avoid accessing window on the server
  const [redirectUri, setRedirectUri] = React.useState('');

  React.useEffect(() => {
    setRedirectUri(window.location.origin);
  }, []);

  return (
    <Auth0Provider
      domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
      clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${bgImage.src})`, // Use bgImage.src for the URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-10">
          <h3 className="text-4xl font-bold text-white">TalentFlow</h3>
          <h6 className="text-lg text-white">Connecting Talents with Opportunities</h6>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="relative bg-white bg-opacity-40 rounded-lg shadow-lg p-8 pt-16 max-w-md w-full text-center">
            <img
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full absolute -top-20 left-1/2 transform -translate-x-1/2"
            />
            <h3 className="text-xl font-semibold text-purple-800 mt-10">Welcome Back!</h3>
            <div className="flex flex-col space-y-4 mt-4">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </Auth0Provider>
  );
};

export default Home;
