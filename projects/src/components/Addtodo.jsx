function Addtodo(){
  return (
    <div>
        <div className="row">
          <div className="col">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-5">
            <input type="date" />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                "--bs-btn-padding-y": ".25rem",
                "--bs-btn-padding-x": ".5rem",
                "--bs-btn-font-size": ".75rem"
                , backgroundColor: "green",borderColor: "green",
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
  )
}

export default Addtodo;