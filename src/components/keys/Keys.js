import React, { useState } from 'react'

const products = [
    {id:1, name:'Laptop',brand:'Dell',Quantity:6},
    {id:2, name:'Laptop',brand:'Victus',Quantity:8},
    {id:3, name:'Laptop',brand:'Asus',Quantity:3},
    {id:4, name:'Laptop',brand:'Lenovo',Quantity:1},
]

const Keys = () => {
    const [oldItem,allItem]=useState(products);
    
    const increase=(id)=> 
    {
        const all=oldItem.map((item)=>
            item.id===id? {...item,Quantity:item.Quantity+1}:item);
        allItem(all);
        
    };
    return(
        <div>

        {oldItem.map((product)=> 
            <div className="bg-warning m-2" key={product.id}>
            <h1>{product.name}</h1>
            <h3>{product.brand}</h3>
            <h4>{product.Quantity}</h4>
            <button type="button" onClick={()=> increase(product.id)}>+</button>
        </div>
        )   
        }
        </div>
    )
}



export default Keys