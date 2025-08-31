import {createStore} from "redux";

const initialState = {
    counter: 0
}


const counterReducer = (store = initialState ,action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, counter: store.counter + 1 };
    case "DECREMENT":
      return { ...store, counter: store.counter - 1 };
    default:
      return store;
  }
};

const counterstore = createStore(counterReducer)

export default counterstore;