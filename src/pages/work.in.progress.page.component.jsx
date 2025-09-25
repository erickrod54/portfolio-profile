import styled from "styled-components";

/**Portfolio-erick - version 46.03 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Building 'UpdatingData'     
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

  return (
    <UpdatingPageWrapper>
      <WorkInProgressTitle>Updating - 😉 work in progress</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
