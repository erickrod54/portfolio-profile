import React from "react";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 6.06 - Footer - Features:
 * 
 *      --> Refactoring footer.
 * 
 *      --> Applying naming convention.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const Footer = () => {

    const { social } = usePortfolioContext()

    return(
        <section id='footer'>
            <div className="footer--center">
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
            </div>
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
        </section>
    )
}

export default Footer;