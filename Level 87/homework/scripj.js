import React, { useState } from 'react';

function App() {
  const [logo, setLogo] = useState('react'); 

  const changeLogo = (language) => {
    setLogo(language);
  };

  return (
    <div>
      <h1>Welcome to the Language Selector</h1>
      <div>
        {logo === 'react' && <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" />}
        {logo === 'javascript' && <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/JavaScript-logo.png" alt="JavaScript logo" />}
        {logo === 'html' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/HTML5_logo_2019.svg/1024px-HTML5_logo_2019.svg.png" alt="HTML logo" />}
        {logo === 'css' && <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS logo" />}
      </div>
      <div>
        <button onClick={() => changeLogo('react')}>React</button>
        <button onClick={() => changeLogo('javascript')}>JavaScript</button>
        <button onClick={() => changeLogo('html')}>HTML</button>
        <button onClick={() => changeLogo('css')}>CSS</button>
      </div>
    </div>
  );
}

export default App;
