import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import { HeaderButtonsWrapper, HeaderLogo, HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 9.16 - HeaderComponent - Features:
 * 
 *      --> Clearing Imports
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */



const HeaderComponent = () => {

    const { openModal, NavBarData } = usePortfolioContext()

    return(
        <HeaderWrapper>
                <HeaderLogo>
                    <img src={logo} alt='logo'/>
                </HeaderLogo>
                <HeaderButtonsWrapper>
                {NavBarData.map((item) => {
                    const { id } = item
                    return(
                        <HeaderButtons  
                                key={id}{...item} openModal={openModal}/>
                    )
                })} 
                </HeaderButtonsWrapper>
        </HeaderWrapper>
    )
}

export default HeaderComponent;