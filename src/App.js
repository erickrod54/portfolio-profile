import { Collaborations, CollabTitle, Footer, GitChart, GitFlowComponent } from "./components/index.components.js";
import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { SectionDivider } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { usePortfolioContext } from './context.js'

/**Portfolio-erick - version 21.14 - App  js file -
 * Features:
 * 
 *      --> Adding 'Footer' 
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {

  const { CollabTitleData } = usePortfolioContext();

  const [{ title: firstTitle }, { title: secondTitle} ] = CollabTitleData;

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
      <Collaborations>
          <GitFlowComponent />
          <CollabTitle title={secondTitle}/>
      </Collaborations>
      <SectionDivider />
      <Footer />
    </ExperimentalUIWrapper>
  );
}

export default App;
