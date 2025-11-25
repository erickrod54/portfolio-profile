import TeamGrid from "../components/team.grid.component";
import FooterAllPages from "./footer.all.pages";

/**Portfolio-erick - version 55.08 - TeamPage -
 * Features:
 * 
 *      --> Building 'TeamPage'     
 * 
 * Notes: This page will have information related to the 
 * team and is composed by FooterAllPages ( as Layout )
 * and by TeamGrid ( as the Card holder for every avatar 
 * memeber )
 */

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Erick Rodríguez",
        title: "Founder & Lead Developer",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Erick",
        bio: "Focused on clean architecture and performance optimization.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        id: 2,
        name: "Carolina Bautista",
        title: "Design Lead",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Sofia",
        bio: "Bridging the gap between beautiful aesthetics and intuitive UX.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        id: 3,
        name: "Fernando Elorza",
        title: "Financial Strategist",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Marcus",
        bio: "Driving growth through data-informed content and outreach.",
        socials: { twitter: "#", linkedin: "#" }
    },
    // Add more members here...
];

const TeamPage = () => { 
    return (
        <FooterAllPages>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{color: '#FFF', fontSize: '2em'}}>Meet Our Visionary Team</h1>
            <p style={{color: '#ccc'}}>The dedicated professionals making the difference.</p>
        </div>
            <TeamGrid members={TEAM_MEMBERS}/>
        </FooterAllPages>
    )
}

export default TeamPage;