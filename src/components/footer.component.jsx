import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";


/**Portfolio-erick - version 6.12 - Footer - Features:
 * 
 *      --> writting 'AnchorTag' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const FooterContainer = styled.section`
  display: grid;
  margin: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(2, 1fr); /* divide container into 3 equal columns */
  grid-column: container-start / container-end;
  background: linear-gradient(
    to left,
    rgb(48, 7, 82) 0%,
    rgba(0, 128, 128, 1) 100%
  );
  border-radius: 2rem;
  margin-left: 4.3rem;
  margin-right: 4.3rem;
`

const FooterCenter = styled.div`
  justify-self: end;
`

const CenterList = styled.ul`

`

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