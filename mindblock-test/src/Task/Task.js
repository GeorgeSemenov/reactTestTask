import { useState } from 'react';
import Task__label from './__label/Task__label.js';
import Task__checkbox from './__checkbox/Task__checkbox.js';
import './Task.css';
function Task(props){
  const [isChecked, setCheckStatus] = useState(props.isChecked);
  return(
    <li className={"task" + (isChecked? " task_checked": "")}>
      <Task__checkbox
        onClickFunc = {handleClick}
        isChecked={isChecked}
      />
      <Task__label
        taskName={props.taskName}
      />
    </li>
  )
  function handleClick(){isChecked? setCheckStatus(false): setCheckStatus(true);}
}
export default Task;
