import styled from "styled-components";
import { ButtonsList, ButtonsWrapper, EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 18.18 - HeaderButtons - Features:
 * 
 *      --> Migrating back 'ButtonsWrapper'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */


const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    /**className={'header--buttons--each' ? 'header--buttons--each' : 'header--buttons--each-small'} */

const ButtonsWrapper = styled.section`
    display: grid;
    place-content: center;
    width: 5vw;
    height: 5vh;
    border-radius: 0.7rem;
    cursor: pointer;
`

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