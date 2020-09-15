import React, { useEffect, useRef, useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState(() => '');
  const prevInputValue = useRef('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    prevInputValue.current = inputValue;
  });

  return (
    <>
      <h3>Input</h3>
      <input onChange={handleOnChange} value={inputValue} />
      <p>current state: {inputValue}</p>
      <p>previous state: {prevInputValue.current}</p>
    </>
  );
}

export default Input;
