import { useDispatch } from "react-redux";

const Controls = () => {

  const dispatch = useDispatch();
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>

      <button type="button" className="btn btn-success" onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      {/* <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button> */}
    </div>
  );
};

export default Controls;
