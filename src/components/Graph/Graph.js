import { useState } from 'react';

function Graph() {
  const initialValue = false;
  const [test, setTest] = useState(initialValue);
  return (
    <div>
      <button onClick={() => setTest((poopy) => !poopy)}>
        {test.toString()}
      </button>
    </div>
  );
}

export default Graph;
