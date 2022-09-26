import './TasksContainer.css';
import Task from '../Task/Task';

function TasksContainer(props){
  let ulContent=[] ;
  console.log(`props.tasks = ${JSON.stringify(props.tasks)}`);
  props.tasks.forEach((task,index)=>{
    ulContent.push(<Task
      taskName={task.label}
      isChecked={task.isChecked}
    />)
  })
  return (
    <ul>
      {ulContent}
    </ul>
  )
}

export default TasksContainer;
