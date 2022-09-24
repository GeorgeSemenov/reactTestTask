import './Task__checkbox.css';
import { useState } from 'react';
function Task__checkbox(props){
  return(
    <input 
      type="checkbox"
      className="task__checkbox"
      onClick={props.onClickFunc}
      defaultChecked={props.isChecked}
    />
  )
}
export default Task__checkbox;