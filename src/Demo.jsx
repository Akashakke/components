import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Demo() {
    

    useEffect(()=> {
      console.log("Hello");
      fetch("https://624e6fef53326d0cfe5b26fa.mockapi.io/userss").then(() => {
        console.log("Fetch") 
      })
    },[])
    const [timer,setTimer] = useState(0)
    useEffect(() => {
      console.log("Timer update")
    },[timer]);
    
  return (
    <div>
        <button onClick={() => setTimer(timer +1)}>+ </button>
        {timer}
        <button onClick={() => setTimer(timer -1)}>- </button>
    </div>
  )
}

export default Demo