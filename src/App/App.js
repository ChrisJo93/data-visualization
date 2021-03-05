import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App box">
      <p>Howdy</p>
      <p>{count}</p>
      <div className="buttonBox">
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <button onClick={() => setCount(count - 1)}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
