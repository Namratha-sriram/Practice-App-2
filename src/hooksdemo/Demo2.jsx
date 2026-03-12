import React, { useState } from 'react'

export default function Demo2() 
{
     const [name,setName]=useState("")
  function change(){
      setName("namratha")
  }
  return (
    <div>
    Name={name}<br/>
    <button onClick={change}>Change</button>
    </div>
  )
}
