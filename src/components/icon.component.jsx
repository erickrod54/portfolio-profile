import { IconComponentWrapper } from '../styled-components/styled.components.index';
/**
 * Portfolio-erick - version 41.06 - IconComponent 
 * Features:
 * 
 *   --> Rules to receive 'gradients, stops, and offsets'.
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

  /**Checking existence of gradient props */
  const hasGradients = svgProps.gradients && Array.isArray(svgProps.gradients);

  return (
    <IconComponentWrapper
      xmlns={svgProps.xmlns}
      viewBox={svgProps.viewBox}
      width={svgProps.width}
      height={svgProps.height}
    >
      {hasGradients && (
        <defs>
          {svgProps.gradients.map((gradient, gIndex) => (
            <linearGradient 
              key={gIndex}
              id={gradient.id}
              x1={gradient.x1 || '0%'} //Default to 0% if not provided
              y1={gradient.y1 || '0%'} //Default to 0% if not provided
              x2={gradient.x2 || '100%'} //Default to 100% if not provided
              y2={gradient.y2 || '100%'} //Default to 100% if not provided   
            >
              {/**rendering stop attribs */}
              {gradient.stops.map((stop, sIndex) => (
                <stop>
                  key={sIndex}
                  offset={stop.offset}
                  style={{ stopColor: stop.color, stopOpacity: stop.opacity }}
                </stop>
              ))}
            </linearGradient>
          ))}
        </defs>
      )}
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
