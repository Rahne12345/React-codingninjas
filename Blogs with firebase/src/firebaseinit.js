// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltC_9hAMwWN-w9FhkQPnWWxlFAlSHfMQ",
  authDomain: "blogging-app-44140.firebaseapp.com",
  projectId: "blogging-app-44140",
  storageBucket: "blogging-app-44140.appspot.com",
  messagingSenderId: "288571256612",
  appId: "1:288571256612:web:5b1d4859b5801f76a20db1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);