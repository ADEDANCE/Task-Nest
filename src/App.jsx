import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './Landing/LandingPages';
import SignIn from './SignUp/SignIn';
import SideNav from './Studio/SideNav';
import AddTask from './Studio/AddTask';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/signIn/" element={<SignIn/>} />
         <Route path="/sidenav/*" element={<SideNav />} ></Route>
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        <Route path='/AddTask'></Route>
      </Routes>
    </Router>
  );
}

export default App;
