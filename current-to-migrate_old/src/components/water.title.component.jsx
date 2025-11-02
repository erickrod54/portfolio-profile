import { TitleSpan, WaterTitleWrapper, AlterTitleSpan, Loader } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 40.11 - WaterTitle  -
 * Features:
 * 
 *      --> Clearing 'styled'
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

export default WaterTitle;
