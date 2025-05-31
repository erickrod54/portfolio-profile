import styled from "styled-components";
import {  WaterTitle } from "./index.components";
import { faHatWizard, faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from '../context.js';

/**Portfolio-erick - version 22.10 - WizardCollabTitle - Features:
 * 
 *      --> Providing 'WaterTitleData' from the context
 * 
 * Notes: This is the component title for open source collab 
 * section
 */




const WizardCollabWrapper = styled.div`
display: flex;
justify-content: center; 
align-items: center;
width: 100%; 
gap: 2rem; 
`

const WizardCollabTitle = () => {
    
    const { WaterTitleData } = usePortfolioContext()
    
    // Destructure the second element (index 1) of the array - by leaving the 
    // comma - before of that is the index 0 and so on after 1 will be 2..
    const [{ title: firstTitle }, { title: secondTitle }] = WaterTitleData;

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