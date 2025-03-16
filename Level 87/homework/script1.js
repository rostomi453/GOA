import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [repeatCount, setRepeatCount] = useState(1);

  const handleRepeat = () => {
    const repeatedText = inputValue.repeat(repeatCount);
    console.log(repeatedText);
  };

  return (
    <div>
      <h1>Repeat the Text</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="number"
        value={repeatCount}
        onChange={(e) => setRepeatCount(Number(e.target.value))}
        placeholder="Repeat count"
      />
      <button onClick={handleRepeat}>Repeat</button>
    </div>
  );
}

export default App;
