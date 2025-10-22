// src/pages/Dashboard.jsx (Create this new component)
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'wouter'; // Important for redirecting unauthenticated users
import { AuthenticationButtons } from '../components/login.and.logout.components';

/**Portfolio-erick - version 52.04 - AvatarPicture -
* Features:

    --> Destructuring 'secured_area' from 'DashboardAuthData'

* Notes: Migrating styled components
**/
const DashboardAuthData = [
    {
        name:'Loading user session...',
        placement:'isLoading flow'
    },{
        name:'Dashboard: Secure Area',
        placement:'authentication body'
    },{
        name:'Welcome,',
        placement:'auth message'
    }
]
const DashboardComponent = () => {

    const [{name:auth_flow_msg}, { name:secured_area }] = DashboardAuthData;

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        // Show your loading state while Auth0 is checking the session
        return <p>{auth_flow_msg}</p>;
    }

    if (!isAuthenticated) {
        // Redirect unauthenticated users back to the home page or login page
        return <Redirect to="/" />;
    }

    // User is authenticated, display dashboard content
    return (
        <div>
            <AuthenticationButtons />
            <h2>Dashboard: Secure Area</h2>
            <p>Welcome, {user.name}!</p>
            {/* ... rest of your dashboard UI ... */}
        </div>
    );
};

// You'll import this into App.js
export default DashboardComponent;
