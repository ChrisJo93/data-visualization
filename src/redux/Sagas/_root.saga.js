import { all } from 'redux-saga';
import graphSaga from './graph.saga';

export default function* rootSaga() {
  yield all([graphSaga()]);
}
