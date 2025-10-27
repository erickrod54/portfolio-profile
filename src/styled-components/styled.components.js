import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, keyframes } from "styled-components"

/**Portfolio-erick - version 53.00  - styled.components - Features:
 * 
 *      --> Building 'AbsoluteButtonWrapper' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

/** Styled Components for new Portfolio - START */

/**UpdatingPageComponent - START */

export const AbsoluteButtonWrapper = styled.div`
  position:absolute;
  top:40px;
  left:40px;
  width:auto;
`

/**WizardCollabTitle styles - START */
export const WizardCollabWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%; 
  gap: 2rem; 
`

/**WaterTitle Comoonent styles */
export const Universe723 = keyframes`
    0%, 100% {
      clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
      54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
      51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
`
export /**the loader class is converted to a component the span are marked 
 * as direct child of the Loader styled component by '>'*/
const Loader = styled.div`
    position: relative; 
    width: 140px; 
    height: 60px; 
  
  & > span {
    position: absolute;
    color: #fff;
    /* Keep centering relative to the .loader div */
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-size: 38px;
    letter-spacing: 5px;
  }

  & > span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px rgb(128, 198, 255);
  }

  & > span:nth-child(2) {
  color: rgb(128, 198, 255);
  -webkit-text-stroke: 1px rgb(128, 198, 255);
  animation: ${Universe723} 3s ease-in-out infinite;
  }
`

export const AlterTitleSpan = styled.span`

`

export const WaterTitleWrapper = styled.div` 
  width: auto;
  align-self: center;
`;

export const TitleSpan = styled.span`

`

/**SectionDivider Styles */
export const DividerLine = styled.div`
  /* The actual visible line */
  width: 100%;
  height: 1px;
  opacity: 0.7; /* Soften the line color */

  /* Dynamically set the background color using props */
  background-color: ${props => props.$color}; 
`;

export const DividerContainer = styled.div`
  /* This outer div acts as a container to control the divider's width */
  width: 80%; /* Adjust this to control how long the line is */
  margin: 50px auto; /* Centers the divider and provides vertical spacing */
  height: 1px; /* The container height is minimal, the line inside does the work */
  display: flex;
  align-items: center;
  justify-content: center;
`;


/**IconComponent styles */
 export const IconComponentWrapper = styled.svg`

 `
  /**HeadertTitle styles  - START */

  export const HeaderTitleWrapper = styled.div`
  padding-top: 4rem;
  
  }
`;

  const backgroundAnimation = keyframes`
  @keyframes {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 400%;
    }
    100% {
      background-position: 0%;
    }
`

  export const BackText = styled.span`

  `
  export const FrontText = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    background: var(--color-gar);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    overflow: hidden;
    transition: all 1s;
    animation: ${backgroundAnimation} 8s infinite;
    border-bottom: 2px solid transparent;

    ${props =>
      props.$isFilled &&
      css`
      width: 100%;
      border-bottom: 2px solid #03a9f4;
      -webkit-text-stroke: 1px var(--ani-color);
      `}
      
  
  `

  export const ButtonTitle = styled.button`
    position: relative;
    border: none;
    background: transparent;
    --stroke-color: #ffffff7c;
    --ani-color: rgba(95, 3, 244, 0);
    --color-gar: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    letter-spacing: 3px;
    font-size: 2em;
    font-family: "Arial";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--stroke-color);
    cursor: pointer;
  
  
    &:hover ${FrontText} {
      width: 100%;
      border-bottom: 2px solid #03a9f4;
      -webkit-text-stroke: 1px var(--ani-color);
    }
  `

  /**GitFlow Component styles - START */
  export const GitFlowWrapper = styled.div`


`

  export const GitFlowCardBox = styled.div`
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: #111215;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
`

  export const HeaderBox = styled.div`
    background: #0b0d10;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid #1d1f23;
`

  export const ContentBox = styled.div`
    height: 100%;
    overflow: hidden;
 `
  export const PrsBox = styled.div`
    margin: 12px;
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #343539;
    border-radius: 6px;
    overflow: auto;

    &::-webkit-scrollbar {
    width: 0;
    }

`

  export const Pr = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    outline: 1px solid #343539;
    padding: 8px;
