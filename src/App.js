import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 20.12 - App  js file -
 * Features:
 * 
 *      --> Adding 'WizardCollabTitle' to test
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {
  return (
    <ExperimentalUIWrapper>
      <HeaderTitle />
      <Card />
      <WizardCollabTitle />
    </ExperimentalUIWrapper>
  );
}

export default App;
