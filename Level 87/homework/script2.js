import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);

  const numbers = [1, 2, 3, 4, 5]; 

  const calculateSum = () => {
    let sum = 0;
    numbers.forEach((number) => {
      sum += number;
    });
    setResult(sum); 
  };

  return (
    <div>
      <h1>Sum of Array Elements</h1>
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
