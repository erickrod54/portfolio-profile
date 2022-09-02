import React from "react";
import HomePage from "./pages/home.page";
import DashBoard from "./pages/dashboard.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashBoard />}/>
        </Routes>
      </Router>
  );
}

export default App;
