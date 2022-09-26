import './AddTaskPanel__input.css';
// import { useState } from 'react';
function AddTaskPanel__input(props){
  return(
    <input 
      className="addTaskPanel__input"
      onChange={(e)=>{props.changeInputFunc(e.target.value)}}
    >

    </input>
  )
}
export default AddTaskPanel__input;