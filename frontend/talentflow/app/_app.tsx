// pages/_app.tsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const MyApp = ({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) => {
  return (
    <Auth0Provider
      domain="dev-hid4tkzfxe7l2y4n.us.auth0.com"
      clientId="sclQKRrckfPQ4gl30aGDdyHFQFcwHvo2"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
