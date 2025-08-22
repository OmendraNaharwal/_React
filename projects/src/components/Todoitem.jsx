function Todoitem({todoname,duedate}){
  return (
    <div>
        <div className="row">
          <div className="col">
            {todoname}
          </div>
          <div className="col-5">
            {duedate}
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                "--bs-btn-padding-y": ".25rem",
                "--bs-btn-padding-x": ".5rem",
                "--bs-btn-font-size": ".75rem"
                , backgroundColor: "red",
                borderColor: "red",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default Todoitem;