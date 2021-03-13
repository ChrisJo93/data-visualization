import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../Redux/mapStoreToProps';
import axios from 'axios';

function Graph(props) {
  const dispatch = useDispatch();
  const [people, setPeople] = useState([]);
  const dispatchCall = (item) => {
    dispatch({
      type: 'GET_PEOPLE',
    });
    return (item = props.store.graphR);
  };

  useEffect(() => {
    // peopleList();
    dispatchCall().then((item) => setPeople(item));
    setPeople(props.store.graphR);
    console.log(people);
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

  return <div>'noth</div>;
}

export default connect(mapStoreToProps)(Graph);
