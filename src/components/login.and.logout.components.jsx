import { useAuth0 } from '@auth0/auth0-react';
import {SecondaryButton} from './index.components.js';

/**Portfolio-erick - version 55.02 - AuthenticationButtons -
* Features:

    --> Implementing 'SecondaryButton' 

* Notes: Migrating styled components
**/

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <SecondaryButton
      secondary_text='Log in'
      onClick={() => loginWithRedirect()} />
  );
};


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <SecondaryButton
      secondary_text='Log out'
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
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