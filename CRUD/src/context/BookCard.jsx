import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useValue} from "../context/firebaseContext";
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {
    const firebase = useValue();
    const navigate = useNavigate();
    const [url,setUrl] = useState(null);

useEffect(()=>{
const imageUrl= async ()=>{
    const image = await firebase.getImageURL(props.imageUrl);
    setUrl(image);
}
imageUrl();
},[])
console.log(props);
  return (
    <Card style={{ width: '18rem', margin:"25px" }}>
    <Card.Img variant="top" src={url}/>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
       This book has title {props.name} and this book is sold by {props.userEmail} and this book cost is {props.price}.
      </Card.Text>
      <Button variant="primary" onClick={(e)=>navigate(`/books/view/${props.id}`)}>View</Button>
    </Card.Body>
  </Card>
  )
}

export default BookCard;
