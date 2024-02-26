import React, { useState } from 'react';
import {phonesData} from './product.data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products=()=>
{
    const [items,setItem]=useState(phonesData)

    const decqty=(id)=>{
       const Newitem=items.map((item)=>
       item.id===id && item.qty >1?{...item,qty:item.qty-1,age: item.age-1}:item
       );
       setItem(Newitem)

    }

    const incqty=(id)=>{
        const Newitem=items.map((item)=>
        item.id===id ?{...item,qty:item.qty+1 ,age: item.age+1}:item
        )
        setItem(Newitem)
    }
    return(
      <div>

     <h1 className="bg-info text-white">Products</h1> 
     
     { items.map((item)=>
     <div className="d-inline-flex"  key={item.id}>
     <Card  className="shadow p-3 m-2 bg-body rounded"style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.location}
        </Card.Text>
        <h5>age:{item.age}</h5>
        <div>
            <p>Qty: <Button onClick={()=>decqty(item.id)}>-</Button> {item.qty} <Button onClick={()=>incqty(item.id)}>+</Button></p>
        </div>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
     
     )}     
    
     </div> 
  );
}





export default Products