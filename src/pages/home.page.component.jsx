//import { AuthenticationButtons } from "../components/login.and.logout.components";
import Footer from '../components/footer.component';
import { Card,
         Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         GitFlowComponent, HeaderTitle, SectionDivider, WizardCollabTitle } from '../components/index.components';

/**Portfolio-erick - version 54.19 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'Footer' to Vite version     
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