import Todoitem from "./Todoitem";

const Todoitems = ({ items, onDeleteClick }) => {
  return (
    <div className="items-container">
      {items && items.length > 0 ? (
        items.map((item, idx) => (
          <Todoitem
            key={idx}
            todoname={item.todoname}
            duedate={item.duedate}
            onDeleteClick={onDeleteClick}
          />
        ))
      ) : null}
    </div>
  );
};

export default Todoitems;