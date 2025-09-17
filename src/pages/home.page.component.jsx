import { Card, Collaborations, CollabTitle, FloatCard, HeaderTitle, SectionDivider, WizardCollabTitle } from "../components/index.components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 43.19 - HomePageComponent -
 * Features:
 * 
 *      --> Placing 'firstTtile' 
 * 
 * Notes: This file is gonna be changed later.
*/

const HomePageComponent = () => {
    
    const { CollabTitleData } = usePortfolioContext();

    const [{ title: firstTtile },] = CollabTitleData;
    return(
        <>
         <HeaderTitle />
         <Card/>
         <FloatCard />
         <SectionDivider />
         <WizardCollabTitle />
         <Collaborations>
            <CollabTitle title={firstTtile}/>
         </Collaborations>
        </>
    )
}

export default HomePageComponent;