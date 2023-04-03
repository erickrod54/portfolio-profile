import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**Portfolio-erick - version 6.04 - UnderConstructionPage -
 * Features:
 * 
 *      --> Building 'UnderConstructionPage'
 * 
 * Notes: this component will display an under
 * construction page.
 */

const UnderConstructionPage = () => {
    
    const { constructionbkg } = useAppContext()
    
    return(
        <ConstructionWrapper id='under-construction-page' constructionbkg={constructionbkg}>
            <div className="under-construction-page--center--msg">
                <h2>Im bulding features at this momement</h2>
            </div>
        </ConstructionWrapper>
    )
}

const ConstructionWrapper = styled.section`
    background-image: url(${({constructionbkg}) => constructionbkg});
    
`

export default UnderConstructionPage;