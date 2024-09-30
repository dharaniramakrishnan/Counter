import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Stylish Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="button-group">
        <button className="counter-button increment" onClick={increment}>Increment</button>
        <button className="counter-button decrement" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
