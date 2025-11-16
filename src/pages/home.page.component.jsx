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
import { Card, FloatCard, HeaderTitle, SectionDivider, WizardCollabTitle } from '../components/index.components';
import { useDataContext } from '../contexts/context.data';

//import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 54.12 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'WizardCollabTitle'     
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
            <FloatCard />
            <SectionDivider />
            <WizardCollabTitle />
            <p>{ data_test }</p>
        </>
    )
}

export default HomePageComponent;