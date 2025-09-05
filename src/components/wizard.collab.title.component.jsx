import {  WaterTitle } from "./index.components";
import { faHatWizard, faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from '../context.js';
import { WizardCollabWrapper } from '../styled-components/styled.components.index.js';

/**Portfolio-erick - version 40.19 - WizardCollabTitle - Features:
 * 
 *      --> Placing 'yellow_mustard' from context
 * 
 * Notes: This is the component title for open source collab 
 * section
 */

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
    
    const { WaterTitleData, IconColorsData } = usePortfolioContext()
    
    const [{ color:yellow_mustard },{ color:light_purple } ] = IconColorsData;
    // Destructure the second element (index 1) of the array - by leaving the 
    // comma - before of that is the index 0 and so on after 1 will be 2..
    const [{ title: firstTitle }, { title: secondTitle }] = WaterTitleData;

    return(
        <WizardCollabWrapper>
            <FontAwesomeIcon icon={faWandSparkles} style={{color: yellow_mustard, width:'30px', height:'30px'}} />
            <WaterTitle title={firstTitle}/>
            <WaterTitle title={secondTitle}/>
            <FontAwesomeIcon icon={faHatWizard} style={{color: "#B197FC", width:'30px', height:'30px', marginLeft:'2rem'}} />
        </WizardCollabWrapper>
    )
}

export default WizardCollabTitle;

