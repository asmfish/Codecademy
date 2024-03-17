/**
 * The Body is responsible for showing the comments that users have written. It will work with the comment property of our passed-down comments object extracted from
 */
import React from 'react';

//Body component
function Body(props){
  return <p>{props.comment}</p>;
}

export default Body;
