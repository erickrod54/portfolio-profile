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
import { useDataContext } from '../context.data.jsx';


//import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 53.13 - HomePageComponent -
 * Features:
 * 
 *      --> Implementing 'useDataContext' test    
 * 
 * Notes: All the imports commented are sub components of 
 * HomePageComponent
*/

const HomePageComponent = () => {
    
    //const { CollabTitleData } = usePortfolioContext();

    //const [{ title: firstTtile }, { title:secondTitle }] = CollabTitleData;

 const { data_test } = useDataContext()
    
    return (
        <>
            <HeaderTitle />
            <Card />
            <p>{ data_test }</p>
        </>
    )
}

export default HomePageComponent;