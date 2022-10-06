import './Task__input.css';
//import { useState } from 'react';
function Task__input(props){
  return(
    <input 
      className={"task__input " + props.additionalClasses}
      onChange={(e)=>{resize(e)}}
    >
    </input>
  )
}
export default Task__input;

function resize(node){
  let input = node.target;
  let size = input.scrollWidth;
  input.style.width = size + 'px';
}