import Addtodo from "./components/addtodo"
import AppName from "./components/appname"
import Todoitme1 from "./components/todoitem"
import "./App.css";
function App() {
  let tasks=[
    {task:"buy milk",date:"12/12/2024"},
    {task:"buy mobile",date:"12/02/2024"},
    {task:"vegitables",date:"23/12/2024"}
  ];
  return <center className="todo-container">
   <AppName/>
   <Addtodo/>
   <Todoitme1 todo={tasks} />
  </center>
}

export default App
