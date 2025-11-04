//import { Card, Collaborations,
//         CollabTitle,
//         FloatCard,
//         Footer,
//         GitChart,
//         GitFlowComponent,
//         HeaderTitle,
//         SectionDivider,
//         WizardCollabTitle } from "../components/index.components";
//import { AuthenticationButtons } from "../components/login.and.logout.components";
import Card from '../components/card.component';
import HeaderTitle from '../components/header.title.component';
//import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 53.08 - HomePageComponent -
 * Features:
 * 
 *      --> Migrating HomePageComponent to Vite version'   
 * 
 * Notes: All the imports commented are sub components of 
 * HomePageComponent
*/

const HomePageComponent = () => {
    
    //const { CollabTitleData } = usePortfolioContext();

    //const [{ title: firstTtile }, { title:secondTitle }] = CollabTitleData;

    return(
        <>
            <HeaderTitle />
            <Card />
        </>
    )
}

export default HomePageComponent;