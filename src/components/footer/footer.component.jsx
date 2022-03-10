import React from "react";
import { social } from "../../data";

/**Portfolio - Footer Component - version 1 - Features:
 * 
 *          -->importing 'social' data 
 *          -->mapping social data for every 'link'
 * 
 */
const Footer = () => {

    return(
        <>
            <h3>this is the footer</h3>
            <section>
                {social.map((link) => {
                    const { id, url, icon } = link
                    return(
                        <ul key={id}>
                            <li>
                                <a href={url}>{icon}</a>
                            </li>
                        </ul>
                    )
                })}
            </section>
        </>
    )
}

export default Footer;