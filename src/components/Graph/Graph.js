import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  const [people, setPeople] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // peopleList();
    dispatch({
      type: 'GET_PEOPLE',
    });
    setPeople(props.store.graphR.join(''));
    console.log(people);
  }, [dispatch, props.store.graphR, people]);

  //Axios call for people list within Graph file. Using redux for practice.
  /* const peopleList = () =>
      axios
        .get(`/api/people`)
        .then((response) => {
          setPeople(() => response.data);
        })
        .catch((error) => {
          console.log(error);
          });  */
  const stupid = Array.from(people);
  const stupid2 = stupid.map((person) => person.name);

  return (
    <div>
      <button onClick={() => console.log(stupid)}>hey girl hey</button>
      <button onClick={() => console.log(stupid2)}>I am here</button>

      <div></div>
    </div>
  );
}

export default connect(mapStoreToProps)(Graph);
