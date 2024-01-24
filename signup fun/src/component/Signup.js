import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e)=>{
      e.preventDefault();
      try{
          const result = await createUserWithEmailAndPassword(auth, email , password);
          window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
      }catch(err){
          window.M.toast({html: err.message, classes:"green"})
      }
  }

  return (
    <div className='center container' style={{maxWidth:"500px"}}>
    <h3>SignUp please!!</h3>
    <form onSubmit={(e)=>handleSignup(e)}>
    <div className="input-field">
          <input placeholder="enter email here.." type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder="enter password here.." type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className="btn blue">signup</button>
    </form>
    </div>
  )
}

export default Signup
