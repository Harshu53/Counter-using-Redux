import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "Increment" });
  };

  decrement = () => {
    this.props.dispatch({ type: "decrement" });
  };

  render() {
    return (
      <div className="container">
        <div className="title">The Counter value is : {this.props.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
