//import HomePage from "./pages/home.page";
import { Card } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 10.06 - App  js file -
 * Features:
 * 
 *      --> Rendering 'Card' Component
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {
  return (
    <ExperimentalUIWrapper>
    {/*<HomePage />*/}
      <Card />
    </ExperimentalUIWrapper>
  );
}

export default App;
