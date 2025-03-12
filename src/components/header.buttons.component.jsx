import { ButtonsList, ButtonsWrapper, EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 9.15 - HeaderButtons - Features:
 * 
 *      --> Clearing Imports.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */


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