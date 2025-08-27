import { IconComponentWrapper } from '../styled-components/styled.components.index';
/**
 * Portfolio-erick - version 39.11 - IconComponent 
 * Features:
 * 
 *   --> Clearing 'styled'.
 * 
 * Note: This component is the base component for a 
 * generic SVG icon component
 */

const IconComponent = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length < 2) {
    console.error("Invalid or empty data passed to IconComponent.");
    return null;
  }

  const svgProps = data[0];
  const paths = data.slice(1);

  return (
    <IconComponentWrapper
      xmlns={svgProps.xmlns}
      viewBox={svgProps.viewBox}
      width={svgProps.width}
      height={svgProps.height}
    >
      {paths.map((path, index) => (
        <path
          key={index}
          fill={path.fill}
          d={path.d}
        />
      ))}
    </IconComponentWrapper>
  );
};

export default IconComponent;
