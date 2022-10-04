import './TasksContainer.css';
import Task from '../Task/Task';

function TasksContainer(props){
  let ulContent=[] ;
  props.tasks.forEach((task,index)=>{
    console.log(`task #${index} isCompleteCheckboxChecked = ${props.isCompletedTasksHidden} isThisCheckboxChecked = ${task.isChecked}`);
    console.log(`the className should be = ${(props.isCompletedTasksHidden && task.isChecked) ? 'task_hidden':''}`);
    ulContent.push(<Task
      taskName={task.label}
      isChecked={task.isChecked}
      key={index.toString()}
      isCompletedTasksHidden = {props.isCompletedTasksHidden}
    />)
  })
  return (
    <ul>
      {ulContent}
    </ul>
  )
}

export default TasksContainer;
