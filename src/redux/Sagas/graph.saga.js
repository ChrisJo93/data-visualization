import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* graphSaga() {
  yield takeLatest('GET_PEOPLE', getPeople);
  yield takeLatest('POST_PEOPLE', postPeople);
  yield takeLatest('DELETE_PEOPLE', deletePeople);
  yield takeLatest('EDIT_PEOPLE', editPeople);
  yield takeLatest('TEST_POST', postFile);

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

  function* postFile(action) {
    try {
      //axios call to add message
      console.log('saga fired');
      yield axios.post('/api/people/update', action.payload);
    } catch (err) {
      console.log(err);
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
