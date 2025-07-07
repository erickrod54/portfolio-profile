import styled from 'styled-components';
import {  AnimationWrapper, CollabWrapper } from '../styled-components/styled.components';

/**Portfolio-erick - version 32.10 - CollabTitle - Features:
 * 
 *      --> Migrating 'CollabWrapper'   
 * 
 * Notes: 'CollabTitleData' is going to be placed where the 
 * 'CollabTitle' is going to consume it.
 */

const CollabTitle = ({title}) => {

  return (
    <CollabWrapper> 
      <AnimationWrapper>{title}</AnimationWrapper>
    </CollabWrapper>
  );
}

export default CollabTitle;

