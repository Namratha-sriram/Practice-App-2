import React, { useState } from 'react'

export default function Demo3()
 {
    const [name,setName]=useState(true)
   function handlechange(){
    setName(!name)
   }




  return (
    <div>
{
    name ? <b>ARADHYA</b> : <b>NONE</b>
}
<button onClick={handlechange}>Change</button>

    </div>
  )
}
