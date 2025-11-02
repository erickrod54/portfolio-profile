import { MainChart, CommitCard, GitChartWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 35.14 - GitChart - Features:
 * 
 *      --> Clearing 'styled' 
 * 
 * Notes: This component soon will be refactored to work more efficent
 * and hold more complete information
 */

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