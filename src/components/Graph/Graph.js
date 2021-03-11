import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Graph() {
  const initialValue = false;
  const [test, setTest] = useState(initialValue);
  const [people, setPeople] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    //retrieves people data. Using redux for practice instead
    // peopleList();
    console.log(dispatch);
  }, []);

  //   const peopleList = () =>
  //     axios
  //       .get(`/api/people`)
  //       .then((response) => {
  //         setPeople(() => response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

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

export default connect(mapStoreToProps)(Graph);
