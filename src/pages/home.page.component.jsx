import { Card, Collaborations, CollabTitle, FloatCard, HeaderTitle, SectionDivider, WizardCollabTitle } from "../components/index.components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 43.17 - HomePageComponent -
 * Features:
 * 
 *      --> Destructuring 'CollabTitleData' from context
 * 
 * Notes: This file is gonna be changed later.
*/

const HomePageComponent = () => {
    
    const { CollabTitleData } = usePortfolioContext()

    return(
        <>
         <HeaderTitle />
         <Card/>
         <FloatCard />
         <SectionDivider />
         <WizardCollabTitle />
         <Collaborations>
            <CollabTitle/>
         </Collaborations>
        </>
    )
}

export default HomePageComponent;