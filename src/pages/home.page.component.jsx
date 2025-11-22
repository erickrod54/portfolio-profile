//import { AuthenticationButtons } from "../components/login.and.logout.components";
import Footer from '../components/footer.component';
import { Card,
         Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         GitFlowComponent, HeaderTitle, SectionDivider, WizardCollabTitle } from '../components/index.components';

import { AuthenticationButtons } from '../components/login.and.logout.components';

/**Portfolio-erick - version 55.01 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'AuthenticationButtons' to Vite version
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
    
    return (
        <>
            <AuthenticationButtons />
            <HeaderTitle />
            <Card />
            <FloatCard />
            <SectionDivider />
            <WizardCollabTitle />
            <Collaborations>
                <CollabTitle title={firstTtile} />
                <GitChart />
            </Collaborations>
            <Collaborations>
                <GitFlowComponent />
                <CollabTitle title={secondTitle}/>
            </Collaborations>
            <SectionDivider />
            <Footer />
        </>
    )
}

export default HomePageComponent;