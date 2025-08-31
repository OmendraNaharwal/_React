const redux = require("redux");

const initialState = {counter: 0};

const reducer = (store=initialState,action)=>{
  switch(action.type){
    case "INCREMENT":
      return {counter: store.counter + 1};
    case "DECREMENT":
      return {counter: store.counter - 1};
    case "ADDITION":
      return {counter: store.counter + action.payload.number};
    default:
      return store;
  }
}

const store = redux.createStore(reducer);

const subscriber = ()=>{
  const state = store.getState();
  console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:"INCREMENT"});
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"ADDITION",payload:{number:5}});
