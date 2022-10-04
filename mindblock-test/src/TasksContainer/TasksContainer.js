import './TasksContainer.css';
import Task from '../Task/Task';

function TasksContainer(props){
  let ulContent=[] ;
  props.tasks.forEach((task,index)=>{
    ulContent.push(<Task
      taskName={task.label}
      isChecked={task.isChecked}
      key={index.toString()}
      isCompletedTasksHidden = {props.isCompletedTasksHidden}
      addTaskFunc={props.addTaskFunc}
      altTask = {props.altTask}
    />)
  })
  return (
    <ul>
      {ulContent}
    </ul>
  )
}

export default TasksContainer;
