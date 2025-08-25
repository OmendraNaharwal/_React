import { useContext } from "react";
import { Todoitemscontext } from "../store/todo-items-store.jsx";
import Todoitem from "./Todoitem";

const Todoitems = () => {
  const { todoitems, deleteitem } = useContext(Todoitemscontext);

  return (
    <div className="items-container">
      {todoitems.length > 0 &&
        todoitems.map((item, idx) => (
          <Todoitem
            key={idx}
            todoname={item.todoname}
            duedate={item.duedate}
            onDeleteClick={deleteitem}
          />
        ))}
    </div>
  );
};

export default Todoitems;