`

  export const PrDesc = styled.div`
    padding-left: 2px;
    font-size: 10px;
    color: #797d86;
`

  export const PrTitle = styled.div`
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
    color: #4493f8;
    }

`

  export const PrText = styled.div`
    display: flex;
    flex-direction: column;
  `
  export const PrIcon = styled.div`
    display: flex;
    width: 1em;
    height: 1em;
    fill: #63d188;
`

  export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
`;

  export const StyledCheckbox = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  border-radius: 2px;
  outline: 1px solid #343539;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: hsl(0 0% 100% / 5%);
  }

  &:active {
    outline-color: #2a2c2f;
    background: hsl(0 0% 100% / 0%);
  }

  /* Checked State (linked to HiddenCheckbox) */
  ${({ checked }) =>
    checked &&
    css`
      outline-color: #797d86;
      &::before {
        content: "";
        position: absolute;
        pointer-events: none;
        width: 4px;
        height: 8px;
        border-bottom: 2px solid;
        border-right: 2px solid;
        border-color: #fff;
        transform: translate(5.5px, 2.5px) rotate(45deg);
      }

      &:active {
        outline-color: #56585c;
      }
    `}
`;

  export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

  export const BtmHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    gap: 8px;
    color: #fff;
    fill: #fff;
`

  export const TabStyled = styled.div`
    position: relative;
    padding: 4px 4px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    cursor: pointer;
    isolation: isolate;

     &::before{
        content: "";
        position: absolute;
        background: #fff;
        border-radius: 8px;
        opacity: 0;
        inset: 0;
        bottom: 8px;
        z-index: -1;
        transition: 0.3s;
     }

     &:hover::before {
        opacity: 0.07;
     }

  /* ✅ Active tab state (preserving original CSS) */
  ${({ active }) =>
    active &&
    css`
        border-bottom: 2px solid #e98463;
    `}
`

  export const TabText = styled.div`

  `
  export const TabIcon = styled.div`
    width: 1em;
    height: 1.25em;
    fill: #797d86;        
`

  export const TopHeader = styled.div`
    background: #0b0d10;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    padding-top: 10px;
`

  export const Pfp = styled.div`
    cursor: pointer;
    display: flex;
    width: 1.75em;
    height: 1.75em;
    border-radius: 100%;
    background-color: #fff1;
    background-size: cover;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0GVYSWZJSSoACAAAAAoAAAEEAAEAAAAgAAAAAQEEAAEAAAAgAAAAAgEDAAMAAACGAAAAEgEDAAEAAAABAAAAGgEFAAEAAACMAAAAGwEFAAEAAACUAAAAKAEDAAEAAAADAAAAMQECAA0AAACcAAAAMgECABQAAACqAAAAaYcEAAEAAAC+AAAAAAAAAAgACAAIADcCAAAUAAAANwIAABQAAABHSU1QIDIuMTAuMzgAADIwMjQ6MTI6MTMgMTI6NTg6NTYAAQABoAMAAQAAAAEAAAAAAAAAJQVvNQAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAHMVfU6UiLSJ2EHEIWF20i4o41ioUoUKoFVp1MLn0C5o0JC0ujoJrwcGPxaqDi7OuDq6CIPgB4uzgpOgiJf4vKbSI8eC4H+/uPe7eAUKjzDSrKwZoetVMJeJiJrsqBl4RRAj9GMG4zCxjTpKS8Bxf9/Dx9S7Ks7zP/TlCas5igE8kjjHDrBJvEM9sVg3O+8RhVpRV4nPiCZMuSPzIdcXlN84FhwWeGTbTqXniMLFY6GClg1nR1IiniSOqplO+kHFZ5bzFWSvXWOue/IXBnL6yzHWaw0hgEUuQIEJBDSWUUUWUVp0UCynaj3v4hxy/RC6FXCUwciygAg2y4wf/g9/dWvmpSTcpGAe6X2z7YxQI7ALNum1/H9t28wTwPwNXettfaQCzn6TX21rkCOjbBi6u25qyB1zuAINPhmzKjuSnKeTzwPsZfVMWGLgFetfc3lr7OH0A0tRV8gY4OATGCpS97vHuns7e/j3T6u8HyXtyycBnEAsAAA5baVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjUyZGI4NjVkLTgzNzEtNGIwZi05MDVkLWZhOTRmN2NkOWFiNyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MDM4MDA5MC1hMTIyLTRhYTEtYTM3OC1hNWI2ZDljMTk2MmIiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDJjZmExOC00Yzg4LTRiOGQtOWE5YS05MDkyZWU2NTZhYzgiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MzQxMTI3MzY4Njg5NjYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zOCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MTI6MTNUMTI6NTg6NTYtMDU6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjEyOjEzVDEyOjU4OjU2LTA1OjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzI2OTAxZjItMzIwMS00Yjg3LTg5OGEtOGFkMzVlZjM2ZmVjIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wOS0wN1QxNTowODozNC0wNDowMCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphN2MyMGQ3MS0yN2NmLTRjYjQtOTY3NS1kM2Q4MDNkZTg2MzQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTEyLTEzVDEyOjU4OjU2LTA1OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PnznhhgAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoDA0ROjgRFqkzAAAD3UlEQVRYw+2XW2gcVRjHfzOzs5vNbvaSS5MQJLbEB5PUNiUX761WW8SKMVRFI7baYvFJfSiaJ/FBoS8qPlko+tAaqEJE8NI0aE1p7IutUVKaEkygrWmyySZ7n92dmXN8yL1BdsV5Mx+cmeHwn2/+8//P+c43sBH/91AKAd7/YqIiEKo6Zll5zxJYLh6Wz4vXUkqkBEXVsCzrQs9zlccL5XcVBLjcey/88Nmhc6ffW54LBILobvcaXCadxjAyCCEor6yl680vHwT+OwFAic9OorlWHpjOGJAxkFKiKCsiai43LkXBrask41GlGAvU4pyS62aanu7knfOD3H/kyFqklESjUYSURWUuqMCSv6uj42gPbfufJafr7HjlNeaSGUZ7T67BCOEkgdtyRa7f4M/ZBJrHA8Cd3YeIJtLMfNu3jLGdIiBYIVD26huY8RhTQmX2k4/Y9PwBlFI/AP79B4knM+QHzywqgEMKrHqTdCwOj3UCYMSiJHtPojduQzQ0gq4jOw8gUwbKpUEHFZALA0D0fU6ssYN8IAQuH96t91H24VEIlGO3P4JdXYe4p4OS0WHsIiUoTEAsWqC6SL3cg6EHwFhIngrVoXW/TWnvMbQf+9BW3WfbxSmgFlZAIqXEXx7m9bYmDteEISvYV6JT89Wn7NIz5O/ton77Dl549wMe7j7o7Edoi4XyWtfcQnJqAq8/TPjXy2x5aifarkdpfbKLb878zm7fPCN/XGRLS+u/IlBQAduWCCkZPddP3FXGz9/3o0VmuB63UWsamMxpkJUMRP0E25/g7IkTzlqwpEBpQytXLl6mun0PSjZNJB8kJkJcuRqBrKDMHeC37waoe+Ythy2wJUJITCOHVd7M5NgkgXA1M0P9TFduwx+spELxYk5Po9a2cXMq7ywByxZIKbEmRxi/ZRAY/hp1fgTpqSL30GYSOQ09l8KVTeKfOE/yrt2Ekc6VYkvIlTqQN5lrfpGKS8eJb32JnOKFTJbgtbNosTHU9F+Ebw4BStGVUC3WAoDSW1cxTZVI82EMNQCp9MLIpknW78MqbwE7s7x8HbJALicrGT9N5fwN5qsfAM290lDlTUoi13DNDDm/G1q2WCOnPv8LVclx4pV7MPQwbjuFnhgGkVlXwh1bBfI2ORVritDUKTy+nXhyY+sevtSYOFoJl5oDRVUXkwu8qZ9AUf5xE3OEgGma87V3P45/czOl4SBmIoHi82HnTcqCPmKROXRfKdLM4y3zYWYNUjMJvOH6lCME0sm5gWBt08chdfsmIUGGFhQRiy141R0r7biU4PJISgIKVi51auOvZyOKib8BAO3w3ya+4mEAAAAASUVORK5CYII=");
`

  export const Space = styled.div`
    flex-grow: 1;
`

  export const RepoName = styled.a`
      color: #fff;
      font-weight: 400;
  `

