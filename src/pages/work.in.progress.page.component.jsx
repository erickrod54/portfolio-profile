import styled from "styled-components";
import { PrimaryButton } from "../components/index.components";

/**Portfolio-erick - version 47.04 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Placing 'PrimaryButton'      
 * 
 * Notes: To substite the legacy body implementation.
 */

const UpdatingPageWrapper = styled.div`
  
`

const WorkInProgressTitle = styled.h1`
  color:white;
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
