import React, { useState } from 'react'

export default function Demo4() 
{
    const [score,setScore]=useState(0)
    function one(){
        setScore(score+1)
    }
    function two(){
        setScore(score+2)
    }
     function four(){
        setScore(score+4)
    }
     function six(){
        setScore(score+6)
    }
    function reset(){
        setScore(0)
    }

  return (
    <div>
        Score={score}
<button one onClick={one}>one</button> <br/>    
<button Two onClick={two}>Two</button><br/>
<button onClick={four}>Four</button><br/>
<button onClick={six}>Six</button><br/>
<button onClick={reset}>Reset</button>
    </div>
  )
}
