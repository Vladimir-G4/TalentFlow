import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-xl font-semibold"
      style={{
        fontFamily: 'var(--font-poppins-medium)',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
