import React from "react";
import HomePage from "./pages/home.page";
import ResumePage from "./pages/resume.page";
import DashBoard from "./pages/dashboard.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**Portfolio-erick - version 1 - App  js file -
 * Features:
 * 
 *      --> Building the routing. 
 * 
 *      --> Importing and placing 'HomePage', 
 *          'Dashboard' and 'ResumePage' 
 *          Components 
 * 
 * Notes: By this version has been implemented
 * the routing using react-router v6
 */

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashBoard />}/>
          <Route path='/resume' element={<ResumePage />}/>
        </Routes>
      </Router>
  );
}

export default App;
