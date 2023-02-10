import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';


const Read = () => {
 const [data, setData] = useState([])

 function getData(){
    axios
    .get("https://63d17872d5f0fa7fbdcc0cc0.mockapi.io/cred-youtube")
    .then((res) =>{
    console.log(res);
    setData(res.data);
    });
 }

function handleDelete(id){
  axios.delete(`https://63d17872d5f0fa7fbdcc0cc0.mockapi.io/cred-youtube/${id}`)
  .then(()=>{
    getData()
  })
}

 const setLocalStorage = (id,name,email) =>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
 };

useEffect(() => {
  getData();
}, []);




  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h1> Read Operation </h1>
    <Link to="/">
    <button className='btm btn-primary'> Create Data</button>
    </Link>
     
    </div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>

   { 

      data.map((eachData)=>{

        return(
          <>

          <tbody>
        <tr>
         <th scope="row">{eachData.id}</th>
         <td>{eachData.name}</td>
         <td>{eachData.email}</td>
         <td>

          <Link to='/update'>
          <button className='btn-success' onClick={()=> setLocalStorage(
            eachData.id,
            eachData.name,
            eachData.email
            )}
            > Edit
            </button>
          </Link>
         
         </td>
         <td>
         <button className='btn-danger' onClick={()=> handleDelete(eachData.id)}> Delect </button>
         </td>
        </tr>
          </tbody>
    

         </>
        )
      })
     
}
</table>


    </>
  )
}

export default Read