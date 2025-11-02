import { Card, Collaborations,
         CollabTitle,
         FloatCard,
         Footer,
         GitChart,
         GitFlowComponent,
         HeaderTitle,
         SectionDivider,
         WizardCollabTitle } from "../components/index.components";
import { AuthenticationButtons } from "../components/login.and.logout.components";

import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 51.08 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'AuthenticationButtons'   
 * 
 * Notes: 'AuthenticationButtons' is to test Auth.
*/

const HomePageComponent = () => {
    
    const { CollabTitleData } = usePortfolioContext();

    const [{ title: firstTtile }, { title:secondTitle }] = CollabTitleData;

    return(
        <>
         <AuthenticationButtons />
         <HeaderTitle />
         <Card/>
         <FloatCard />
         <SectionDivider />
         <WizardCollabTitle />
         <Collaborations>
            <CollabTitle title={firstTtile}/>
            <GitChart/>
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