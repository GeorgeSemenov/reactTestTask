import './Task__checkbox.css';
import { useState } from 'react';
import $ from 'jquery';
function Task__checkbox(props){
  const [isChecked, setCheckStatus] = useState('');
  $(".task__checkbox").click(function(){
    $(this).parent().toggleClass('task_theme_done');
    console.log(`click clicked`);
  })
  return(
    <input 
    type="checkbox"
    className="task__checkbox"
    onChange = {()=>{
      if(isChecked==='checked'){setCheckStatus('')}
      else if(isChecked===''){setCheckStatus('checked')}
    }}
    />
  )
}
export default Task__checkbox;