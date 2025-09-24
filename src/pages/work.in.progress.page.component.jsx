import styled from "styled-components";

/**Portfolio-erick - version 46.01 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Implementing 'WorkInProgressTitle'     
 * 
 * Notes: To substite the legacy body implementation.
 */


const UpdatingPageWrapper = styled.div`
  h1{
    color:white;
  }
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
