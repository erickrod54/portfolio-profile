import { Collaborations, CollabTitle, GitChart } from "./components/index.components.js";
import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { SectionDivider } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { usePortfolioContext } from './context.js'

/**Portfolio-erick - version 21.12 - App  js file -
 * Features:
 * 
 *      --> Providing 'CollabTitleData' from context
 *          and sending 'firstTItle' 
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {

  const { CollabTitleData } = usePortfolioContext();

  const [{ title: firstTitle }, ] = CollabTitleData;

  return (
    <ExperimentalUIWrapper>
      <HeaderTitle />
      <Card />
      <SectionDivider />
      <WizardCollabTitle />
      <Collaborations>
        <CollabTitle title={firstTitle}/>
        <GitChart />      
      </Collaborations>
    </ExperimentalUIWrapper>
  );
}

export default App;
