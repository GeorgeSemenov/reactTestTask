import './Task__label.css';
function Task__label(props){
  return(
    <p className="task__label" >
      {props.taskName}
    </p>
  )
}
export default Task__label;