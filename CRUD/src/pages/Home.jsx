import React, { useEffect, useState } from 'react'
import { useValue} from "../context/firebaseContext";
import Button from 'react-bootstrap/Button';
import BookCard from '../context/BookCard';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
  const [books, setBooks] = useState([]);
  const firebase = useValue();
  useEffect(()=>{
    const bookList =async()=>{
      const list = await firebase.listAllBooks();
      setBooks(list.docs)
      // console.log(list.docs[0].data())
    }

    bookList();
  },[])
  return (
    <>
 <div className='container mt-5'> <CardGroup> {books.map((book)=><BookCard key={book.id} id={book.id}{...book.data()}/>)}</CardGroup>
  </div>
    </>
  )
}

export default Home;
