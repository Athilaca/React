import React, { useEffect, useState } from 'react';

const Effects=()=>{

    const[posts,setPosts]=useState([])

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,1)));

    },[]);

    return(
     <div>
        <h1 className='bg-success text-white'>Fetch api data</h1>
        {
            posts.map((post)=>
            <div key={post.id}>
            <h4 className='text-info'>{post.title}</h4>
            <p>{post.body}</p>
            </div>
            )
        }
     </div>
    )
}



export default Effects