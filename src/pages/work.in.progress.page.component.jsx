import styled from "styled-components";

/**Portfolio-erick - version 46.04 - UpdatingPageComponent -
 * Features:
 * 
 *      --> Destructuring 'updating' from 'UpdatingData'     
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
      <WorkInProgressTitle>Updating - 😉 work in progress</WorkInProgressTitle> 
    </UpdatingPageWrapper>
      
  );
}

export default UpdatingPageComponent;
