import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

function Graph() {
  const [people, setPeople] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // peopleList();
    // dispatch({
    //   type: 'GET_PEOPLE',
    // });
  }, []);

  //Axios call for people list within Graph file. Using redux is overkill
  //but good practice.
  /* const peopleList = () =>
      axios
        .get(`/api/people`)
        .then((response) => {
          setPeople(() => response.data);
        })
        .catch((error) => {
          console.log(error);
          });  */

  return (
    <div>
      <button onClick={() => console.log('poop')}>hey girl hey</button>
      <div></div>
    </div>
  );
}

export default connect(mapStoreToProps)(Graph);
