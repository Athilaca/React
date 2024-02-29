import React,{useState} from 'react';

const details=[{name:"john",email:"hello@gmail.com"}]

const  Counter =()=>{
    const[count,setCount]=useState(0);
    const Add=()=>{
        setCount(count+1)
    } 
    const subtract=()=>{
        
        setCount(count>0?count-1:count);
    } 
   


    return(<div>
      
      {Array.from({ length: count }, (_, index) =>(
        <div>
       <h5>{details[0].name}</h5>
       <h6>{details[0].email}</h6>
       </div>
      ))}
      <div>{count}</div>
      <button onClick={Add}>+</button> 
      <button onClick={subtract}>-</button> 
    </div>)
}

export default Counter