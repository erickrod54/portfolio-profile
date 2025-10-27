import styled from "styled-components";
import { PrimaryButton } from "../components/index.components";
import { useLocation } from "wouter";
import { ButtonTitle } from "../styled-components/styled.components";
import { usePortfolioContext } from "../context";
import { AbsoluteButtonWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 53.00 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Migrating 'AbsoluteButtonWrapper'      
 * 
 * Notes: This styled component will be refactor to 
 * style the currentPath 
 */

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

const WorkInProgressTitle = styled.h1`
  color:white;
`

const UpdatingPageComponent = () => {

  const { UpdatingData } = usePortfolioContext()

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