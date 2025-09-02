import styled from 'styled-components';
import { TitleSpan, WaterTitleWrapper, AlterTitleSpan, Universe723 } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 40.08 - WaterTitle  -
 * Features:
 * 
 *      --> Clearing 'keyframes'
 * 
 * Notes: This data is to test WaterTitle, the data
 * will be relocated or provided to the component
 * that will consume this data.
 */

const WaterTitle = ({ title }) => {

  return (
    <WaterTitleWrapper> 
      <Loader>
          <TitleSpan>{title}</TitleSpan>
          <AlterTitleSpan>{title}</AlterTitleSpan>
      </Loader>
    </WaterTitleWrapper>
  );
}

/**the loader class is converted to a component the span are marked 
 * as direct child of the Loader styled component by '>'*/
const Loader = styled.div`
    position: relative; 
    width: 140px; 
    height: 60px; 
  
  & > span {
    position: absolute;
    color: #fff;
    /* Keep centering relative to the .loader div */
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-size: 38px;
    letter-spacing: 5px;
  }

  & > span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px rgb(128, 198, 255);
  }

  & > span:nth-child(2) {
  color: rgb(128, 198, 255);
  -webkit-text-stroke: 1px rgb(128, 198, 255);
  animation: ${Universe723} 3s ease-in-out infinite;
  }
`

export default WaterTitle;
