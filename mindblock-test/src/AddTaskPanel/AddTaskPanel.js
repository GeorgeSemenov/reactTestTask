import __label from './__label/AddTaskPanel__label.js';
import __addButton from './__addButton/AddTaskPanel__addButton.js';
import __checkbox from './__checkbox/AddTaskPanel__checkbox.js';
import __input from './__input/AddTaskPanel__input.js';
import './AddTaskPanel.css';
import { useState } from 'react';

function AddTaskPanel(props){
  const [inputValue,setInputValue] = useState(undefined)
  return(
    <div className="addTaskPanel">
      <__input
        modifier={props.modifier}
        changeInputFunc={(inputValue)=>setInputValue(inputValue)}
      />
      <__addButton
        modifier={props.modifier}
        addButtonClickFunc={addButtonClickFunc}
      />
      <__checkbox
        modifier={props.modifier}
      />
      <__label
        modifier={props.modifier}
      />

    </div>
  )

  function addButtonClickFunc(){
    if(inputValue && inputValue!=''){
      props.addTaskFunc(inputValue);
    }
  }
}
export default AddTaskPanel;