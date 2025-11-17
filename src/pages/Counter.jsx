import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const clickRef = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function increment() {
    setCount((prev) => prev + 1);
    clickRef.current++;
  }

  function decrement() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <span>Count: {}</span>
      <span>(useRef clicks): {clickRef.current}</span>
      <div className="flex gap-2">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something"
          value={count}
        />
      </div>
    </div>
  );
}

export default Counter;
