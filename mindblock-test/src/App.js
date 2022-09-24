import logo from './logo.svg';
import AddTaskPanel from './AddTaskPanel/AddTaskPanel';
import TasksContainer from './TasksContainer/TasksContainer';
import './App.css';
let tasks = [
  {label:"Задача №1", isChecked:false},
  {label:"Задача №2", isChecked:true},
  {label:"Задача №3", isChecked:true},
  {label:"Задача №4", isChecked:false},
]
function App() {
  return (
    <div className="App endos">
      <AddTaskPanel/>
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
}

export default App;
