import styled from "styled-components";

/**Portfolio-erick - version 46.00 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Building 'WorkInProgressTitle'     
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
      <h1>Updating - 😉 work in progress</h1> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
