import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";

/**Portfolio-erick - version 18.16 - HeaderComponent - Features:
 * 
 *      --> Clearing 'HeaderButtonsWrapper' import 
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */


const HeaderWrapper = styled.section`
   display: grid;
   margin: 2rem;
   padding: 2rem;
   grid-column: container-start / container-end;
   height: fit-content;
   background: linear-gradient(to left, rgb(48, 7, 82) 0%, rgba(0, 128, 128, 1) 100%);
   border-radius: 4rem;
`

const HeaderLogo = styled.div`
    grid-column: col-start 0 / col-end 1;
`;

const HeaderButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem;
    grid-column: col-start 7 / col-end 8;
`;

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