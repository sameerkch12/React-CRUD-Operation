import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";



function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

   const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://63d17872d5f0fa7fbdcc0cc0.mockapi.io/cred-youtube/${id}`,
    {
        name: name,
        email: email,
    }
    ).then(()=>{
        Navigate("/read");
    });
   };


  return (
    <>
     <h1> Create </h1>
   
     <form>
   <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" 
      className="form-control"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
  </div>


   <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input type="email" 
      className="form-control" 
      aria-describedby="emailHelp"
      value={email} 
     onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <button type="submit"
  className="btn btn-primary mx-2"
  onClick={handleUpdate}
  > Update</button>

<Link to="/read">
<button className="btn btn-primary mx-2"> Back </button>

</Link>
  
</form>


 </>
  )
}


export default Update