import styled from "styled-components";

/**Portfolio-erick - version 46.02 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Removing 'h1' from UpdatingPageWrapper     
 * 
 * Notes: To substite the legacy body implementation.
 */


const UpdatingPageWrapper = styled.div`
  
`

const WorkInProgressTitle = styled.h1`
  color:white;
`

const UpdatingPageComponent = () => {

  return (
    <UpdatingPageWrapper>
      <WorkInProgressTitle>Updating - 😉 work in progress</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
