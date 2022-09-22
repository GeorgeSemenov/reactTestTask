import './TasksContainer.css';
import Task from '../Task/Task';

function TasksContainer(props){
  let times = props.times;
  return (
    <div >
      <h3 className="tasksContainer">lists container entered the chat {times} times</h3>
      <Task/>
    </div>
  )
}

export default TasksContainer;
