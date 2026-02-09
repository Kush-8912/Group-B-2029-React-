import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  console.log('Re-Rendered')

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
