import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../Redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  const dispatch = useDispatch();
  const [people, setPeople] = useState([]);

  const dispatchCall = () => {
    dispatch({
      type: 'GET_PEOPLE',
    });
    setPeople(props.store.graphR);
  };

  useEffect(() => {
    // peopleList();
    let mounted = true;
    if (mounted) {
      dispatchCall();
    }
    console.log(people);
    if (people !== []) {
      mounted = false;
    }
  }, [people]);

  //Axios call for people list. Using redux for practice.
  /* const peopleList = () =>
      axios
        .get(`/api/people`)
        .then((response) => {
          setPeople(() => response.data);
        })
        .catch((error) => {
          console.log(error);
          });  */

  return <div>'nothing</div>;
}

export default connect(mapStoreToProps)(Graph);
