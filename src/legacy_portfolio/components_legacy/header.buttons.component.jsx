import styled from "styled-components";
import {  EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 19.00 - HeaderButtons - Features:
 * 
 *      --> Clearing 'ButtonsList' import
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */


const ButtonsWrapper = styled.section`
    display: grid;
    place-content: center;
    width: 5vw;
    height: 5vh;
    border-radius: 0.7rem;
    cursor: pointer;
`

const ButtonsList = styled.ul`

`

const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    /**className={'header--buttons--each' ? 'header--buttons--each' : 'header--buttons--each-small'} */


    return(
        <ButtonsWrapper>
        <ButtonsList key={id}>
                       <EachBtn id="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </EachBtn>     
        </ButtonsList>
        </ButtonsWrapper>
    )
}


export default HeaderButtons;