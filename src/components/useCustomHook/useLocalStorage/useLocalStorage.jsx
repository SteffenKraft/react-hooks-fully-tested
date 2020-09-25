import { useEffect, useState } from 'react';

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  // it is possible also to send a function as initial value
  if (initialValue instanceof Function) return initialValue();

  // no value set in local storage and initial value is not a function
  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  // when value is changed it will be saved in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // returning value and function to use useLocalStorage like normal useState
  return [value, setValue];
};
