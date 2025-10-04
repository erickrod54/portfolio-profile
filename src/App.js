import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 48.09 - App  js file -
 * Features:
 * 
 *      --> Placing 'fourth_route'     
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
    name:'overview',
    route:'/overview'
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

  const [{ route: first_route },
         { route: second_route },
         {route: third_route },
         {route: fourth_route }
         ] = RoutesData;

  return (
    <ExperimentalUIWrapper>
      <Switch>
        <Route path={first_route}>
           <HomePageComponent /> 
        </Route>
        <Route path={second_route}>
            <UpdatingPageComponent />
        </Route>
        <Route path={third_route}>
            <UpdatingPageComponent />
        </Route>
        <Route path={fourth_route}>
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
