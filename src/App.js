import { Collaborations, CollabTitle, Footer, GitChart, GitFlowComponent } from "./components/index.components.js";
import { HeaderTitle, WizardCollabTitle } from "./components/index.components.js";
import { Card } from "./components/index.components.js";
import { SectionDivider } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { usePortfolioContext } from './context.js';
import FloatCard from "./components/float.card.component.jsx";

/**Portfolio-erick - version 43.08 - App  js file -
 * Features:
 * 
 *      --> Adding 'FloatCard' 
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
      <FloatCard/>
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
