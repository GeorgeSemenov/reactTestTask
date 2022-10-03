import './AddTaskPanel__checkbox.css';
import { useState } from 'react';
function AddTaskPanel__checkbox(props){
  return(
    <input 
      className="addTaskPanel__checkbox" 
      type="checkbox"
      id="checkboxHideFullfilledTasks"
      onClick = {props.modifier.completeTaskCheckboxClickFunct}
      // Код ниже для вопроса Андрею как изменять стили другого компонента через querySelectorAll
      // onClick={(e)=>{
      //   // let elements = document.querySelectorAll('.task');
      //   if (e.target.checked){
      //     // document.getElementsByClassName('.task').style.border="solid 10px red";
      //     console.log(`elements : ${JSON.stringify(document.getElementsByClassName('.task').style.border="solid 10px red")}`);
      //   }
      // }}
    >

    </input>
  )
}
export default AddTaskPanel__checkbox;

function fadeIn(){

}