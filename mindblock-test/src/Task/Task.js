import $ from 'jquery';
import Task__label from './__label/Task__label.js';
import Task__checkbox from './__checkbox/Task__checkbox.js';
import './Task.css';
function Task(props){
  return(
    <div className="task">
      <Task__checkbox/>
      <Task__label
        taskName="Зыдуайча"
      />
    </div>
  )
}
export default Task;