export const RepoSlash = styled.span`
    font-size: 10px;
    pointer-events: none;
`

export const RepoOwner = styled.a`

`

  export const Repo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    :where( a, span) {
    text-decoration: none;
    color: #bebebe;
    font-weight: 300;
    font-size: 14px;
    }

    > a {
    position: relative;
    }

    > a::before {
    content: "";
    position: absolute;
    inset: -2px -4px;
    border-radius: 6px;
    background: hsl(0 0 100 / 7%);
    opacity: 0;
    transition: 0.3s;
    }

    > a:hover::before {
    opacity: 1;
    }
`

  export const GhIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      opacity: 0.9;
    }

    svg {
      font-size: 1.4rem;
      color: #fff; /* preserve original */
      cursor: pointer;
    }
`;

  export const Icon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.5em;
    width: 1.5em;
    padding: 0.25em;
    border-radius: 0.25em;
    outline: 1px solid #303236;
    fill: #797d86;
    transition: background 0.3s ease, fill 0.3s ease;

    &:hover {
      background: hsl(0 0% 100% / 7%);
      fill: #fff;
    }

    svg {
      width: 1em;
      height: 1em;
    }
`;

  export const CardBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #111215, #0005);
  z-index: 0;
  transition: opacity 0.3s ease;
  
  /* Example hover effect */
  .card:hover & {
    opacity: 1;
  }
`;

  export const Backdrop = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    background: radial-gradient(
      circle at 50% 50%,
      #0000 0%,
      #0000 25%,
      #111111aa 65%
    );
    background-size: 3px 3px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    pointer-events: none; /* ✅ Prevents mouse blocking */
    border-radius: inherit;
