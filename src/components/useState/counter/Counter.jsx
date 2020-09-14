import React, { useState } from 'react';

// INFO:
// if the data which is passed to useState is complex. It is better to pass a func instead
// useState(() => { ... complex data handling ...; return data });
// passing a function to useState will set the initial value one once
// passing a a value will set the value every time the component rerenders

function Counter() {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount((prevCount) => setCount(prevCount - 1));
  const incrementCount = () => setCount((prevCount) => setCount(prevCount + 1));

  return (
    <>
      <h3>Counter</h3>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default Counter;
