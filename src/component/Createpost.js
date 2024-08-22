import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig';
import { signOut } from 'firebase/auth';



export default function Createpost(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();
    const header = {"Access-Control-Allow-Origi": "*"};
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        axios.post("https://66c5f601134eb8f434964860.mockapi.io/api/v1/demo1", {
            
            name: name,
            email: email,
            header,
            
          })
          .then(() => {
             history("/read");   /// (/)
            // history("/"); 
          })
        // history("/read");
    }
    const handleclickk = () => {
        signOut(database).then(val => {
           history("/")
        })
    }
    return <>
   
    <div className="d-flex justify-content-between m2">
    <h1>Create Post</h1>
    <Link to="/read"><button className="btn btn-primary" onClick={handleclickk}>SignOut</button></Link>
    
    </div>
   
    <form >
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" 
    onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp"
    onChange={(e) => setEmail(e.target.value)}/>
    </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
   
    
    </>
}