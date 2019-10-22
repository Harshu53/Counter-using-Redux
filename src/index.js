import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import Counter from "./components/counter.components";
import { createStore } from "redux";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1
      };

    case "decrement":
      return {
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
