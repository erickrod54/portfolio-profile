import styled, { css, keyframes } from "styled-components"

/**Portfolio-erick - version 22.07 - GitChart - Features:
 * 
 *      --> Building 'loading90' keyframe and including it in 
 *          'CommitCard'
 * 
 * Notes: This component soon will be refactored to work more efficent
 * and hold more complete information
 */

const MainChart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 15em;
  align-items: center;
  justify-content: center;
`

const loading90 = keyframes`
    0% {
      background: rgba(255, 255, 255, 0.2);
    }

    50% {
      background: limegreen;
    }

    100% {
      background: rgba(255, 255, 255, 0.2);
    }
`

const CommitCard = styled.div`
  width: 40px;
  height: 40px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  margin: 0.2em;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${loading90} 2s infinite;

  ${props => props.$index % 2 === 0 && css`
    animation-delay:1s
    `};

`

const GitChartWrapper = styled.div` 


`

const GitChart = () => {

  return(
    <GitChartWrapper>
    <MainChart>
       {/* Card 1: Index 1 (Odd: No delay) */}
        <CommitCard $index={1} /> 
        
        {/* Card 2: Index 2 (Even: 1s delay) */}
        <CommitCard $index={2} /> 
        
        {/* Card 3: Index 3 (Odd: No delay) */}
        <CommitCard $index={3} /> 
        
        {/* Card 4: Index 4 (Even: 1s delay) */}
        <CommitCard $index={4} /> 
        
        {/* Card 5: Index 5 (Odd: No delay) */}
        <CommitCard $index={5} /> 
        
        {/* Card 6: Index 6 (Even: 1s delay) */}
        <CommitCard $index={6} /> 
        
        {/* Card 7: Index 7 (Odd: No delay) */}
        <CommitCard $index={7} /> 
        
        {/* Card 8: Index 8 (Even: 1s delay) */}
        <CommitCard $index={8} /> 
        
        {/* Card 9: Index 9 (Odd: No delay) */}
        <CommitCard $index={9} /> 
        
        {/* Card 10: Index 10 (Even: 1s delay) */}
        <CommitCard $index={10} /> 
        
        {/* Card 11: Index 11 (Odd: No delay) */}
        <CommitCard $index={11} /> 
        
        {/* Card 12: Index 12 (Even: 1s delay) */}
        <CommitCard $index={12} /> 
        
        {/* Card 13: Index 13 (Odd: No delay) */}
        <CommitCard $index={13} /> 
        
        {/* Card 14: Index 14 (Even: 1s delay) */}
        <CommitCard $index={14} />

        <CommitCard $index={15} />  
    </MainChart>
    </GitChartWrapper>
 )
}

export default GitChart;