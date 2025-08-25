import AppName from "./components/Appname..jsx";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import './App.css';
import WelcomeMsg from "./components/welcomemsg";

function App() {
  return (
    <center className="todocontainer">
      <AppName />
      <Addtodo />
      <WelcomeMsg />
      <Todoitems />
    </center>
  );
}

export default App;