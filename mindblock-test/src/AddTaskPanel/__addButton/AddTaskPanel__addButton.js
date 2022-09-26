import './AddTaskPanel__addButton.css';
// import { useState } from 'react';
function AddTaskPanel__addButton(props){
  return(
    <button 
      className="addTaskPanel__addButton"
      onClick={props.addButtonClickFunc}
    >
      дробавить взад ачу
    </button>
  )
}
export default AddTaskPanel__addButton;