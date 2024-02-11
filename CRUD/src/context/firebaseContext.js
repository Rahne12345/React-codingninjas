import { createContext,useContext , useState, useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getAuth,  createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection, addDoc,getDocs , doc,getDoc, query, where  } from "firebase/firestore";
import { getStorage,ref, uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseContext = createContext();
 const useValue =()=>useContext(firebaseContext);
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCltC_9hAMwWN-w9FhkQPnWWxlFAlSHfMQ",
    authDomain: "blogging-app-44140.firebaseapp.com",
    databaseURL: "https://blogging-app-44140-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blogging-app-44140",
    storageBucket: "blogging-app-44140.appspot.com",
    messagingSenderId: "288571256612",
    appId: "1:288571256612:web:5b1d4859b5801f76a20db1"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  const firestore = getFirestore(firebaseApp);
  const firebaseStorage = getStorage(firebaseApp);

 const FirebaseCustom =({children})=>{

  const [user, setUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,( user) =>{
      if(user)setUser(user);
      else setUser(null)
    })
  },[])

  const signupUserWithEmailPassword = (email,password)=>
  createUserWithEmailAndPassword(firebaseAuth, email , password);

  const signInWithEmailAndPass = (email, password)=> signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = ()=> signInWithPopup(firebaseAuth,googleProvider);
 

  const handleCreateNewList = async (name,isbn, price,cover)=>{
    const imageRef = ref(firebaseStorage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover); 
     return await addDoc(collection(firestore, "books"), {
      name,
      price,
      isbn,
      imageUrl:uploadResult.ref.fullPath,
      userID:user.uid,
      userEmail:user.email,
      displayName:user.displayName,   
      photoURL:user.photoURL
    });
  }
  const listAllBooks = ()=>{
    return getDocs(collection(firestore, "books"));
  }

  const getBookId = async (id)=>{
const docRef = doc(firestore, "books" , id);
const result = await getDoc(docRef);
return result;
  }
  
  const getImageURL =(path)=>{
    return getDownloadURL(ref(firebaseStorage, path))
  }

  const fetchMyOrder = async ()=>{
    if(user) return null;
    const collect = collection(firestore, "books");
    const q = query(collect, where("userID" ,'==' , user.uid));
    const result = await getDocs(q);
    return result;
  }

  const placeOrder = async (bookId,qty)=>{
    const collectionRef = collection(firestore, "books" ,bookId , "order");
    const result = await addDoc(collectionRef,{
      userID:user.uid,
      userEmail:user.email,
      displayName:user.displayName,   
      photoURL:user.photoURL,
      qty:Number(qty)
    })
    return result;
  }

  const isLoggedIn = user ? true : false;

    return(
        <firebaseContext.Provider value={{signupUserWithEmailPassword,signInWithEmailAndPass,signinWithGoogle,handleCreateNewList,listAllBooks,listAllBooks,getImageURL,getBookId,placeOrder,fetchMyOrder,isLoggedIn}}>
          {children}
        </firebaseContext.Provider>
    )
}

export {FirebaseCustom,useValue}