import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 47.09 - App  js file -
 * Features:
 * 
 *      --> Defining third route 'features'     
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
        <Route path={'/pricing'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/marketplace'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/features'}>
            <UpdatingPageComponent/>
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
