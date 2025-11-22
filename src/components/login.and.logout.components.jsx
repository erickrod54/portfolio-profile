import { useAuth0 } from '@auth0/auth0-react';
import SecondaryButton from './secondary.button';

/**Portfolio-erick - version 55.01 - AuthenticationButtons -
* Features:

    --> Building 'AuthenticationButtons' Vite version

* Notes: Migrating styled components
**/

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <SecondaryButton secondary_text={'Log in'} onClick={() => loginWithRedirect()} />
  );
};


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <SecondaryButton secondary_text={'Log Out'} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} />
  );
};

export const AuthenticationButtons = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <SecondaryButton secondary_text={'.Loading'}/>;
    }

    // Display the appropriate button based on authentication status
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
