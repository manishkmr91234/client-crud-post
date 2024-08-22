import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

 export default function Showpost(){
// const Showpost = () => { 
    const[data, setData] = useState([]);
    function getData(){
        axios
        .get("https://66c5f601134eb8f434964860.mockapi.io/api/v1/demo1")
        .then((res) => {
            console.log(res.data);
                setData(res.data);
            });
        }
        function handlDelete(id){
            axios.delete(`https://66c5f601134eb8f434964860.mockapi.io/api/v1/demo1/${id}`)
            .then(()=>{
                 getData()
            })
        }

        const setToLocalStorage = (id, name, email) =>{
                localStorage.setItem("id", id);
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
        }
       useEffect(() => {
        getData();
       }, [])


    return <>
     <div className="d-flex justify-content-between m2">
     <h1>Read Post</h1>
     <Link to="/createpost"><button className="btn btn-warning">Create Post</button></Link>    
    {/* <Link to="/createpost"><button className="btn btn-warning">Create Post</button></Link> */}
    
    </div>
   
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data.map((eachData) =>{
    return(
        <>
        <tbody>
   
   <tr>
     
     <td>{eachData.id}</td>
     <td>{eachData.name}</td>
     <td>{eachData.email}</td>
     <td>
        <Link to="/update"><button className='btn-success' onClick={()=>
        setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button></Link></td>
     <td><button className='btn-danger' onClick={()=>handlDelete(eachData.id)}>Delete</button></td>
   </tr>
   
   
 </tbody>
        </>
    )
  })
  
 }
</table>
    </>
}