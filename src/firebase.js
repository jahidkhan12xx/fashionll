// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRT6ouxBNo70cL9hZCK5aJrQYfXHi1_yo",
  authDomain: "fiberlife-7b018.firebaseapp.com",
  projectId: "fiberlife-7b018",
  storageBucket: "fiberlife-7b018.appspot.com",
  messagingSenderId: "519669810231",
  appId: "1:519669810231:web:530956509bd014877babb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;