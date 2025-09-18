import { Card, Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         GitFlowComponent,
         HeaderTitle,
         SectionDivider,
         WizardCollabTitle } from "../components/index.components";

import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 44.04 - HomePageComponent -
 * Features:
 * 
 *      --> Placing 'secondTitle'  
 * 
 * Notes: This file is gonna be changed later.
*/

const HomePageComponent = () => {
    
    const { CollabTitleData } = usePortfolioContext();

    const [{ title: firstTtile }, { title:secondTitle }] = CollabTitleData;

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
            <CollabTitle title={secondTitle}/>
         </Collaborations>
        </>
    )
}

export default HomePageComponent;