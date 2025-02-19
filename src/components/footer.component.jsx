import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { CenterList, FooterCenter, FooterContainer } from "../styled-components/styled.components";

/**Portfolio-erick - version 6.17 - Footer - Features:
 * 
 *      --> Adding 'FooterCenter' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */



const CenterListItem = styled.li`

`

const FooterRight = styled.div`
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const AnchorTag = styled.a`

`
const Footer = () => {

    const { social } = usePortfolioContext()

    return(
        <FooterContainer>
            <FooterCenter>
                <CenterList>
                    <CenterListItem>
                        <p>
                            &copy; { new Date().getFullYear()}        
                        </p>
                    </CenterListItem>
                    <CenterListItem>
                        <p>
                            Erick Rodriguez  |  Systems Engineer
                        </p>
                    </CenterListItem>
                    <CenterListItem>
                        <p>
                            All Rights reserved
                        </p>
                    </CenterListItem>
                </CenterList>
            </FooterCenter>
            <FooterRight>
                {social.map((net) => {
                    const { name, url, icon } = net;

                    return(
                       <AnchorTag key={name} href={url}>
                       <ul>
                            <li>
                                <span>   
                                {icon}
                                </span>
                            </li>
                       </ul>
                       </AnchorTag>
                    )
                })}
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer;