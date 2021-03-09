import { put, takeLatest } from 'redux-saga';
import axios from 'axios';

function* graphSaga() {
  yield takeLatest('GET_PEOPLE', getPeople);
  yield takeLatest('POST_PEOPLE', postPeople);
  yield takeLatest('DELETE_PEOPLE', deletePeople);
  yield takeLatest('EDIT_PEOPLE', editPeople);

  function getPeople() {
    console.log('in saga');
  }

  function postPeople() {
    console.log('in saga');
  }

  function deletePeople() {
    console.log('in  saga');
  }

  function editPeople() {
    console.log('in  saga');
  }
}

export default graphSaga;
