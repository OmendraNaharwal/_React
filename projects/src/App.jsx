import AppName from "./components/Appname..jsx";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import './App.css';
import { useState } from "react";
import WelcomeMsg from "./components/welcomemsg";

function App() {
  const [todoitems, setTodoitems] = useState([]);

  const onNewitem = (itemname, itemduedate) => {
    const newtodoitems = [
      ...todoitems,
      { todoname: itemname, duedate: itemduedate }
    ];
    setTodoitems(newtodoitems);
  };

  const handleitemdelete = (itemname) => {
    const filteredItems = todoitems.filter(item => item.todoname !== itemname);
    setTodoitems(filteredItems);
    console.log("Item Deleted:", itemname);
  };

  return (
    <center className="todocontainer">
      <AppName />
      <Addtodo onNewitem={onNewitem} />
      {todoitems.length === 0 && <WelcomeMsg />}
      <Todoitems items={todoitems} onDeleteClick={handleitemdelete} />
    </center>
  );
}

export default App;