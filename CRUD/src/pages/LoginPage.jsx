import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useValue} from '../context/firebaseContext'


const LoginPage = () => {
  const firebase = useValue();
  const nagigate = useNavigate();
  const [ email, setEmail] = useState();
  const [ password, setPassword] = useState();

  useEffect(()=>{
    if(firebase.isLoggedIn){
nagigate("/")
    }
  },[firebase, nagigate])

  console.log(firebase);

  const handleSubmit =  async (e)=>{
    e.preventDefault();
    console.log("login a user..");
    const result = await firebase.signInWithEmailAndPass(email, password);
    console.log("Successfull", result);
  }

 

  return (
    <div className=' container mt-5'>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
         onChange={e => setPassword(e.target.value)}
         value={password}
        type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Login 
      </Button>
    </Form>
    <h1 className='mt-5 mb-5'>OR</h1>
    <Button onClick={firebase.signinWithGoogle} variant='danger'>Signin with Google</Button>
    </div>
  )
}

export default LoginPage;
