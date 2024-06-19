import React, { useCallback, useId, useRef } from "react";
import { useReducer } from "react";
import { useState, useEffect } from "react";

  

const reducer = (state, action) => {
  const { type } = action;
  if (type === "increment") {
    return { ...state, count: state.count + 1 };
  }
};
const UseReducer = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const countRef = useRef(0);

  useEffect(() => {
    console.log(`value is: ${value}`);
  }, [value]);
  useEffect(() => {
    const fetchData= async()=>{
      const response=  await fetch("http://localhost:3000")
      const data=await response.json()
      setValue(data)
    }
    fetchData()
  }, []);
  const handleSubmit = () => {
    setValue(value + 1);
    countRef.current++;
    console.log("state:", value);
    console.log("countref:", countRef.current);
  };
  const memmoizedfn = useCallback(handleSubmit, [value]);
  return (
    <div>
      <h1>count:{countRef.current}</h1>
      <button onClick={() => setValue((prevprop)=>prevprop+1)}>increment</button>
      <button onClick={() => dispatch({ type: "increment" })}>decrement</button>
      <button id={useId} onClick={memmoizedfn}>
        increments
      </button>
    </div>
  );
};

export default UseReducer;

