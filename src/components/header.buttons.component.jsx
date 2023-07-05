import React from "react";
import { styled } from "styled-components";

/**Portfolio-erick - version 6.08 - HeaderButtons - Features:
 * 
 *      --> Refactoring styles to add box shadow efffect.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */
const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    /**className={'header--buttons--each' ? 'header--buttons--each' : 'header--buttons--each-small'} */

    return(
        <section id='header--buttons--each'>
        <ul key={id}>
                       <EachBtn id="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </EachBtn>     
        </ul>
        </section>
    )
}

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
export default HeaderButtons;