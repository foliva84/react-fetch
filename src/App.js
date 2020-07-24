// import React, { useState } from 'react';

import React from 'react';
import { postService } from './_services/posts.service.js';

function App() {

  // AMIGO quiero una vez obtengo los posts del API REST 
  // setearlos en una variable post utilizando setPosts( Uso del Hooks useState )
  // const [posts, setPosts] = useState([])
  let postParams = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(postParams)
  // }).then(response => response.json()).then(data => console.log(data))  
  const createPost = async (params) => {
    try {
      let data = await postService.create(params);
      console.log(data);      
    } catch (err) {
      console.log(err);
    }
  };

  createPost(postParams);

  const getAllPosts = async () => {
    try {
      let data = await postService.getAll().then();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
      <button onClick={ () => getAllPosts() }>Get Posts</button>
    </div>
  );
}

export default App;
