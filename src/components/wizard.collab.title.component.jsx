import styled from "styled-components";
import { WaterTitle } from "./index.components";

/**Portfolio-erick - version 20.12 - WizardCollabTitle - Features:
 * 
 *      --> Changing test to 'water'
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
            <WaterTitle title={'water'}/>
        </WizardCollabWrapper>
    )
}

export default WizardCollabTitle;