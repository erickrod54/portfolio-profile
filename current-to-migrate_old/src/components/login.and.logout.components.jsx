// src/components/AuthButtons.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**Portfolio-erick - version 51.08 - AvatarPicture -
* Features:

    --> Building 'AuthenticationButtons' 

* Notes: Migrating styled components
**/

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>
      Log In (Try your Passkey!)
    </button>
  );
};


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export const AuthenticationButtons = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Display the appropriate button based on authentication status
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
