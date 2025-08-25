import { createContext, useState } from "react";

export const Todoitemscontext = createContext();

export function TodoitemsProvider({ children }) {
  const [todoitems, setTodoitems] = useState([]);

  const addNewitem = (todoname, duedate) => {
    setTodoitems((prev) => [...prev, { todoname, duedate }]);
  };

  const deleteitem = (todoname) => {
    setTodoitems((prev) => prev.filter((item) => item.todoname !== todoname));
  };

  return (
    <Todoitemscontext.Provider value={{ todoitems, addNewitem, deleteitem }}>
      {children}
    </Todoitemscontext.Provider>
  );
}
