import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 48.00 - App  js file -
 * Features:
 * 
 *      --> Defining twelveth route 'terms'     
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
        <Route path={'/integrations'}>
            <UpdatingPageComponent path={'/integrations'}/>
        </Route>
        <Route path={'/about'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/team'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/blog'}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={'/careers'}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={'/privacy'}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={'/help'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/twitter'}>
            <UpdatingPageComponent />
        </Route>
        <Route path={'/linkedin'}>
            <UpdatingPageComponent />  
        </Route>
        <Route path={'/terms'}>
            <UpdatingPageComponent />
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
  );
}

export default App;
