import styled from "styled-components";
import { DividerContainer, DividerLine } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 39.16 - styled.components - Features:
 * 
 *      --> Migrating 'DividerLine'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

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
