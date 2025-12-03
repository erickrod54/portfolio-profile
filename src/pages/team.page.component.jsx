import React from 'react';
import { FooterAllPages } from './index.page.components'
import TeamGrid from '../components/team.grid.component';
import { useDataContext } from '../contexts/context.data';

/**Portfolio-erick - version 56.02 - TeamPage - Features:
 * 
 *      --> Building 'TeamPage' 
 * 
 * Notes: This component receives 'children' components
 */

const TeamPage = () => {

    const { TEAM_MEMBERS } = useDataContext();

    return (
        <FooterAllPages>
            
            {/* Optional: Add a brief introduction or heading here */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{color: '#FFF', fontSize: '2em'}}>Meet Our Visionary Team</h1>
                <p style={{color: '#ccc'}}>The dedicated professionals making the difference.</p>
            </div>
            
            {/* The main team content */}
            <TeamGrid members={TEAM_MEMBERS} />
            
        </FooterAllPages>
    );
};

export default TeamPage;
