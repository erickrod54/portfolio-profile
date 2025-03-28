
/**
 * Portfolio-erick - version 11.20 - IconComponent 
 * Features:
 * 
 *   --> Refactoring 'PythonIcon' to 'IconComponent'.
 * 
 * Note: This component is the base component for a 
 * generic SVG icon component
 */


export const pythonData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 256 255',
    width: '30',
    height: '30',
  },
  {
    fill: '#3776AB',
    d: 'M126.9 0c-10.9 0-21.3.9-30.3 2.6C67.6 8.4 61.1 20.7 61.1 39.1v28.2h66.4v9.4H40.6c-18.8 0-35.2 11.3-40.5 32.8C-4.6 138 2.3 161 8.5 175.3c6.1 13.7 21.3 22.6 40.3 22.6h22.1v-30.5c0-19.7 17.1-37.2 36.8-37.2h66.3c16.3 0 30.3-13.5 30.3-29.8V39.1c0-15.9-13.3-26.9-28.4-29.8-10.2-1.9-21.1-3.2-31.9-3.3zM94.8 20.7c6.8 0 12.3 5.5 12.3 12.3s-5.5 12.3-12.3 12.3-12.3-5.5-12.3-12.3 5.5-12.3 12.3-12.3z'
  },
  {
    fill: '#FFD43B',
    d: 'M234.5 76.5v30.5c0 19.7-17.1 37.2-36.8 37.2h-66.3c-16.3 0-30.3 13.5-30.3 29.8v61.3c0 15.9 13.3 26.9 28.4 29.8 17.9 3.5 34.9 4.1 50.6 0 14.5-3.7 27.6-11.2 27.6-29.8v-28.2h-66.4v-9.4h86.9c18.8 0 35.2-11.3 40.5-32.8 5.6-28.5-1.3-51.4-7.5-65.7-6.1-13.7-21.3-22.6-40.3-22.6h-22.1zM160 219.3c6.8 0 12.3 5.5 12.3 12.3s-5.5 12.3-12.3 12.3-12.3-5.5-12.3-12.3 5.5-12.3 12.3-12.3z'
  }
];

const IconComponent = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length < 2) {
    console.error("Invalid or empty data passed to IconComponent.");
    return null;
  }

  const svgProps = data[0];
  const paths = data.slice(1);

  return (
    <svg
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
    </svg>
  );
};

export default IconComponent;
