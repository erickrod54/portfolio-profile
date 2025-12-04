import { Redirect, Route, Switch } from 'wouter';
import { AboutPage, DashboardComponent, HomePageComponent, OverviewPage, TeamPage, UpdatingPageComponent } from './pages/index.page.components';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

/**Portfolio-erick - version 56.03 - Apps -
 * Features:
 * 
 *      --> Implementing 'TeamPage'       
 * 
 * Notes: 'AboutPage' is set in data
 */


const ExperimentalUIWrapper = styled.div`
    height: 100vh; 
    width: 100vw;  
    margin: 0;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);  
    /* Add for potential content overflow on small screens */
    overflow-y: auto; 

    /* Media query for smaller mobile screens (e.g., height < 600px) */
    @media (max-height: 600px) {
        /* Allow content to scroll if it doesn't fit in the viewport height */
        height: auto; 
        min-height: 100vh;
        /* Add some padding for better spacing around the edges */
        padding: 20px 0; 
    }
`;

const RoutesData = [
  {
    name:'home',
    route: '/',
    Component:HomePageComponent
  },
  {
    name:'overview',
    route:'/overview',
    Component:OverviewPage
  },
  {
    name:'pricing',
    route:'/pricing',
    Component:UpdatingPageComponent
  },
  {
    name:'marketplace',
    route:'/marketplace',
    Component:UpdatingPageComponent
  },
  {
    name:'features',
    route:'/features',
    Component:UpdatingPageComponent
  },
  {
    name:'integrations',
    route:'/integrations',
    Component:UpdatingPageComponent
  },
  {
    name:'about',
    route:'/about',
    Component:AboutPage
  },
  {
    name:'team',
    route:'/team',
    Component:TeamPage
  },
  {
    name:'blog',
    route:'/blog',
    Component:UpdatingPageComponent
  },
  {
    name:'careers',
    route:'/careers',
    Component:UpdatingPageComponent
  },
  {
    name:'privacy',
    route:'/privacy',
    Component:UpdatingPageComponent
  },
  {
    name:'help',
    route:'/help',
    Component:UpdatingPageComponent
  },
  {
    name:'twitter',
    route:'/twitter',
    Component:UpdatingPageComponent
  },
  {
    name:'linkedin',
    route:'/linkedin',
    Component:UpdatingPageComponent
  },
  {
    name:'terms',
    route:'/terms',
    Component:UpdatingPageComponent
  },
  {
    name:'dashboard',
    route:'/dashboard',
    Component:UpdatingPageComponent
  },
  {
    name:'callback',
    route:'/callback',
    Component:UpdatingPageComponent
  }
]

const home_route = RoutesData.find(r => r.name === 'home').route;
const dashboard_route = RoutesData.find(r => r.name === 'dashboard').route;
const callback_route = RoutesData.find(r => r.name === 'callback').route;

const ProtectedDashboard = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading authentication state ...</h2>
  }

  if (!isAuthenticated) {
    return <Redirect to={home_route}/>
  }

  return <DashboardComponent />
}

const Auth0CallbackHandler = () => {
  const { isLoading:authLoading, isAuthenticated } = useAuth0();

  if (authLoading) return <h2>Procesing Loading</h2>;

  return isAuthenticated ? <Redirect to={dashboard_route} /> : <Redirect to={home_route}/>
}

function App() {

  const genericRoutes = RoutesData.filter( r => 
    r.route !== dashboard_route && r.route !== callback_route
  );  

  return (
    <ExperimentalUIWrapper>
      <Switch>
        <Route path={callback_route}>
          <Auth0CallbackHandler />
        </Route>

        <Route path={dashboard_route}>
            <ProtectedDashboard />
        </Route>
        {genericRoutes.map((routeData) => {

          const { name, route, Component } = routeData;

          return (
            <Route
              key={name}
              path={route}
            >
              <Component />
            </Route>
          )
        })}
      </Switch>
    </ExperimentalUIWrapper>
  )
}

export default App
