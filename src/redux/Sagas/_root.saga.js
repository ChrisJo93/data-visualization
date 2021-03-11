import { all } from 'redux-saga/effects';
import graphSaga from './graph.saga';

export default function* rootSaga() {
  yield all([graphSaga()]);
}
