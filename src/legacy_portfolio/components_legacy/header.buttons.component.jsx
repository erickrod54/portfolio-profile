import styled from "styled-components";
import {  EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 19.01 - HeaderButtons - Features:
 * 
 *      --> Migrating back 'EachBtn' 
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

   const EachBtn = styled.button`
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: var(--clr-white);
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 2px solid var(--clr-white);;
    transition: 0.5s ease;
    user-select: none;

    &:hover,:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff,
                0 0 20px #008cff,
                0 0 50px #008cff,
                0 0 100px #008cff;
    cursor: pointer;
    }

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