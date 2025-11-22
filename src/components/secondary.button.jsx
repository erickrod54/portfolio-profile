import styled from 'styled-components'

/**Portfolio-erick - version 55.02  - SecondaryButton - Features:\
 * 
 * * --> Refacotring 'SecondaryButton' 
 * 
 * * Notes: Refactored to accept onClick and use the button element correctly.
 */

export const AbsoluteButtonWrapper = styled.div`
  position:absolute;
  top:40px;
  right:40px;
  width:auto;
`

const SecondaryWrapper = styled.button`
    // Apply the visual styles directly to the styled button (&)
    width: 131px;
    height: 51px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;
    border: none; // Prevent default button border
    padding: 0; // Remove default button padding
    
    background: linear-gradient(
        to bottom right,
        #2e8eff 0%,
        rgba(46, 142, 255, 0) 30%
    );
    background-color: rgba(46, 142, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
        background-color: rgba(46, 142, 255, 0.7);
        box-shadow: 0 0 10px rgba(46, 142, 255, 0.5);
        outline: none;
    }

    // Target the inner div style using a specific class or child selector
    .user-profile-inner {
        width: 127px;
        height: 47px;
        border-radius: 13px;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        color: #fff;
        font-weight: 600;
    }

    .user-profile-inner svg {
        width: 27px;
        height: 27px;
        fill: #fff;
    }
`

// passing props - including the onClick action ---
const SecondaryButton = ({ secondary_text, ...props }) => {
    return (
        <AbsoluteButtonWrapper>
            <SecondaryWrapper 
                aria-label={secondary_text}
                {...props} // <-- here the onClick is pass 
            >
                <div className="user-profile-inner">
                    <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <g data-name="Layer 2" id="Layer_2">
                        <path
                        d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"
                        ></path>
                    </g>
                    </svg>
                    <p>{secondary_text}</p>
                </div>
            </SecondaryWrapper>
        </AbsoluteButtonWrapper>
    )   
}

export default SecondaryButton;
