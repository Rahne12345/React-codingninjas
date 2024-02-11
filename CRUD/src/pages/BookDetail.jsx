import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useValue} from "../context/firebaseContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookDetail = () => {
    const [data, setData] = useState(null);
    const [url, setUrl]= useState();
    const [qty, setQty] = useState();
    const firebase = useValue();
    const params = useParams();
    console.log(data);
    useEffect(()=>{
        const bookId = async ()=>{
            const fire = await firebase.getBookId(params.bookId);
            setData(fire.data()); }
        bookId();
    },[])

useEffect(()=>{
    const bookId = async ()=>{
        if(data){
            const imageURL= data.imageUrl;
        const fires = await firebase.getImageURL(imageURL);
        setUrl(fires); }
        }
        bookId();
    
},[data])

const placeOrder = async ()=>{
const result = await firebase.placeOrder(params.bookId, qty);
console.log(result);
}
   
   if(data===null) return <h1>Loading....</h1>
  return (
    <div className='container mt-5'>
        <h1>{data.name}</h1>
     <img width="300px" src={url} style={{borderRadius:"10px"}} />
     <h1>Details</h1>
     <h5>Price :Rs {data.price}</h5>
     <p>{data.userEmail}</p>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Qty</Form.Label>
        <Form.Control 
         onChange={e => setQty(e.target.value)}
         value={qty}
        type="number" placeholder="Enter Qty...." />
      </Form.Group>
     <Button onClick={placeOrder} variant="success">Buy Now</Button>
    </div>
  )
}

export default BookDetail
