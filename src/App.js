//import HomePage from "./pages/home.page";
import { Card } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 20.01 - App  js file -
 * Features:
 * 
 *      --> Clearing HomePage
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {
  return (
    <ExperimentalUIWrapper>
      <Card />
    </ExperimentalUIWrapper>
  );
}

export default App;
