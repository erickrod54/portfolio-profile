import styled from "styled-components";

/**Portfolio-erick - version 46.05 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Placing 'updating'      
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
