import { Route, Switch } from 'wouter';
import { HomePageComponent, UpdatingPageComponent } from './pages/index.page.components';
import styled from 'styled-components';

/**Portfolio-erick - version 54.20 - Apps -
 * Features:
 * 
 *      --> Implementing 'wouter' for routing      
 * 
 * Notes: At this version mapping routes simplified 
 * the original code version, also added components
 * at the RoutesData object to access and mount them
 * when the route it's displayed
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
    Component:UpdatingPageComponent
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
    Component:UpdatingPageComponent
  },
  {
    name:'team',
    route:'/team',
    Component:UpdatingPageComponent
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


function App() {

  return (
    <ExperimentalUIWrapper>
      <Switch>
        {RoutesData.map((routeData) => {

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
