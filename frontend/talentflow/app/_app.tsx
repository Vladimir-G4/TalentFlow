// pages/_app.tsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const MyApp = ({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) => {
  let redirectUri;

  if (typeof window !== "undefined") {
    redirectUri = window.location.origin;
  }
  
  return (
    <Auth0Provider
      domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
      clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
