import styled from 'styled-components';

/**Portfolio-erick - version 55.11 - styled.components - Features:
 * 
 *      --> Adding  'customMargin' 
 * 
 * Notes: Minor changes in the width down to 75% for this
 * version
 */

const DividerLine = styled.div`
  /* The actual visible line */
  width: 100%;
  height: 1px;
  opacity: 0.7; /* Soften the line color */

  /* Dynamically set the background color using props */
  background-color: ${props => props.$color}; 
`;

const DividerContainer = styled.div`
  /* This outer div acts as a container to control the divider's width */
  width: ${ props => props.$customWidth || '75%'}; /* Adjust this to control how long the line is */
  margin: ${ props => props.$customMargin || '50px auto'}; /* Centers the divider and provides vertical spacing */
  height: 1px; /* The container height is minimal, the line inside does the work */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DividerColors = [
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

const SectionDivider = ({ color = electric_cyan, customWidth, customMargin }) => {
  return (
    // Apply the box-shadow (glow) and height/alignment styles to the container
    <DividerContainer 
      $customMargin={customMargin}
      $customWidth={customWidth}
      style={{ boxShadow: `0 0 10px ${color}` }}
    >
      {/* Pass the color as a custom transient prop ($color) to the line */}
      <DividerLine $color={color} />
    </DividerContainer>
  );
};

export default SectionDivider;
