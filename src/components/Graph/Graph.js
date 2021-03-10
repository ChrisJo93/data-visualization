import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Graph() {
  const initialValue = false;
  const [test, setTest] = useState(initialValue);
  const [people, setPeople] = useState('');

  useEffect(() => {
    peopleList();
  }, []);

  const peopleList = () =>
    axios
      .get(`/api/people`)
      .then((response) => {
        setPeople(() => response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  console.log(people);

  return (
    <div>
      <button onClick={() => setTest((poopy) => !poopy)}>
        {test.toString()}
      </button>
      <div></div>
    </div>
  );
}
