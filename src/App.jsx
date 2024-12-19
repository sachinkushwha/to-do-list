import Addtodo from "./components/addtodo"
import AppName from "./components/appname"
import Todoitme1 from "./components/todoitem"
import "./App.css";
function App() {
  return <center className="todo-container">
   <AppName/>
   <Addtodo/>
   <Todoitme1/>
  </center>
}

export default App
