import React, { useRef } from 'react'

export default function Demo5() 
{ 
   const idRef=useRef(0)
   const nameRef=useRef("")
   const handleChange=()=>{
       const id=idRef.current.value
        const Name=nameRef.current.value
     alert(id+","+Name)
   }


  return (
    <div>
      <form onSubmit={handleChange}>
      <label>Enter ID:</label>
            <input type="number" required ref={idRef}/><br/>
            <label>Enter Name:</label>
             <input type="text" required ref={nameRef}/><br/>
            <input type="submit" value="Submit"/>
            <input type="reset" value="Clear"/>
        </form>



    </div>
  )
}
