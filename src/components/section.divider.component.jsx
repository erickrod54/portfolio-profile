import styled from "styled-components";

/**Portfolio-erick - version 20.14 - styled.components - Features:
 * 
 *      --> Building 'SectionDivider'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

// 1. Define the outer container component (replaces .section-divider class)
const DividerContainer = styled.div`
  /* This outer div acts as a container to control the divider's width */
  width: 80%; /* Adjust this to control how long the line is */
  margin: 50px auto; /* Centers the divider and provides vertical spacing */
  height: 1px; /* The container height is minimal, the line inside does the work */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 2. Define the inner line component (replaces .divider-line class)
const DividerLine = styled.div`
  /* The actual visible line */
  width: 100%;
  height: 1px;
  opacity: 0.7; /* Soften the line color */

  /* Dynamically set the background color using props */
  background-color: ${props => props.$color}; 
`;

const SectionDivider = ({ color = '#00FFFF' }) => {
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
