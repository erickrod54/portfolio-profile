import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { SectionDivider } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 20.20 - App  js file -
 * Features:
 * 
 *      --> Adding 'WizardCollabTitle'
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {
  return (
    <ExperimentalUIWrapper>
      <HeaderTitle />
      <Card />
      <SectionDivider />
      <WizardCollabTitle />
    </ExperimentalUIWrapper>
  );
}

export default App;
