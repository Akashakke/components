import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
import UserContext from './userContext'



 



function Dashboard( ) {
  let context = useContext(UserContext)
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
    
  
  
    <div class="container-fluid">

                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>{context.username}
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
  )
}

export default Dashboard