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
import { Card, Collaborations, CollabTitle, FloatCard, GitChart, HeaderTitle, SectionDivider, WizardCollabTitle } from '../components/index.components';
import { useDataContext } from '../contexts/context.data';

//import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 54.15 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'GitChart'     
 * 
 * Notes: All the imports commented are sub components of 
 * HomePageComponent
*/

const CollabTitleData = [
  { id: 1, title: 'Daily Contributions !' },
  { id: 2, title: 'Lets Flow together! ' }
];

const HomePageComponent = () => {

    const [{ title: firstTtile }, { title:secondTitle }] = CollabTitleData;

 const { data_test } = useDataContext()
    
    return (
        <>
            <HeaderTitle />
            <Card />
            <FloatCard />
            <SectionDivider />
            <WizardCollabTitle />
            <Collaborations>
                <CollabTitle title={firstTtile} />
                <GitChart />
            </Collaborations>
            <p>{ data_test }</p>
        </>
    )
}

export default HomePageComponent;