import styled from "styled-components";

/**
 * Portfolio-erick - version 53.09 - IconComponent 
 * Features:
 * 
 *   --> Migrating 'IconComponent' to vite version.
 * 
 * Note: This way classic styles can be applied to 
 * this component when is required
 */

const IconComponentWrapper = styled.svg`

`

const IconComponent = ({ data, className }) => {
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
      className={className}
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
                <stop
                  key={sIndex} 
                  offset={stop.offset} 
                  style={{ 
                      stopColor: stop.color, 
                      stopOpacity: stop.opacity 
                  }} 
                />
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
          fillRule={path.fillRule} //rule to not fill inner shapes explicitly
        />
      ))}
    </IconComponentWrapper>
  );
};

export default IconComponent;
