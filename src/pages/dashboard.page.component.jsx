// src/pages/Dashboard.jsx (Create this new component)
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'wouter'; // Important for redirecting unauthenticated users
import { AuthenticationButtons } from '../components/login.and.logout.components';
import { first_route } from '../App';
import { usePortfolioContext } from '../context';

/**Portfolio-erick - version 52.18 - DashboardComponent -
* Features:

    --> Removing local 'DashboardAuthData'    

* Notes: Migrating styled components
**/

const DashboardComponent = () => {

    const { DashboardAuthData } = usePortfolioContext();

    const [{name:auth_flow_msg}, { name:secured_area }, {name: secure_msg }] = DashboardAuthData;

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        // Show your loading state while Auth0 is checking the session
        return <p>{auth_flow_msg}</p>;
    }

    if (!isAuthenticated) {
        // Redirect unauthenticated users back to the home page or login page
        return <Redirect to={first_route} />;
    }

    // User is authenticated, display dashboard content
    return (
        <div>
            <AuthenticationButtons />
            <h2>{secured_area}</h2>
            <p>{secure_msg}, {user.name}!</p>
            {/* ... rest of your dashboard UI ... */}
        </div>
    );
};

// You'll import this into App.js
export default DashboardComponent;
