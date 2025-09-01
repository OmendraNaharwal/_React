import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions, privacyActions } from "../store";
  
const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleAdd = () => {
    const value = inputElement.current.value;
    if (value) {
      dispatch(counterActions.add({ num: Number(value) }));
      inputElement.current.value = ""; // Clear input after use
    }
  };

  const handleSubtract = () => {
    const value = inputElement.current.value;
    if (value) {
      dispatch(counterActions.subtract({ num: Number(value) }));
      inputElement.current.value = ""; // Clear input after use
    }
  };

  const handleprivacytoggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={() => dispatch(counterActions.increment())}
        >
          +1
        </button>

        <button 
          type="button" 
          className="btn btn-success"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -1
        </button>
        
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={handleprivacytoggle}
        >
          Privacy Toggle
        </button>
      </div>
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input 
          type="number"
          ref={inputElement}
          placeholder="Enter the Number"
          className="Number-input"
        />

        <button 
          type="button" 
          className="btn btn-warning"
          onClick={handleAdd}
        >
          Add
        </button>
        
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={handleSubtract}
        > 
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Controls;
