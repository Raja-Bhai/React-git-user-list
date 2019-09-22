import { put, takeLatest, all, call } from 'redux-saga/effects'
import axios from 'axios';

function getlistApis() {
  return axios.request({
    method: 'get',
    url: 'https://api.github.com/users',
  });
}

function* getlistApi() {
  try {
    let { data } = yield call(getlistApis);
    yield put({ type: "GET_API_RESPONSE", json: data, });
  } catch (e) {
  }
}
function* getApi() {
  yield takeLatest('GET_API', getlistApi)
}

function getUserDetailsApis(url) {
  return axios.request({
    method: 'get',
    url: url,
  });
}

function* getUserDetailsApi(url) {
  try {
    let { data } = yield call(getUserDetailsApis, url.url);
    yield put({ type: "GET_USER_DETAILS_RESPONSE", json: data, });
  } catch (e) {
  }
}
function* getUserDetails() {
  yield takeLatest('GET_USER_DETAILS', getUserDetailsApi)
}

export default function* rootSaga() {
  yield all([
    getApi(),
    getUserDetails(),
  ])
}