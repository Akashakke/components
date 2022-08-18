import React from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function dashboard( ) {
  const cards =[
    {
      title : "Earnings (Monthly)",
      price : "$40,000",
      theme : "primary"
    },
    {
      title : "Earnings(Annual)",
      price : "$215,000",
      theme : "success"
    },
    {
      title : "Tasks",
      price : "50%",
      theme : "info"
    },
    {
      title : "Pending Requests",
      price : "18",
      theme : "warning"
    },
  ]
  return (
    <div id="wrapper">
      <Sidebar/> 
      <div id="content-wrapper" class="d-flex flex-column">
<div id="content">
  <Topbar/> 
  
  
    <div class="container-fluid">

                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                    </div>
                    <div class="row">
                        {
                          cards.map((card)  => {
                            return <Card card={card}/>
                          })
                        }
  
                    </div>
                    </div>
                    </div>
  </div>
  </div>
  )
}

export default dashboard