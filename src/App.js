import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Route, Switch } from "wouter";

/**Portfolio-erick - version 49.08 - App  js file -
 * Features:
 * 
 *      --> Placing 'thirteenth_route'      
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
         {route: fourth_route },
         { route: fifth_route },
         { route: sixth_route },
         { route: seventh_route },
         { route: eigth_route },
         { route: ninth_route },
         { route: tenth_route },
         { route: eleventh_route },
         { route: twelfth_route },
         { route: thirteenth_route }
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
        <Route path={fifth_route}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={sixth_route}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={seventh_route}>
            <UpdatingPageComponent />
        </Route>
        <Route path={eigth_route}>
            <UpdatingPageComponent />
        </Route>
        <Route path={ninth_route}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={tenth_route}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={eleventh_route}>
            <UpdatingPageComponent/>
        </Route>
        <Route path={twelfth_route}>
            <UpdatingPageComponent />
        </Route>
        <Route path={thirteenth_route}>
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
