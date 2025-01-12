import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './Landing/LandingPages';
import SignIn from './SignUp/SignIn';
import SideNav from './NAVBARS/SideNav';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/signIn/" element={<SignIn/>} />
         <Route path="/SideNav/*" element={<SideNav />}> </Route>
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
