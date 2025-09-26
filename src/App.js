import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 46.12 - App  js file -
 * Features:
 * 
 *      --> Defining first route 'overview'     
 * 
 * Notes: These routes are from 'AI & Classic Engineering 
 * Program'
 */

function App() {

  return (
    <ExperimentalUIWrapper>
      <Switch>
        <Route path='/'>
           <HomePageComponent /> 
        </Route>
        <Route path={'/overview'}>
            <UpdatingPageComponent />
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
