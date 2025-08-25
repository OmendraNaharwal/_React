import { useContext } from "react";
import { Todoitemscontext } from "../store/todo-items-store.jsx";

const WelcomeMsg = () => {
  const { todoitems } = useContext(Todoitemscontext);
  return todoitems.length === 0 ? <h1>Enjoy Your Day</h1> : null;
};

export default WelcomeMsg;