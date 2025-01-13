
import  React from 'react';

import {useNavigate} from 'react-router-dom'



const SignIn = () => {

 const navigate = useNavigate(); 
 
const drawerWidth = 240;

 const handlesumbit = () =>{
  navigate("/SideNav");
 }


  return (
   <>
    <button onClick={handlesumbit}>signIn</button>
   </>
  )
}

export default SignIn







