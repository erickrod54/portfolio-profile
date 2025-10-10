import styled from "styled-components";
import { PrimaryButton } from "../components/index.components";
import { useLocation } from "wouter";
import { ButtonTitle } from "../styled-components/styled.components";

/**Portfolio-erick - version 49.16 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Importing 'ButtonTitle'      
 * 
 * Notes: This styled component will be refactor to 
 * style the currentPath 
 */

const UpdatingPageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
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

const UpdatingData = [
  {
    message: 'Updating - 😉 work in progress'
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
      <WorkInProgressTitle>{updating} on {currentPath}</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
