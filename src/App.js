import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 48.01 - App  js file -
 * Features:
 * 
 *      --> Building 'RoutesData'     
 * 
 * Notes: These routes are from 'AI & Classic Engineering 
 * Program'
 */

const RoutesData = [
  {
    name:'home',
    route:'/'
  },
  {
    name:'pricing',
    route:'/pricing'
  },
  {
    name:'marketplace',
    route:'/marketplace'
  },
  {
    name:'features',
    route:'/features'
  },
  {
    name:'integrations',
    route:'/integrations'
  },
  {
    name:'about',
    route:'/about'
  },
  {
    name:'team',
    route:'/team'
  },
  {
    name:'blog',
    route:'/blog'
  },
  {
    name:'careers',
    route:'/careers'
  },
  {
    name:'privacy',
    route:'/privacy'
  },
  {
    name:'help',
    route:'/help'
  },
  {
    name:'twitter',
    route:'/twitter'
  },
  {
    name:'linkedin',
    route:'/linkedin'
  }

]
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
