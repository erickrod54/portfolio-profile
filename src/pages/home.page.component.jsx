import { Card, Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         GitFlowComponent,
         HeaderTitle,
         SectionDivider,
         WizardCollabTitle } from "../components/index.components";

import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 44.01- HomePageComponent -
 * Features:
 * 
 *      --> Adding 'GitFlowComponent' to HomePageComponent 
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
            <GitChart/>
         </Collaborations>
         <Collaborations>
            <GitFlowComponent />
         </Collaborations>
        </>
    )
}

export default HomePageComponent;