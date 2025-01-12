import React from 'react'
import { useNavigate} from 'react-router-dom'

const SignIn = () => {

 const navigate = useNavigate(); 

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