import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function(){
    const[id, setId] = useState(0);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const history1 = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://66c5f601134eb8f434964860.mockapi.io/api/v1/demo1/${id}`, {
            name: name,
            email: email,
        })
        .then(()=>{
             history1("/read")  /// (/)
             //history1("/") 
        })

    }

    return <>
    <h1>Update Post</h1>
    <form >
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" value={name} className="form-control" 
    onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" value={email} className="form-control"  aria-describedby="emailHelp"
    onChange={(e) => setEmail(e.target.value)}/>
    </div>
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
</form>
   
    
    </>
}