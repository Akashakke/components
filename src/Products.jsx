import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Products() {
  const [users,setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
   useEffect(()=> {
     loadData()
 
   },[])
   let loadData =async () =>{
     setIsLoading(true)
     let users = await axios .get("https://624e6fef53326d0cfe5b26fa.mockapi.io/userss");
     console.log(users)
   setUsers(users.data)
   setIsLoading(false)
 };
 
 let userDelete = async (id) => {
     try {
         let ask = window.confirm("Are you sure? Do u want to delete this data?")
          if (ask){
             await axios.delete(`https://624e6fef53326d0cfe5b26fa.mockapi.io/userss/${id}`);
             loadData();
          }
       
     } catch (error){
       
     }
   }
  return (
    
    <div class="container-fluid">

    
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Products</h1>
                            <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Create user</Link>
                        </div>
    {
        isLoading ? 
        <div className='mx-auto' style={{width:'200px'}}  ><div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div>
      :<div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>Sno.</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            users.map((user,index) => {
                                return <tr key={index} >
                                    <td>{index + 1} </td>
                                    <td>{user.name} </td>
                                    <td>{user.position}</td>
                                    <td>{user.office}</td>
                                    <td>{user.age}</td>
                                    <td>{user.startDate}</td>
                                    <td>${user.salary} </td>
                                    <td>
                                        <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-primary mr-2 ">View</Link>
                                        <Link to={`/portal/user/edit/${user.id}`} className="btn btn-sm btn-primary mr-2 ">Edit</Link>
                                        <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-primary mr-2">Delete</button>
                                    </td>
                                </tr> 
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    }
      
        
    
    </div>
    
    
  )
}

export default Products