import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPages from './Landing/LandingPages';
import SignIn from './Components/SignUp/SignIn';
import SideNav from './Components/NAVBARS/SideNav';
import Dashbord from './Components/Pages/Dashbord';
import AddTask from './Components/Pages/AddTask';
import Home from './Components/Pages/Home';
import MyProjects from './Components/Pages/MyProjects';
import Education from './Components/Pages/Education';

function App() {
  return (
     
        
           <BrowserRouter>
            <SideNav>
           <Routes>
          <Route path='/Dashbord' element={<Dashbord/>} />
         <Route path='/AddTask' element={<AddTask/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Education' element={<Education/>}/>
         <Route path='/MyProject' element={<MyProjects/>}/> 
        /* <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        </SideNav>
        </BrowserRouter>
      
        //  <Route path="/" element={<LandingPages />} />
        // <Route path="/signIn/" element={<SignIn/>} />
        //  <Route path="/sidenav/*" element={<SideNav />} /> 
      
        //  <Route path='/AddTask'></Route> 
   
    
    
  );
}

export default App;
