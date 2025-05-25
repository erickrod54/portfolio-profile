import { Collaborations, CollabTitle, GitChart } from "./components/index.components.js";
import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { SectionDivider } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";

/**Portfolio-erick - version 21.04 - App  js file -
 * Features:
 * 
 *      --> Adding 'Collaborations' and rendering children
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
      <Collaborations>
        <CollabTitle />
        <GitChart />      
      </Collaborations>
    </ExperimentalUIWrapper>
  );
}

export default App;
