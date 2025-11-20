import styled, { css, keyframes } from "styled-components";
import { useLocation } from "wouter";
import { PrimaryButton } from "../components/index.components";

/**Portfolio-erick - version 54.20 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Restoring 'UpdatingPageComponent' at original version      
 * 
 * Notes: Vite will keep the front end of my portfolio,
 * UpdatingPageComponent will render while migration  
 */

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

const FrontText = styled.span`
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

const ButtonTitle = styled.button`
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

const WorkInProgressTitle = styled.h1`
  color:white;
`

const AbsoluteButtonWrapper = styled.div`
  position:absolute;
  top:40px;
  left:40px;
  width:auto;
`

const StyledPath = styled(ButtonTitle)`
  color:purple;
  font-size:1.5rem;
  margin-left:10px;
`

const UpdatingPageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
`

const UpdatingData = [
  {
    message: 'Updating - 😉 work in progress'
  },
  {
    message:'new portfolio version'
  }
]

const UpdatingPageComponent = () => {

const [ currentPath ] = useLocation();

  const [ { message: updating } ] = UpdatingData;

  return (
    <UpdatingPageWrapper>
      <AbsoluteButtonWrapper>
        <PrimaryButton />
      </AbsoluteButtonWrapper>
      <WorkInProgressTitle>
          {updating} on 
        <StyledPath>
          {currentPath}
        </StyledPath>
        </WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;

