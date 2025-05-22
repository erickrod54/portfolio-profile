import { HeaderTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 20.13 - App  js file -
 * Features:
 * 
 *      --> Removing 'WizardCollabTitle' test
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {
  return (
    <ExperimentalUIWrapper>
      <HeaderTitle />
      <Card />
    </ExperimentalUIWrapper>
  );
}

export default App;
