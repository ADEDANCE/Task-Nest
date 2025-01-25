import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPages from './Landing/LandingPages';
import SignIn from './Components/SignUp/SignIn';
import SideNav from './Components/NAVBARS/SideNav';
import MyWork from './Components/Pages/Mywork';
import AddTask from './Components/Pages/AddTask';
import Home from './Components/Pages/Home';
import MyProjects from './Components/Pages/MyProjects';
import Education from './Components/Pages/Education';

function App() {
  return (
     
        
           <Router>
            <SideNav>
           <Routes>
          <Route path='/MyWork' element={<MyWork/>} />
         <Route path='/AddTask' element={<AddTask/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Education' element={<Education/>}/>
         <Route path='/MyProject' element={<MyProjects/>}/> 
        /* <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        </SideNav>
        </Router>
      
        //  <Route path="/" element={<LandingPages />} />
        // <Route path="/signIn/" element={<SignIn/>} />
        //  <Route path="/sidenav/*" element={<SideNav />} /> 
      
        //  <Route path='/AddTask'></Route> 
   
    
    
  );
}

export default App;
