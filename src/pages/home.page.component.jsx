import { Card, Collaborations,
         CollabTitle,
         FloatCard,
         GitChart,
         HeaderTitle,
         SectionDivider,
         WizardCollabTitle } from "../components/index.components";

import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 43.20- HomePageComponent -
 * Features:
 * 
 *      --> Adding 'GitChart' to HomePageComponent 
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
        </>
    )
}

export default HomePageComponent;