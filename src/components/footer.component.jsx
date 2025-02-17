import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";


/**Portfolio-erick - version 6.08 - Footer - Features:
 * 
 *      --> writting 'FooterCenter' 
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

const Footer = () => {

    const { social } = usePortfolioContext()

    return(
        <FooterContainer>
            <FooterCenter>
                <ul>
                    <li>
                        <p>
                            &copy; { new Date().getFullYear()}        
                        </p>
                    </li>
                    <li>
                        <p>
                            Erick Rodriguez  |  Systems Engineer
                        </p>
                    </li>
                    <li>
                        <p>
                            All Rights reserved
                        </p>
                    </li>
                </ul>
            </FooterCenter>
            <div className="footer--right">
                {social.map((net) => {
                    const { name, url, icon } = net;

                    return(
                       <a key={name} href={url}>
                       <ul>
                            <li>
                                <span>   
                                {icon}
                                </span>
                            </li>
                       </ul>
                       </a>
                    )
                })}
            </div>
        </FooterContainer>
    )
}

export default Footer;