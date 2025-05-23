import styled from "styled-components";
import {  WaterTitle } from "./index.components";
import { faHatWizard, faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**Portfolio-erick - version 20.18 - WizardCollabTitle - Features:
 * 
 *      --> Adding 'faHatWizard' icon
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
display: flex;
justify-content: center; 
align-items: center;
width: 100%; 
gap: 2rem; 
`

const WizardCollabTitle = () => {

    return(
        <WizardCollabWrapper>
            <FontAwesomeIcon icon={faWandSparkles} style={{color: "#FFD43B", width:'30px', height:'30px'}} />
            <WaterTitle title={firstTitle}/>
            <WaterTitle title={secondTitle}/>
            <FontAwesomeIcon icon={faHatWizard} style={{color: "#B197FC", width:'30px', height:'30px', marginLeft:'2rem'}} />
        </WizardCollabWrapper>
    )
}

export default WizardCollabTitle;