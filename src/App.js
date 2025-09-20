import { Collaborations, CollabTitle, Footer, GitChart, GitFlowComponent } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { usePortfolioContext } from './context.js';
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 44.18 - App  js file -
 * Features:
 * 
 *      --> Removing 'WizardCollabTitle' import   
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {

  const { CollabTitleData } = usePortfolioContext();

  const [{ title: firstTitle }, { title: secondTitle} ] = CollabTitleData;


  return (
    <ExperimentalUIWrapper>
  
      {/**
      <Collaborations>
        <CollabTitle title={firstTitle}/>
        <GitChart />      
      </Collaborations>
      <Collaborations>
          <GitFlowComponent />
          <CollabTitle title={secondTitle}/>
      </Collaborations>
      <Footer />*/}
      <Switch>
        <Route path='/'>
           <h1 style={{color: "white"}}>Updating - 😉 work in progress</h1> 
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
