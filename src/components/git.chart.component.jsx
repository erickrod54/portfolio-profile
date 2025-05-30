import styled, { css, keyframes } from "styled-components"

/**Portfolio-erick - version 22.08 - GitChart - Features:
 * 
 *      --> Building 'cards' array and maping into 
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

  const cardCount = 15;
  const cards = Array.from({ length: cardCount });

  return(
    <GitChartWrapper>
    <MainChart>
        {cards.map((_,index) => (
          <CommitCard key={index} $index={index + 1} />
        ))}  
    </MainChart>
    </GitChartWrapper>
 )
}

export default GitChart;