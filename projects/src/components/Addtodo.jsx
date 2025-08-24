import { useState } from "react";

function Addtodo({ onNewitem }) {
  const [todoname, settodoname] = useState('');
  const [duedate, setduedate] = useState('');

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };

  const handleduedatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbuttonclicked = () => {
    if (!todoname || !duedate) return;
    onNewitem(todoname, duedate);
    settodoname('');
    setduedate('');
  };

  return (
    <div>
      <div className="row">
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
            type="button"
            className="btn btn-primary"
            style={{
              // "--bs-btn-padding-y": ".25rem",
              // "--bs-btn-padding-x": ".5rem",
              // "--bs-btn-font-size": ".75rem",
              width: "100%",
              marginTop: "4px",
              backgroundColor: "green",
              borderColor: "green",
            }}
            onClick={handleaddbuttonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;