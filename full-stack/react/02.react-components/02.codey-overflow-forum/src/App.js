/**
 * This is the top-level component and it is responsible for returning the interface to be rendered. In this case, it will be returning an instance of the Card component for every comment in commentData.js.
 */
import React from 'react';
import {comments} from './commentData'
import Card from './Card';

//App component
function App(){
  return(
    <>
      {  
        comments.map((comment, idx) => {
          return <Card commentObject = {comment} key = {idx}/>;
        })
      }
    </>
  );
}

export default App;
