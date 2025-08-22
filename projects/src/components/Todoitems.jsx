import Todoitem from "./Todoitem";

const Todoitems = ({ items }) => {
  return (
    <div className="items-container">
      {items && items.length > 0 ? (
        items.map((item) => (
          <Todoitem
            key={item.todoname}
            duedate={item.duedate}
            todoname={item.todoname}
          />
        ))
      ) : (
        <p>No todo items found.</p>
      )}
    </div>
  );
};

export default Todoitems;
