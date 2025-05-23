import styled from "styled-components";
import { WaterTitle } from "./index.components";

/**Portfolio-erick - version 20.15 - WizardCollabTitle - Features:
 * 
 *      --> Placing 'WaterTitleData'
 * 
 * Notes: This is the component title for open source collab 
 * section
 */


const WaterTitleData = [
  { id: 1, title: 'Open' },
  { id: 2, title: 'Sourcerer' }
];

// Destructure the second element (index 1) of the array - by leaving the 
// comma - before of that is the index 0 and so on after 1 will be 2..
const [{ title: firstTitle }, { title: secondTitle }] = WaterTitleData;


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