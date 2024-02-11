import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useValue} from '../context/firebaseContext'


const ListPage = () => {
  const firebase = useValue();
  const nagigate = useNavigate();
  const [name, setName] = useState();
  const [isbn, setIsbn] = useState();
  const [ price, setPrice] = useState();
  const [coverPic, setCoverPic] = useState();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await firebase.handleCreateNewList(name,isbn,price,coverPic);
  }

  
  return (
    <div className=' container mt-5'>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Book Name</Form.Label>
        <Form.Control 
        onChange={e => setName(e.target.value)}
        value={name}
        type="text" placeholder="Enter your Book name..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control 
         onChange={e => setIsbn(e.target.value)}
         value={isbn}
        type="text" placeholder="Enter your Isbn" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control 
         onChange={e => setPrice(e.target.value)}
         value={price}
        type="text" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cover Pic</Form.Label>
        <Form.Control 
         onChange={e => setCoverPic(e.target.files[0])}
        type="file"  />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
      Create
      </Button>
    </Form>
    </div>
  )
}

export default ListPage;

