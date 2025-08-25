import { MdDelete } from "react-icons/md";

function Todoitem({ todoname, duedate, onDeleteClick }) {
  return (
    <div className="todo-item d-flex justify-content-between align-items-center mb-2">
      <div>
        <span>{todoname}</span>
        <span className="ms-3 text-muted">{duedate}</span>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDeleteClick(todoname)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todoitem;