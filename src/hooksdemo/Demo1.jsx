import React from 'react'

export default function Demo1() 
{
  const a=25,name="namratha",status=false
  const Student={id:32245,name:"nammu",height:5.3}


  return (
    <div>
   A={a}<br/>
   Name={name}<br/>
   Status={status.toString()}<br/>
   STUDENT ID={Student.id}<br/>
   STUDENT NAME={Student.name}<br/>
   STUDENT HEIGHT={Student.height}
    {
      status ? "high" : "low"
    }
    <hr color='black'/>
    </div>
  )
}
