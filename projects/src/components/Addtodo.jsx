import { useState, useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Todoitemscontext } from "../store/todo-items-store.jsx";


function Addtodo() {
  const [todoname, settodoname] = useState('');
  const [duedate, setduedate] = useState('');
  const { addNewitem } = useContext(Todoitemscontext);

  const handlenamechange = (event) => settodoname(event.target.value);
  const handleduedatechange = (event) => setduedate(event.target.value);

  const handleaddbuttonclicked = (event) => {
    event.preventDefault();
    if (!todoname || !duedate) return;
    addNewitem(todoname, duedate);
    settodoname('');
    setduedate('');
  };

  return (
    <div>
      <form className="row" onSubmit={handleaddbuttonclicked}>
        <div className="col">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoname}
            onChange={handlenamechange}
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            value={duedate}
            onChange={handleduedatechange}
          />
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              marginTop: "4px",
              backgroundColor: "green",
              borderColor: "green",
            }}
          >
            Add <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;