import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount((prevCount) => setCount(prevCount - 1));
  const incrementCount = () => setCount((prevCount) => setCount(prevCount + 1));

  return (
    <>
      <h3>UseState</h3>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default UseState;
