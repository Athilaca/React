import React, { useState } from 'react'

const Form=()=>{

    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
      console.log(Name,Email)
    }
    return(
       <div>
        <form>
            <label>Name</label>
            <input type="text"  value={Name} onChange={(e)=>setName(e.target.value)}/>
            <label>email</label>
            <input type="text"  value={Email} onChange={(e)=> setEmail(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
       </div>
    )
}

export default Form
