function Todoitem2(){

  let todoname = "Go to College";
  let duedate = "4/10/2024";
  return (
    <div>
        <div class="row">
          <div class="col">
            {todoname}
          </div>
          <div class="col-5">
            {duedate}
          </div>
    
          <div class="col">
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

export default Todoitem2;