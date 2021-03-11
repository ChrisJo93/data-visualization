import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* graphSaga() {
  yield takeLatest('GET_PEOPLE', getPeople);
  yield takeLatest('POST_PEOPLE', postPeople);
  yield takeLatest('DELETE_PEOPLE', deletePeople);
  yield takeLatest('EDIT_PEOPLE', editPeople);

  function* getPeople() {
    try {
      const response = yield axios.get(`/api/people`);
      yield put({
        type: 'SET_PEOPLE',
        payload: response.data,
      });
    } catch (err) {
      console.log(`error in get saga, ${err}`);
    }
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
