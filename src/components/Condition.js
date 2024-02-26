import React from 'react'


//  const CheckNumber=()=>{
//     let a=10;
   
//         if (a>0){
//             return<h6>positive</h6>
//         }else if(a<0){
//             return <h5>negative</h5>

//         }else{
//             return <h6>zero</h6>
//         }
            
//     }

const CheckNumber=()=>{
    let number=10;
    return(<div>
        {number>0?<h1>positive</h1>:number<0?<h1>negative</h1>:<h1>zero</h1>}
    </div>);
    
    
}

  
export default CheckNumber