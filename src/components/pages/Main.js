import React,{useState} from 'react';
import {Routes,Route,Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './service'

const Main=()=>{
   

   
    return(
        
    <div>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="service">service</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="*" element={<Service/>}/>
            
        </Routes>
        </div>
    )
}


export default Main