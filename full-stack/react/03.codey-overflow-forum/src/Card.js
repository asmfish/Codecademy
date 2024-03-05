/**
 * Card will be the outer “shell” that contains our two smaller components: Card is the parent, and Header and Body are the child components.
 */
import React from 'react';
import Header from './Header';
import Body from './Body';

//Card component
function Card(props){
  return(
    <>
      <Header profileImg = {props.commentObject.profileImg} username = {props.commentObject.username}/>
      <Body comment = {props.commentObject.comment}/>
    </>
  );
}

export default Card;
