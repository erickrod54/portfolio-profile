import { CollabTitle, Footer } from "./components/index.components.js";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { usePortfolioContext } from './context.js';
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 45.12 - App  js file -
 * Features:
 * 
 *      --> Removing 'secondTitle'     
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {

  const { CollabTitleData } = usePortfolioContext();

  const [  ] = CollabTitleData;


  return (
    <ExperimentalUIWrapper>
      <Switch>
        <Route path='/'>
           <h1 style={{color: "white"}}>Updating - 😉 work in progress</h1> 
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
