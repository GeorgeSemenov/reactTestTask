import Task__input from './__input/Task__input.js';
import { useState } from 'react';
import Task__label from './__label/Task__label.js';
import Task__checkbox from './__checkbox/Task__checkbox.js';
import './Task.css';
function Task(props){
  const [isChecked, setCheckStatus] = useState(props.isChecked);
  return(
    <li className={"task" + returnAdditionalClasses()}>
      <Task__checkbox
        onClickFunc = {handleClick}
        isChecked={isChecked}
      />
      <Task__label
        taskName={props.taskName}
      />
      <Task__input
        
      />
    </li>
  )
  function handleClick(){isChecked? setCheckStatus(false): setCheckStatus(true);}
  function returnAdditionalClasses(){
    let additionalClasses = '';
    additionalClasses += isChecked? " task_checked": "";
    additionalClasses += (props.isCompletedTasksHidden && isChecked) ? ' task_hidden':''
    return additionalClasses;
  }
}
export default Task;
