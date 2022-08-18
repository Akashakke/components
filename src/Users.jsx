import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Users() {
  const users =[ 
    {
        id :1,
    name : "Vasanth",
    position : "CTO",
    office : "GnG",
    age : "40",
    startDate : "23/04/2022",
    salary : "34578"
    },
    {
        id : 2,
        name : "Raj",
        position : "CTO",
        office : "GnG",
        age : "40",
        startDate : "23/04/2022",
        salary : "34578"
        },
        {
            id :3,    
            name : "Vasanth",
            position : "CTO",
            office : "GnG",
            age : "40",
            startDate : "23/04/2022",
            salary : "34578"
            }
  ]
  return (
    <div id="wrapper">
      <Sidebar/> 
      <div id="content-wrapper" class="d-flex flex-column">
<div id="content">
  <Topbar/> 
    <div class="container-fluid">

    
<div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create user</Link>
                    </div>

  
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
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
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name} </td>
                                    <td>{user.position}</td>
                                    <td>{user.office}</td>
                                    <td>{user.age}</td>
                                    <td>{user.startDate}</td>
                                    <td>${user.salary} </td>
                                    <td>
                                        <button>View</button>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr> 
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>



</div>
</div>
</div>
  )
}

export default Users