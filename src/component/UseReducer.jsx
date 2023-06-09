import React, { useReducer } from 'react';

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}
export default UseReducer;