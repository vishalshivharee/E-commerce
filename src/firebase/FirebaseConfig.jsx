import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgGLHR4c3NLopr6VHeRNqpWUKM16GfqAM",
  authDomain: "myfirstapp-44d40.firebaseapp.com",
  projectId: "myfirstapp-44d40",
  storageBucket: "myfirstapp-44d40.appspot.com",
  messagingSenderId: "581432287349",
  appId: "1:581432287349:web:2af7184c5d766b9e1c983c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth };