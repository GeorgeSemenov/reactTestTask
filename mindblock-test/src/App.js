import logo from './logo.svg';
import AddTaskPanel from './AddTaskPanel/AddTaskPanel';
import TasksContainer from './TasksContainer/TasksContainer';
import { useState } from 'react';
import './App.css';
function App() {
  const [tasks, setTasks] = useState(
    [
      {label:"Задача №1", isChecked:false},
      {label:"Задача №2", isChecked:true},
      {label:"Задача №3", isChecked:true},
      {label:"Задача №4", isChecked:false},
    ]
  );
  const [isCompletedTasksHidden, setFlagToVisibilityCompletedTasks] = useState(false);
  let modifier = {
    status: "status",
    completeTaskCheckboxClickFunct : function (){
      setFlagToVisibilityCompletedTasks(!isCompletedTasksHidden);
    }
  };
  return (
    <div className="App endos">
      <AddTaskPanel
        addTaskFunc={addTaskFunc}
        modifier={modifier}
      />
      <h3 className="tasksContainer-title">you have {tasks.length} tasks</h3>
      <TasksContainer 
        tasks={tasks}
        isCompletedTasksHidden = {isCompletedTasksHidden}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  function addTaskFunc(taskLabel){
    let altTasks = tasks.map(item=> item);
    altTasks.push({label:taskLabel, isChecked:false});
    setTasks(altTasks);

    //В интернетах нашёл такое решение, но оно не работает
    //Выдаёт множество обшибок
    // setTasks(previousState =>{
    //   return{ ...previousState, `${label:taskLabel, isChecked:false}`}
    // }); // неудачная попытка.
  }
}

export default App;