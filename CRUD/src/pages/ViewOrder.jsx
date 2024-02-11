import React, { useEffect } from 'react'
import { useValue} from "../context/firebaseContext";

const ViewOrder = () => {
  const firebase = useValue();

  useEffect(()=>{
    const value = async ()=>{
      const fire = await firebase.fetchMyOrder();
 console.log(fire.docs)
    }
    value();
  },[])
  return (
    <div>
      View Order
    </div>
  )
}

export default ViewOrder
