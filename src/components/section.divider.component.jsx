import styled from "styled-components";
import { DividerContainer, DividerLine } from '../styled-components/styled.components.index';
import { electric_cyan } from '../data';

/**Portfolio-erick - version 39.18 - styled.components - Features:
 * 
 *      --> Clearing  'usePortfolioContext'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const SectionDivider = ({ color = electric_cyan }) => {
  return (
    // Apply the box-shadow (glow) and height/alignment styles to the container
    <DividerContainer 
      style={{ boxShadow: `0 0 10px ${color}` }}
    >
      {/* Pass the color as a custom transient prop ($color) to the line */}
      <DividerLine $color={color} />
    </DividerContainer>
  );
};

export default SectionDivider;
