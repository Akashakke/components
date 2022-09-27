import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
    const params =  useParams()
    console.log(params)
    const [searchParams,setSearchParams] = useSearchParams()
    console.log(...searchParams)
const [userData,setUserData] = useState({})
    useEffect(() => {
      loadUser()

    },[])

    let loadUser = async () => {
      try {
       let user = await axios.get(`http://localhost:3000/user/${params.id}`)
       setUserData(user.data)
      } catch (error) {
         
      }
    }
  return (
    <>
    <div>
      <h2>Name:{userData.name}</h2>
      <h2>Position:{userData.position}</h2>
      <h2>Office:{userData.office} </h2>
      <h2>Age:{userData.age}</h2>
      <h2>StartDate:{userData.startDate}</h2>
      <h2>Salary:{userData.salary}</h2> </div>
   
   </>
  )
}

export default Userview