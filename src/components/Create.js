
import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();


 const header = {"Access-Control-Allow-Origin": "*" };


 const handleSubmit =(e) =>{
e.preventDefault();
console.log("clik");
    axios.post("https://63d17872d5f0fa7fbdcc0cc0.mockapi.io/cred-youtube",{
    name : name,
    email: email,
    header,
 })
 .then(()=>{
   history("/read");
 });
 };


 return (
    <>

    <div className='d-flex justify-content-between m-2'>
    <h1> Create </h1>
    <Link to="/read">
    <button className='btm btn-primary'>Show Data</button>
    </Link>
     
    </div>
<form>
   <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" 
      className="form-control"
      onChange={(e) => setName(e.target.value)}
     />
  </div>


   <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input type="email" 
      className="form-control" 
      aria-describedby="emailHelp" 
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>


  <button type="submit" className="btn btn-primary" onClick={handleSubmit} > Submit</button>
</form>
    
 
 </>
  )
}

export default create