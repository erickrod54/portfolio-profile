import React from 'react';
import styled from 'styled-components';
import { TeamMemberCard } from './index.components';

/**Portfolio-erick - version 56.04 - TeamGrid - Features:
 * 
 *      --> Fixing 'TeamMemberCard' import
 * 
 * Notes: This component receives 'children' components
 */


const GridContainer = styled.div`
    display: grid;
    gap: 30px; 
    padding: 40px 0;

    /* 💥 THIS LINE CENTERS THE ENTIRE GRID HORIZONTALLY 💥 */
    justify-content: center;

    /* Base layout: 1 column for mobile */
    /* Use auto-fit with minmax for responsiveness */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    /*
    Note: If you are explicitly defining columns, e.g., repeat(3, 1fr), 
    you might need a container with margin: 0 auto; if the GridContainer 
    itself doesn't span 100% of the viewport width. 
    However, using justify-content: center is the best approach for auto-fit grids.
    */

    /* Tablet/Desktop layout adjustments (if necessary) */
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

// --- React Component ---

const TeamGrid = ({ members }) => {
    return (
        <GridContainer>
            {members.map(member => (
                <TeamMemberCard key={member.id} member={member} />
            ))}
        </GridContainer>
    );
};

export default TeamGrid;
