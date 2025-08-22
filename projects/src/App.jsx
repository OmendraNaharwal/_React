import AppName from "./components/Appname.";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/Todoitem2";
import './App.css';
import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
function App() {

  const todoitems = [
    { todoname: "Buy Milk", duedate: "4/10/2024" },
    { todoname: "Do Laundry", duedate: "4/11/2024" }
  ];

  return (
    <center class="todocontainer">
      <AppName/>
      <Addtodo></Addtodo>
      <Todoitems></Todoitems>
    </center>
  );
}

export default App;