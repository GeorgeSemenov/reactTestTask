import Task__label from './__label/Task__label.js';
import Task__checkbox from './__checkbox/Task__checkbox.js';
import './Task.css';
function Task(props){
  return(
    <div class="task">
      <Task__checkbox/>
      <Task__label/>
    </div>
  )
}
export default Task;