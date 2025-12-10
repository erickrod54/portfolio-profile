import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'wouter'; 
import { AuthenticationButtons } from '../components/login.and.logout.components';
import DashboardLayout from '../components/dashboard.component.layout';

/**Portfolio-erick - version 56.07 - Card component -
* Features:

    -→> Building 'DashboardComponent' 

* Notes: The next components to migrate will be 
*  ProfileCard, and SocialComponent, by now 
* they will remain commented.
**/

const DashboardComponent = () => {

    const { isAuthenticated, isLoading } = useAuth0();
    
    // NOTE: 'user' object for the welcome messagee:
    // const { user, isAuthenticated, isLoading } = useAuth0(); 

    if (isLoading) {
        return <p>Loading user session...</p>; 
    }

    if (!isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div> 
            <AuthenticationButtons /> 
            <DashboardLayout />
        </div>
    );
};

export default DashboardComponent;
