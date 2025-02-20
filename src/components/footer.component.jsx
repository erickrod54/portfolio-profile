import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { AnchorTag, CenterList, CenterListItem, FooterCenter, FooterContainer, FooterRight } from "../styled-components/styled.components";

/**Portfolio-erick - version 6.20 - Footer - Features:
 * 
 *      --> Migrating 'AnchorTag' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

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