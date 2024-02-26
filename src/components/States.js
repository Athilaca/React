import React from 'react'
import { Container } from 'react-bootstrap';

const States =({states}) =>{
   
    return(
        <div>
        {
        states.map((state)=>(
        <Container>
        <div className="bg-warning">
            <h6>{state.name}</h6>
            <h6>{state.language}</h6>
        </div>
        </Container>
            )
            )
        }
        </div> 
       
    )
}


export default States