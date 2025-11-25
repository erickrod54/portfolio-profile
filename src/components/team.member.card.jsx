import React from 'react';
import styled from 'styled-components';

/**Portfolio-erick - version 55.08 - TeamMemberCard -
 * Features:
 * 
 *      --> Building 'TeamMemberCard'      
 * 
 * Notes: 'TeamMemberCard' is holding the Avatar
 * of the Team.
 */


const CardWrapper = styled.div`
    background-color: #1a1a1a; /* Dark background */
    border: 1px solid #333;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%; /* Circle avatar */
    object-fit: cover;
    margin: 0 auto 20px;
    border: 3px solid #2e8eff; /* Highlight color border */
`;

const Name = styled.h3`
    font-size: 1.5em;
    color: #fff;
    margin-bottom: 5px;
`;

const Title = styled.p`
    font-size: 1em;
    color: #bada55; /* Highlight color for title */
    margin-bottom: 15px;
    font-weight: 500;
`;

const Bio = styled.p`
    font-size: 0.9em;
    color: #ccc;
    min-height: 40px; /* Ensures uniform height regardless of bio length */
`;

const TeamMemberCard = ({ member }) => {
    return (
        <CardWrapper>
            <Avatar src={member.image} alt={member.name} />
            <Name>{member.name}</Name>
            <Title>{member.title}</Title>
            <Bio>{member.bio}</Bio>
            {/* Social links (e.g., icons for Twitter/LinkedIn) would go here */}
        </CardWrapper>
    );
};

export default TeamMemberCard;
