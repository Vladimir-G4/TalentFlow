import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  let redirectUri: string;

  if (typeof window !== "undefined") {
    redirectUri = window.location.origin;
  }

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: redirectUri } })}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 text-md font-medium flex items-center space-x-2"
    >
      {/* Optional Logout Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
        />
      </svg>
      <span>Log Out</span>
    </button>
  );
};

export default LogoutButton;

