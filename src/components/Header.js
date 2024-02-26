import React,{useState} from 'react';
import Child from "./Child";
import  header from"./Header.module.css";
import { Button } from 'react-bootstrap';

const Header =()=>{
    const Hestyle={color:"blue"};
    const clickhandle =() =>{
        console.log("You clicked")
    }
    const [color,setColor] =useState("Green")
   
    const Changecolor=() =>{
        setColor("Red");

    };
    const [count,setCount]=useState(0)
    const increment=() =>{
        setCount(count+1);
    };
    const decrement=() =>{
        setCount(count-1);
    }

       


    return(
        <div>
            <h1 style={Hestyle}>component 1</h1>
            <h1 style={{color:"red"}}>you</h1>
            <p className={header.paragra}>this is a paragragh</p>
            <>

            <h1>Hello world {color}</h1>

            <Button onClick={Changecolor}>click me</Button>
            <h1>{count}</h1>
            <Button className="m-2" onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
            </>

        <Child/>
        </div>
    );

};


export default Header