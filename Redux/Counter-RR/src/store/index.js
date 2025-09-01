import {createStore} from "redux";

const initialState = {
    counter: 0,
    privacy: false
}


const counterReducer = (store = initialState ,action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, counter: store.counter + 1 };
    case "DECREMENT":
      return { ...store, counter: store.counter - 1 };
    case "ADD":
      return { ...store, counter: store.counter + Number(action.payload.num) };
    case "SUBTRACT":
      return { ...store, counter: store.counter - Number(action.payload.num) };
    case "PRIVACYTOGGLE":
      return { ...store, privacy: !store.privacy };
    default:
      return store;
  }
};

const counterstore = createStore(counterReducer)

export default counterstore;