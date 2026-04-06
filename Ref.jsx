import React, { useState, useRef } from "react";

function Ref() {
  const [input, setInput] = useState("");

  let inputRef = useRef(null);

  console.log(inputRef);

  function reset() {
    setInput("");
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = 'red'
    
  }

  return (
    <>
      <h1>useRef</h1>

      <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Ref;
