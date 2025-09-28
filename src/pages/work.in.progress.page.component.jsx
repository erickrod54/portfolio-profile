import styled from "styled-components";
import { PrimaryButton } from "../components/index.components";

/**Portfolio-erick - version 47.02 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Importing 'PrimaryButton'      
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
      <WorkInProgressTitle>{updating}</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
