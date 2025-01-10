import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar';



const LandingPages = () => {

    const navigate = useNavigate();

    const hundleClick = () => {
       navigate("/signIn");
    }
    

  return (
    <>
     <Navbar />
             <h1>Vite + React</h1>
    <div className="card">
      <button onClick={hundleClick}>
        Enter 
      </button>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
    </>
  )
}

export default LandingPages