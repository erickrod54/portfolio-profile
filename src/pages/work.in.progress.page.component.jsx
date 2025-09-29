import styled from "styled-components";
import { PrimaryButton } from "../components/index.components";

/**Portfolio-erick - version 47.06 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Building 'AbsoluteButtonWrapper'      
 * 
 * Notes: This refactor places the PrimaryButton
 * on the left corner
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

  const [ { message: updating } ] = UpdatingData;

  return (
    <UpdatingPageWrapper>
      <PrimaryButton />
      <WorkInProgressTitle>{updating}</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
