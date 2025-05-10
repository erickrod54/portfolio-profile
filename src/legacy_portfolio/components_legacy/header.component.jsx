import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import { HeaderButtonsWrapper, HeaderLogo, HeaderWrapper } from "../styled-components/styled.components";
import styled from "styled-components";

/**Portfolio-erick - version 18.12 - HeaderComponent - Features:
 * 
 *      --> Migrating back 'HeaderWrapper'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */



const HeaderComponent = () => {

    const { openModal, NavBarData } = usePortfolioContext()

 const HeaderWrapper = styled.section`
    display: grid;
    margin: 2rem;
    padding: 2rem;
    grid-column: container-start / container-end;
    height: fit-content;
    background: linear-gradient(to left, rgb(48, 7, 82) 0%, rgba(0, 128, 128, 1) 100%);
    border-radius: 4rem;
`

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