import React from 'react';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import Futer from './Futer';
import Mainaka from './Mainaka';
import First from "../pages/First"
import BasicModal from './Modal';
import Info from '../pages/Info';

function Main() {
  return (
    
    <div className='main'>
      <Routes>
        <Route path='/' element={<Mainaka/>} />
        <Route path='/catalog' element={<First/>} />
        <Route path='/modal' element={<BasicModal/>} />
        <Route path='/info'  element={<Info/>}/>
      </Routes>
      <Futer/>

      

      </div>
        

    
    
   
  );
}

export default Main;
