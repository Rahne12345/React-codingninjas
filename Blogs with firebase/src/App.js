import { useEffect, useReducer, useRef, useState } from "react";
import { db } from "./firebaseinit";
import { collection, addDoc,doc, setDoc,getDocs,onSnapshot ,deleteDoc } from "firebase/firestore"; 

// function handleReducer(state,action){
//   switch(action.type){
//     case "ADD":
//       return [action.blog, ...state];
//     case "REMOVE":
//       return state.filter((blog,index)=>index!==action.index);
//     default:
//       return [];
//   }
// }

function App() {
  const [form, setForm] = useState({ title: "", content: "" });
  // const [blogs, dispatch] = useReducer(handleReducer,[]);
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);
 

  useEffect(()=>{
    titleRef.current.focus();
  },[])

  useEffect(()=>{
    if(blogs.length && blogs[0].title){
      document.title = blogs[0].title;
    }else{
      document.title = "No Blogs!!"
    }
  
  })

  useEffect(()=>{
      // async function fetching(){
      //   const querySnapshot = await getDocs(collection(db, "blogs"));
      //   console.log(querySnapshot);

      //   const blogs  = querySnapshot.docs.map((doc)=>{
      //     return{
      //       id: doc.id,
      //       ...doc.data()
      //     }
      //   })
      //   console.log(blogs)
      //   setBlogs(blogs);
      // }

      // fetching();
      const unsub = onSnapshot(collection(db, "blogs"), (onSnapshot) => {
        const blogs  = onSnapshot.docs.map((doc)=>{
              return{
                id: doc.id,
                ...doc.data()
              }
            })
            console.log(blogs)
            setBlogs(blogs);
    });

  },[])

  const handleBlogs = async (e) => {
    e.preventDefault();
    // setBlogs([{ title: form.title, content: form.content }, ...blogs]);
    // Add a new document with a generated id.
    const newCityRef = doc(collection(db, "blogs"));
     await setDoc(newCityRef, {
        title: form.title,
        content: form.content,
        createdOn: new Date()
}); 
    // dispatch({type:"ADD", blog:{ title: form.title, content: form.content }});
    setForm({ title: "", content: "" });
    titleRef.current.focus();
  };

  const removeBlog = async (id) => {
    // setBlogs(blogs.filter((blog, index) => i !== index));
    // dispatch({type:"REMOVE", index:i});
    await deleteDoc(doc(db, "blogs", id));
  };

  return (
    <>
      <div className="cantainer">
        <h1>Write A Blogs!</h1>
        <input
          type="text"
          placeholder="Enter the title here....."
          ref={titleRef}
          value={form.title}
          required
          onChange={(e) =>
            setForm({ title: e.target.value, content: form.content })
          }
        />
        <br/>
        <textarea
          value={form.content}
          placeholder="Enter the content here....."
          onChange={(e) =>setForm({ title: form.title, content: e.target.value })}
          required/>
      </div>
      <button onClick={handleBlogs}>Add</button>
      <hr />
      <br />
      <br />
      {blogs.map((val, i) => (
        <>
          <div className="main" key={i}>
            <h1>{val.title}</h1>
            <p> {val.content}</p>
            <button onClick={() => removeBlog(val.id)}>Delete</button>
          </div>
          <br />
        </>
      ))}
    </>
  );
}

export default App;