`;

  export const SpeenKeyFrames = keyframes`
    0% {
        rotate: 10deg;
    }
    50% {
        rotate: 190deg;
    }
    to {
        rotate: 370deg;
    }
  `
  
  const Spin = styled.div`
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: -30%;
      animation: ${SpeenKeyFrames} 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
    }
`;

export const SpinInside = styled(Spin)`
  inset: -2px;
  border-radius: inherit;
  filter: blur(2px) url(#unopaq3);
  z-index: 0;

  &::before {
    background: linear-gradient(-45deg, #fc9, #0000 35% 65%, #9cf);
  }
`;

export const SpinIntense = styled(Spin)`
  inset: -0.125em;
  filter: blur(0.5em) url(#unopaq2);
  border-radius: 0.75em;

  &::before {
    background: linear-gradient(-45deg, #f95, #0000 35% 65%, #59f);
  }
`;

export const SpinBlur = styled(Spin)`
  filter: blur(3em) url(#unopaq);

  &::before {
    background: linear-gradient(-45deg, #f50, #0000 46% 54%, #05f);
  }
`;


  export const CardContainer = styled.div`
    position: relative;
    width: 400px;
    height: 300px;
    border-radius: 1em;
    margin: 0 2em;
  `;

  /**GitChart Component styles - START */
  export const GitChartWrapper = styled.div` 
  
  `
  
  export const loading90 = keyframes`
      0% {
        background: rgba(255, 255, 255, 0.2);
      }
  
      50% {
        background: limegreen;
      }
  
      100% {
        background: rgba(255, 255, 255, 0.2);
      }
  `
  
  export const CommitCard = styled.div`
    width: 40px;
    height: 40px;
    border-top-left-radius: 10px;
    background: lightgrey;
    transition: 0.4s ease-in-out, 0.2s background-color;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    margin: 0.2em;
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    animation: ${loading90} 2s infinite;
  
    ${props => props.$index % 2 === 0 && css`
      animation-delay:1s
      `};
  
  `

  /**Footer Component styles - START */


  export const MainChart = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 15em;
    align-items: center;
    justify-content: center;
`

  export const PolicyLinks = styled.div`
  a {
    color: #CCF5FF;
    text-decoration: none;
    margin-left: 1.5rem;
    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      margin: 0 0.5rem;
      display: inline-block;
    }
  }
`;

  export const Copyright = styled.p`
    margin: 0;
`;

  export const BottomSection = styled.div`
    border-top: 1px solid #e0e0e0;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.8rem;
    color: #666666;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      padding-top: 1.5rem;
    }
`;

  export const NavColumn = styled.div`
    h4 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #F5F5F5;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: #CCF5FF;
      font-size: 0.9rem;
      &:hover {
        color: #007bff; /* Example hover color */
      }
    }

    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
`;

  export const NavColumns = styled.div`
    display: flex;
    flex-grow: 1; /* Allow columns to grow and take remaining space */
    justify-content: space-around; /* Distribute columns evenly */
    gap: 1rem; /* Space between columns */

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
`;

  export const Tagline = styled.p`
    font-size: 0.9rem;
    color: #B197FC;
    line-height: 1.5;
`;

  export const LogoIcon = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #B197FC; /* Placeholder for your logo icon */
    mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 400l85.7-208.2c17-41.3 47.8-75.3 87.2-96.3L383.8 17.2c12.3-6.6 26.5 4.7 23 18.2L369.6 177.8c-1.1 4.1-1.6 8.3-1.6 12.6 0 6.3 1.2 12.6 3.6 18.5l76.4 191.1-207.1 0 11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 260.4 230.9 256 224 256s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 323 144 329.1 144 336s4.4 13 10.9 15.2l40.4 13.5 11.8 35.4-143.1 0zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'); /* Replaced with a generic placeholder SVG */
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-right: 0.5rem;
`;

  export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

  export const BrandInfo = styled.div`
    flex-basis: 25%; /* Take up about a quarter of the space */
    min-width: 200px; /* Minimum width to prevent content from shrinking too much */

    @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
`;

  export const FooterWrapper = styled.footer`
    color: #ffffff; /* Dark text color */
    padding: 4rem 2rem; /* Adjusted padding for better spacing */
    font-family: Arial, sans-serif;
    border-top: 1px solid #e0e0e0; /* Subtle top border */
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 2rem; /* Space between columns */
  margin-bottom: 3rem; /* Space between top and bottom sections */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

  /**Footer Component styles - END */

  /**Collaborations Component styles - START */

export const CollabWrapper = styled.div`

`;

const BlinkCaretKeyframe = keyframes`
  50% {
    border-color:transparent;
  }
`

const TypingKeyFrame = keyframes`
from{
  width:0;
}
`

export const AnimationWrapper = styled.div`
  /* 1. Define the gradient as the background */
  background: linear-gradient(
    315deg,
    #ff0058, /* Pink/Red color */
    #03a9f4  /* Blue/Cyan color */
  );

  /* 2. Clip the background only where there is text */
  -webkit-background-clip: text;
  background-clip: text;

  /* 3. Make the foreground text color transparent so the background shows through */
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback for non-webkit browsers */

  font: bold 200% Consolas, Monaco, monospace;

  /* The border-right will still be a solid color */
  border-right: .1em solid white; 

  /* You can adjust the width based on the number of characters in the text "Text writing!" (13 characters including space and exclamation) */
  width: 20ch; 
  margin: 2em auto; /* Centering horizontally */
  white-space: nowrap;
  overflow: hidden;

  /* Adjust steps(13, end) for 13 characters */
  -webkit-animation: ${TypingKeyFrame} 5s steps(13, end),
            ${BlinkCaretKeyframe} .5s step-end infinite alternate;

`

export const CollaborationsWrapper = styled.div` 
    display: flex;
    flex-direction: row; 
    
    /* 🔑 REDUCED EXTERNAL SPACE: Reduced margin and padding for a tighter fit */
    margin: 2rem auto; 
    padding: 2rem; 
    
    width: 70%;
    border: 1px solid white;
    border-radius: 0.50rem;

    > * {
      flex: 1;
      min-width: 0;
      /* 🔑 INCREASED SPACE BETWEEN CHILDREN: Increased margin for better separation */
      margin: 3rem; 
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center; 
        width: 90%; 
        
        /* Reduced margin and padding further for tight mobile space */
        margin: 1rem auto; 
        padding: 1rem;

        > * {
            flex: none; 
            max-width: 100%; 
            /* Ensure text-align is still center for mobile stacking */
            text-align: center; 
            /* Adjusted margin for mobile stacking separation */
            margin: 1.5rem 0;
        }
    }
`
  /**Collaborations Componnent styles - END */


/**SocialComponent styles - START */

export const SocialContent = styled.div`
  position: absolute; 
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0); 
  transition: 0.5s;
  
  &.is-revealed {
    transform: scale(1);
    bottom: 25px;
  }
`

export const SocialTitle = styled.p`
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;

  span {
    font-weight: 300;
    font-size: 0.70em;
  }

`

export const StyleSocialWrapper = styled.div`
  margin-top:8rem;
  width:100%

  @media(max-width:768px){
    margin-top:4rem;
  }
  
  @media(max-width:480px){
    margin-top:2rem;
    padding:3rem
  }
`

export const StyledSci = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
  margin-left: 1.5rem;

  @meadia (max-width:480px){
    margin-top:15px;
    margin-left:0;
  }
  
  li {
    list-style: none;
  }
  
  // Icon size adjustments
  li svg { 
    width: 14px;
    height: 14px; /* Added height for better centering */
  }
  
  li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
    margin-right: 2rem;
  }
  
  li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
`
/**SocialComponent styles - END */

/**OuterCircleIcons component styles - Begin */

export const ProfileItemInnerSpan = styled.span`
  /* block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 */
  display: block;
  width: 40px; /* w-[40px] */
  height: 40px; /* h-[40px] */
  transition: all 500ms; /* transition-all duration-500 */
  border-radius: 9999px; /* rounded-full */
  z-index: 2; /* z-[2] */
  background-color: white; /* bg-white */
  padding: 0.25rem; /* p-1 (assuming 1rem = 16px, so 4 * 1 = 4px) */
`;

export const ProfileItemBase = css`
  /* rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] */
  position: absolute; /* Handled in specific component for positioning, but included for clarity */
  border-radius: 9999px; /* rounded-full */
  background-size: cover; /* bg-cover */
  cursor: pointer;
  border: 1px solid rgba(156, 163, 175, 0.5); /* border border-gray-400/50 */
  padding: 2px; /* p-[2px] */
  background-color:black;
  
  /* active:scale-95 hover:scale-95 transition-all duration-500 */
  transition: all 500ms; /* transition-all duration-500 */
  
  &:hover {
    transform: scale(0.95); /* hover:scale-95 */
  }

  &:active {
    transform: scale(0.95); /* active:scale-95 */
  }
`;

export const ProfileItemAws = styled.button`
  ${ProfileItemBase}
  /* right-[40%] -bottom-4 absolute */
  right: 40%;
  bottom: -1rem; /* -bottom-4 */
`;

export const ProfileItemJs = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -left-0 absolute */
  bottom: 2rem; /* bottom-8 */
  left: 0;
`;

export const ProfileItemPython = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -right-0 absolute */
  bottom: 2rem; /* bottom-8 */
  right: 0;
`;

export const IconTwentyEight = styled(FontAwesomeIcon)`
  width:30px;
  height:30px;
  display:block;
`

export const ProfileItemWordpress = styled.button`
  ${ProfileItemBase}
  /* -right-4 top-20 absolute */
  right: -1rem; /* -right-4 */
  top: 5rem; /* top-20 */
`;

export const ProfileItemAngular = styled.button`
  ${ProfileItemBase}
  /* -left-4 top-20 absolute */
  left: -1rem; /* -left-4 (assuming 1rem = 16px, so 4 * 4 = 16px) */
  top: 5rem; /* top-20 (assuming 1rem = 16px, so 20 * 4 = 80px, or a custom value) */
`;

export const ProfileItemGitAlt = styled.button`
  ${ProfileItemBase}
  /* right-[45px] -top-[4px] absolute */
  right: 45px;
  top: -4px;
`;

export const IconWordpressCustom = styled(IconTwentyEight)`
  color:#000000;
`

export const IconAngularCustom = styled(IconTwentyEight)`
  color:#C3002F;
`

export const IconGitAltCustom = styled(IconTwentyEight)`
  /** Portland Orange */
  color:#F1502F
`
/**OuterCircleComponent styles - END */

// Specific components for each button based on their positioning
export const ProfileItemReact = styled.button`
  ${ProfileItemBase}
  /* left-[45px] -top-[4px] absolute */
  left: 45px;
  top: -4px;
`;

/**ProfileCard component styles - Begin */

export const ProfileCardInner = styled.div`
  /* profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 */
  position: relative;
  padding: 2.5rem; /* p-10 */
  border: 2px dashed rgba(156, 163, 175, 0.5); /* border-2 border-dashed border-gray-400/50 */
  border-radius: 9999px; /* rounded-full */
  /* border-spacing-4 is a Tailwind utility for table cells, which doesn't apply here.
     The border style is achieved with the above properties. */
`;

export const ProfileCardContainer = styled.div`
  /* relative h-full w-full flex items-center justify-center */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/**ProfileCard component styles - END */

/** Card component styles  - Begin */
export const StyleProfileWrapper = styled.div`
  position: relative;
  z-index:4
`

/**this style component will hold only the html 
 * element 'b' to give the final color to 
 * the Card under 'CardWrapper' the color 
 * is b > background:rgba(0, 0, 0 ,0.6);
*/
export const StyleBneonCard = styled.b`

`

export const CardWrapper = styled.div`
    position: relative;
    width: 90vw;
    max-width:450px;
    min-height:450px;
    heigth:auto;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    padding: 40px;
    box-sizing:border-box;
    background: #f00; /* This color might be temporary */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* Suggesting a pointer to indicate clickability */

    @media (max-width: 480px) {
        /* Introduce the white space (margin) you requested */
        width: calc(100vw - 40px); /* 100% width minus 20px padding on each side */
        margin: 20px 20px; /* 20px margin all around for white space */
        height: calc(100vw - 40px); /* Keep it square, matching the new constrained width */
        min-height:450px;        
        /* Ensure content doesn't get squeezed too small */
        min-width: 300px;
    }

 
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);    
    }
  
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);
      filter: blur(30px);
    }

    b {
      position:absolute;
      inset:6px;
      background:rgba(0, 0, 0 ,0.6);
      z-index: 2;
    }
`

export const StyledWrapper = styled.div`
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
`;

/** Card component styles  - End */

export const ExperimentalUIWrapper = styled.div`
    height: 100vh; 
    width: 100vw;  
    margin: 0;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);  
    /* Add for potential content overflow on small screens */
    overflow-y: auto; 

    /* Media query for smaller mobile screens (e.g., height < 600px) */
    @media (max-height: 600px) {
        /* Allow content to scroll if it doesn't fit in the viewport height */
        height: auto; 
        min-height: 100vh;
        /* Add some padding for better spacing around the edges */
        padding: 20px 0; 
    }
`;

  /**Avatar component styles - START */
  // --- Image Styles (The Picture Itself) ---
export const ProfilePictureImg = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    object-fit: cover; 
    display: block;
  `;

export const ProfileCardCenterButton = styled.button`
  /* Set the exact size of the final avatar circle */
  width: 200px; /* w-[200px] */
  height: 200px; /* h-[200px] */
  background: radial-gradient(circle at center, #3D3D3D 0%, #000000 100%);
  
  /* Make it a perfect circle */
  border-radius: 9999px; 
  
  padding: 0; 
  border: 2px solid transparent; 
  
  /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  transition: all 500ms;
  z-index: 0;
  
  &:hover {
    border-color: rgba(156, 163, 175, 0.5); /* hover:border-gray-400/50 */
    /* Ensure no scaling on hover */
    transform: none; 
  }
  
  &:active {
    transform: none; 
  }
  
  img{
      position: absolute;
      z-index:3;
      scale:0.8;
      /*opacity:0.25;**/
      transition:0.5s;
    }
    
    &:hover img {
      scale:0.7;
      opacity:0.9;
      /*transform: translateY(-70px);**/
    }
      
  -webkit-tap-highlight-color: transparent;
`;
/** Card component styles - END */
/** Styled Components for new Portfolio - END */

