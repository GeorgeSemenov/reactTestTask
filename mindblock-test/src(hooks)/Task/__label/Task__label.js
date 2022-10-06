import './Task__label.css';
function Task__label(props){
  function labelClick(e){
    console.log("sineva");
    let input = e.target.node.nextSibling;
    input.focus();
    input.style.border="10px solid red";
  }
  return(
    <p 
      className={"task__label " + props.additionalClasses}
      onClick={labelClick}
    >
      {props.taskName}
    </p>
  )
}
export default Task__label;