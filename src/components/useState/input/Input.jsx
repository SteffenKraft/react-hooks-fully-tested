import React, { useState } from 'react';

function Input() {
  // passing a function to useState will set the inputValue only once at the first render
  const [inputValue, setInputValue] = useState(() => '');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h3>Input</h3>
      <input onChange={handleOnChange} value={inputValue} />
      <p>{inputValue}</p>
    </>
  );
}

export default Input;
