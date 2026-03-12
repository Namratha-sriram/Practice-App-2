import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Demo5 from './Demo5'
import Demo4 from './Demo4';
import Demo3 from './Demo3';
import Demo2 from './Demo2';
import Demo1 from './Demo1';
import Demo6 from './Demo6';

export default function NavBar() {
  return (
    <div>
  <Link to='/'>Demo1</Link>
  <Link to='/Demo2'>Demo2</Link>
  <Link to='/Demo3'>Demo3</Link>
  <Link to='/Demo4'>Demo4</Link>
  <Link to='/Demo5'>Demo5</Link>
  <Link to='/Demo6'>Demo6</Link>
   

   <Routes>
    <Route path='/' element={<Demo1/>}/>
    <Route path='/Demo2' element={<Demo2/>}/>
    <Route path='/Demo3' element={<Demo3/>}/>
    <Route path='/Demo4' element={<Demo4/>}/>
    <Route path='/Demo5' element={<Demo5/>}/>
    <Route path='/Demo6' element={<Demo6/>}/>
   </Routes>



    </div>
  )
}
