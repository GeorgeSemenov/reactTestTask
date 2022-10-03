import './AddTaskPanel__label.css';
// import { useState } from 'react';
function AddTaskPanel__label(props){
  return(
    <label 
      className="addTaskPanel__label"
      htmlFor="checkboxHideFullfilledTasks"
    >
      Скрывать выполненные взадачи
    </label>
  )
}
export default AddTaskPanel__label;