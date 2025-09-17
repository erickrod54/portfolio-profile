import { Card, Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         HeaderTitle,
         SectionDivider,
         WizardCollabTitle } from "../components/index.components";

import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 44.00- HomePageComponent -
 * Features:
 * 
 *      --> Adding 'Collaborations' section 
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
         
         </Collaborations>
        </>
    )
}

export default HomePageComponent;