import {
  takeLatest,
  take,
  call,
  fork,
  put,
  select,
  cancel,
} from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import Api from 'utils/Api';
import { makeSelectToken } from '../App/selectors';
import * as types from './constants';
import * as actions from './actions';

function* loadCategory(action) {
  const token = yield select(makeSelectToken());

  yield call(
    Api.get(
      'faq/cat',
      actions.loadCategorySuccess,
      actions.loadCategoryFailure,
      token,
    ),
  );
}

function* loadAll(action) {
  const token = yield select(makeSelectToken());
  let query = '';
  // let sort = '';

  if (action.payload) {
    // pageNumber = `&page=${action.payload.page}&size=${action.payload.rowsPerPage}`;
    Object.keys(action.payload).map(each => {
      query = `${query}${each}=${action.payload[each]}`;
    });
  }

  if (action.payload.sort) {
    sort = `&sort=${action.payload.sort}`;
  }
  yield call(
    Api.get(
      `faq?${query}`,
      actions.loadAllSuccess,
      actions.loadAllFailure,
      token,
    ),
  );
}

function* loadOne(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `faq/${action.payload}`,
      actions.loadOneSuccess,
      actions.loadOneFailure,
      token,
    ),
  );
}

function* redirectOnSuccess() {
  yield take(types.ADD_EDIT_SUCCESS);
  yield put(push('/admin/faq-manage'));
}

function* addEdit(action) {
  const successWatcher = yield fork(redirectOnSuccess);
  const token = yield select(makeSelectToken());
  const { ...data } = action.payload;
  yield fork(
    Api.post(
      'faq',
      actions.addEditSuccess,
      actions.addEditFailure,
      data,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.ADD_EDIT_FAILURE]);
  yield cancel(successWatcher);
}

export default function* defaultSaga() {
  yield takeLatest(types.LOAD_ALL_REQUEST, loadAll);
  yield takeLatest(types.LOAD_ONE_REQUEST, loadOne);
  yield takeLatest(types.ADD_EDIT_REQUEST, addEdit);

  yield takeLatest(types.LOAD_CATEGORY_REQUEST, loadCategory);
}