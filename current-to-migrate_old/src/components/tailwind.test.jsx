import styled from "styled-components";

/**Portfolio-erick - version 52.16  - TailwindTest - Features:
 * 
 *      --> Building 'TailwindTest' 
 * 
 * Notes: This component is a sucessful test for tailwind,
 * will be use to use as a reference to build the Dashboard 
 * and to make refactors from classic css to tailwind
 */

/**implementation will be use to refactor */
const OuterDiv = styled.div.attrs({
    // Use Tailwind classes via className for the global structure
    className: "p-8 bg-gray-100 dark:bg-gray-900 min-h-screen"
})``;

const TailwindTest = () => {
  return (
    // Outer div for background and padding
    <OuterDiv>
      
      {/* Test Card */}
      <div 
        className="
          max-w-md mx-auto 
          bg-white dark:bg-gray-800 
          p-6 rounded-xl 
          shadow-2xl 
          border border-gray-200 dark:border-indigo-500
          transition duration-300
          hover:shadow-indigo-500/50 hover:scale-[1.02]
        "
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tailwind Test Success!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          If this card looks styled with rounded corners, shadows, and a dark background switch, 
          your Tailwind configuration is working correctly.
        </p>

        {/* Test Button - showing color, padding, hover, and dark mode */}
        <button
          className="
            px-6 py-3 
            bg-indigo-600 
            text-white 
            font-semibold 
            rounded-lg 
            shadow-md 
            transition duration-300
            hover:bg-indigo-700
            focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
          "
        >
          Styled Button
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-600">
        Current Environment: ARM/PostCSS Bypass
      </p>
    </OuterDiv>
  );
};

export default TailwindTest;
