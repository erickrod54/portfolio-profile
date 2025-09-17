import { Card, Collaborations, CollabTitle, FloatCard, HeaderTitle, SectionDivider, WizardCollabTitle } from "../components/index.components";

/**Portfolio-erick - version 43.16 - HomePageComponent -
 * Features:
 * 
 *      --> Adding 'CollabTitle' to HomePageComponent
 * 
 * Notes: This file is gonna be changed later.
 */

const HomePageComponent = () => {

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