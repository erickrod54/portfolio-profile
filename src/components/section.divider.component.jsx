import styled from "styled-components";
import { DividerContainer } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 39.15 - styled.components - Features:
 * 
 *      --> Migrating 'DividerContainer'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

// 2. Define the inner line component (replaces .divider-line class)
const DividerLine = styled.div`
  /* The actual visible line */
  width: 100%;
  height: 1px;
  opacity: 0.7; /* Soften the line color */

  /* Dynamically set the background color using props */
  background-color: ${props => props.$color}; 
`;

export const DividerColors = [
  {
    name:'Electric Cyan',
    color:'#00FFFF'
  },
  {
    name:'Vibrant Magenta',
    color:'#FF00FF'
  },
  {
    name:'Electric Lime',
    color:'#CCFF00'
  },
  {
    name:'Safety Orange',
    color:'#FF9900'
  }
]

const [{ color: electric_cyan }] = DividerColors;

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
