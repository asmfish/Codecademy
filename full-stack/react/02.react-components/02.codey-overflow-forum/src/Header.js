/**
 * This component will be responsible for the profileImg and username properties of our passed-down comments object.
 */
import React from 'react';

//Header component
function Header(props){
  return (
    <>
      <img src = {props.profileImg} />
      <h1>{props.username}</h1>
    </>
  );
}

export default Header;


