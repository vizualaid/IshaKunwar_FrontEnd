import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  // This useEffect hook updates the document title after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(count * 1)}>
        *
      </button>
      <button onClick={() => setCount(count / 1)}>
        /
      </button>
    </div>
  );
}
export default UseEffect
