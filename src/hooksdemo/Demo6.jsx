import React, { useRef } from 'react'

export default function Demo6() 
{
    const idRef=useRef(0)
    const NameRef=useRef("")
    const handeleChange=()=>{
        const id=idRef.current.value
        const Name=NameRef.current.value
        
    }





  return (
    <div>

  <form onClick={handeleChange}>
   Enter Id:
   <input type="number" required ref={idRef}/>
   Enter Name:
   <input type="text" required ref={NameRef}/>
<button vakue="Submit">Submit</button>
</form>

    </div>
  )
}
