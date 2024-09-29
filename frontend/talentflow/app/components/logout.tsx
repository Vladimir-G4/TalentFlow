import React, { useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 text-lg font-semibold"
            style={{
                fontFamily: 'var(--font-poppins-medium)',
            }}
        >
            Log Out
        </button>
    );
}

export default LogoutButton;
