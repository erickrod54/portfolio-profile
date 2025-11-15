import { faHatWizard, faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { WaterTitle } from "./index.components";

/**Portfolio-erick - version 54.11 - WizardCollabTitle - Features:
 * 
 *      --> Migrating 'WizardCollabTitle' to Vite 
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

const WaterTitleData = [
  { id: 1, title: 'Open' },
  { id: 2, title: 'Sourcerer' }
];

const IconColorsData = [
    {
      name:'faWandSparkles',
      color:'#FFD43B'       
    },{
      name:'faHatWizard',
      color:'#B197FC'       
    }
]

const WizardCollabTitle = () => {
    
    const [{ color:yellow_mustard },{ color:light_purple } ] = IconColorsData;
    // Destructure the second element (index 1) of the array - by leaving the 
    // comma - before of that is the index 0 and so on after 1 will be 2..
    const [{ title: firstTitle }, { title: secondTitle }] = WaterTitleData;

    return(
        <WizardCollabWrapper>
            <FontAwesomeIcon icon={faWandSparkles} style={{color: yellow_mustard, width:'30px', height:'30px'}} />
            <WaterTitle title={firstTitle}/>
            <WaterTitle title={secondTitle}/>
            <FontAwesomeIcon icon={faHatWizard} style={{color: light_purple, width:'30px', height:'30px', marginLeft:'2rem'}} />
        </WizardCollabWrapper>
    )
}

export default WizardCollabTitle;

