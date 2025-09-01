import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {

  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleAdd = () => {
    dispatch({ 
      type: "ADD", 
      payload: { num: inputElement.current.value }
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({ 
      type: "SUBTRACT", 
      payload: { num: inputElement.current.value }
    });
    inputElement.current.value = "";
  };

  const handleprivacytoggle = ()=>{
    dispatch({ type: "PRIVACYTOGGLE" });
  }


  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button 
        type="button" 
        className="btn btn-primary" 
        onClick={() => dispatch({ type: "INCREMENT" })}>
          +1
        </button>

        <button type="button" 
        className="btn btn-success"
        onClick={() => dispatch({ type: "DECREMENT" })}>
          -1
        </button>
        <button type="button" 
        className="btn btn-secondary"
        onClick={handleprivacytoggle}>
          Privary Toggle
        </button>
      </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input 
      type="number"
      ref={inputElement}
      // id="inputValue"
      placeholder="Enter the Number"
      className="Number-input"
      />

      <button type="button" 
      className="btn btn-warning"
      onClick={handleAdd}>
        Add
      </button>
      <button type="number" 
      className="btn btn-danger"
      onClick={handleSubtract}> 
        Subtract
      </button>
    </div>
    </div>
  );
};

export default Controls;
