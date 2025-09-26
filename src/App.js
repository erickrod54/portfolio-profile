import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 46.11 - App  js file -
 * Features:
 * 
 *      --> Placing 'HomePageComponent'     
 * 
 * Notes: To substite the legacy body implementation.
 */

function App() {

  return (
    <ExperimentalUIWrapper>
      <Switch>
        <Route path='/'>
           <HomePageComponent /> 
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
