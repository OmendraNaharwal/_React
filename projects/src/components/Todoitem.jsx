function Todoitem({todoname,duedate,onDeleteClick}){
  return (
    <div style={{borderRadius: "2px", padding: "8px", marginBottom: "8px"}}>
        <div className="row">
          <div className="col" style={{marginTop: "4px"}}>
            {todoname}
          </div>
          <div className="col-5" style={{marginTop: "4px"}}>
            {duedate}
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                // "--bs-btn-padding-y": ".25rem",
                // "--bs-btn-padding-x": ".5rem",
                // "--bs-btn-font-size": ".75rem"
                width: "100%",
                marginTop: "4px",
                backgroundColor: "red",
                borderColor: "red",
              }}
              onClick={() => onDeleteClick(todoname)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default Todoitem;