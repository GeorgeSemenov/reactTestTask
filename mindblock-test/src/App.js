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
  return (
    <div className="App endos">
      <AddTaskPanel
        addTaskFunc={addTaskFunc}
      />
      <h3 className="tasksContainer-title">you have {tasks.length} tasks</h3>
      <TasksContainer 
        tasks={tasks}
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
    setTasks(previousState =>{
      return{ ...previousState, {label:taskLabel, isChecked:false}}
    });
    // setTasks(tasks.push({label:taskLabel, isChecked:false}))
    //   const updateColor = () => {
    // setCar(previousState => {
    //   return { ...previousState, color: "blue" }
    // });
  }
  }
}

export default App;