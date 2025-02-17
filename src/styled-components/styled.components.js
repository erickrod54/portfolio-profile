import styled from "styled-components"

/**Portfolio-erick - version 6.13 - styled.components - Features:
 * 
 *      --> writting 'FooterContainer' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

export const FooterContainer = styled.section`
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