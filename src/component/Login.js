

import React, { useState } from 'react'
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const[login, setLogin] = useState(false)
    const history = useNavigate()
    const handleSubmit1 = (e, type) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(type =='singnup'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data, "authData")
            //history("/createpost")
            setLogin(true)
        }).catch(err=>{
            alert(err.code)
            //setLogin(true)
        })
    }else{
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data, "authData")
            history("/createpost")
        }).catch(err=>{
            alert(err.code)
            // setLogin(true)
        })
    }
    }
    
    return <>
    <div className='App'>
        <h1>{login?'SingnIn':"SingnUp"}</h1>
        <form onSubmit={(e) => handleSubmit1(e, login?'singnin':'singnup')}>
            <input   name="email" placeholder='Email'/> <br/>
            <input type="password"  name="password" placeholder='Password'/> <br/><br/>
            <button>{login?'SingnIn':"SingnUp"}</button>
        </form>
    </div>
    </>

}


///  className="form-control" className="form-control" className="btn btn-primary"