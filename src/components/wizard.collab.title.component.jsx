import styled from "styled-components";
import { WaterTitle } from "./index.components";

/**Portfolio-erick - version 20.11 - WizardCollabTitle - Features:
 * 
 *      --> Building 'WizardCollabTitle'
 * 
 * Notes: This is the component title for open source collab 
 * section
 */

/** Styled Components for new Portfolio - START */

const WizardCollabWrapper = styled.div`

`

const WizardCollabTitle = () => {

    return(
        <WizardCollabWrapper>
            {/**here i am passing down test data */}
            <WaterTitle title={'testing water title'}/>
        </WizardCollabWrapper>
    )
}

export default WizardCollabTitle;