import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBDuIHmYusXHeQIjvBVFSJtHEZth-hvF48",
  authDomain: "emailauth-8045d.firebaseapp.com",
  projectId: "emailauth-8045d",
  storageBucket: "emailauth-8045d.appspot.com",
  messagingSenderId: "527769728007",
  appId: "1:527769728007:web:588c97307090fa6913a6a2"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)