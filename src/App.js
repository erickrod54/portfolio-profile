import React, { useEffect, useState } from "react";
import GhostLoader from "./components/ghost.loader.component.jsx";
import { HomePageComponent, UpdatingPageComponent } from "./pages/index.pages.components.jsx";
import { ExperimentalUIWrapper } from "./styled-components/styled.components.index.js";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";
import DashboardComponent from "./pages/dashboard.page.component.jsx";

/**Portfolio-erick - version 51.14 - App  js file -
 * Features:
 * 
 *      --> exporting 'eighteenth_route'        
 * 
 * Notes: simulates the intial load 
 * ( will eventually refactored to handle fetching data)
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
  },
  {
    name:'terms',
    route:'/terms'
  },
  {
    name:'dashboard',
    route:'/dashboard'
  },
  {
    name:'callback',
    route:'/callback'
  }
]
function App() {

const location = useLocation();
const [ isLoading, setIsLoading ] = useState(true);

const { isLoading: authLoading, isAuthenticated, loginWithRedirect} = useAuth0();

/** the ref will check the component mount */
const isInitialMount = React.useRef(true);

useEffect(() => {
  
  if (isInitialMount.current) {
    
    const intialTimer = setTimeout(() => {
      setIsLoading(false);
      isInitialMount.current = false;
    }, 600);

    return () => clearTimeout(intialTimer);
  }

  setIsLoading(true);

  const transitionTimer = setTimeout(() => {
    setIsLoading(true)
  }, 600)

  return () => clearTimeout(transitionTimer);

}, [location.pathname])

const isAppLoading = isLoading || authLoading;

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
         { route: thirteenth_route },
         { route: fourtheenth_route },
         { route: fiftheen_route},
         { route: seventeenth_route },
         { route: eighteenth_route }
         ] = RoutesData;

  const Auth0CallbackHandler = () => {

    if (authLoading) return <GhostLoader isLoading={true}/>;

    return isAuthenticated ? <Redirect to={seventeenth_route} /> : <Redirect to={first_route} />
  }


  return (
    <>
    <GhostLoader isLoading={isAppLoading}/>
    <ExperimentalUIWrapper
      style={{ filter:isLoading ? 'blur(1.5px)' : 'none', transition:'filter 0.3s'}}
    >
      <Switch>
        <Route path={eighteenth_route}>
            <Auth0CallbackHandler />
        </Route>
        <Route path={seventeenth_route}>
            <DashboardComponent />
        </Route>
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
        <Route path={fourtheenth_route}>
            <UpdatingPageComponent />  
        </Route>
        <Route path={fiftheen_route}>
            <UpdatingPageComponent />
        </Route>
      </Switch>
    </ExperimentalUIWrapper>
    </>
  );
}

export default App;

export const [{ route: eighteenth_route }] = RoutesData;
