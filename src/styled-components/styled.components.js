import styled from "styled-components"

/**Portfolio-erick - version 7.09 - styled.components - Features:
 * 
 *      --> writting 'HeaderWrapper' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

export const HeaderWrapper = styled.section`
    display: grid;
    margin: 2rem;
    padding: 2rem;
    grid-column: container-start / container-end;
    height: fit-content;
    background: linear-gradient(to left, rgb(48, 7, 82) 0%, rgba(0, 128, 128, 1) 100%);
    border-radius: 4rem;
`

export const ButtonsList = styled.ul`

`

export const ButtonsWrapper = styled.section`
    display: grid;
    place-content: center;
    width: 5vw;
    height: 5vh;
    border-radius: 0.7rem;
    cursor: pointer;
`

export const EachBtn = styled.button`
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

export const AnchorTag = styled.a`

`

export const FooterRight = styled.div`
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const CenterListItem = styled.li`

`

export const CenterList = styled.ul`

`

export const FooterCenter = styled.div`
    justify-self: end;
` 
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