import {takeEvery, call, put, fork, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers(action) {
    try {
        const result = yield call(api.fectUsers, action.payload.pagenumber);
        yield put(actions.getUsersRequestSucess({
            users: result.data.data
        }));
        yield put(actions.setLoading(false));
    } catch (error) {
        
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(types.GET_USERS_REQUEST, getUsers);
}

function* getUserDetails(action) {
    try {
        const result = yield call(api.getUserDetails, action.payload.id);
        yield put(actions.getUserDetailsSuccess({
            user: result.data.data
        }));
        yield put(actions.setLoading(false));
    } catch (error) {
        
    }
}

function* watchGetUserDetailsRequest() {
    yield takeEvery(types.GET_USER_DETAILS_REQUEST, getUserDetails);
}

function* deleteUser(action) {
    const {id, history} = action.payload;
    try {
        yield call(api.deleteUser, id);
        yield put({
            type: types.DELETE_USER_SUCCESS,
            payload: id
        });
        history.push('/dashboard');
    } catch (error) {
        
    }
}

function* watchDeleteUserRequest() {
    yield takeEvery(types.DELETE_USER_REQUEST, deleteUser);
}

function* login(action) {
    const {user, history} = action.payload;
    try {
        const result = yield call(api.login, user);
        yield put(actions.loginSuccess({
            token: result.data.token
        }));
        yield put(actions.setUsername(user.email));
        history.push('/dashboard');
    } catch (error) {
        if(error.response) {
            yield put({
                type: types.SET_ERROR,
                error: error.response.data.error
            });
        }
    }
}

function* watchLoginRequest() {
    yield takeEvery(types.LOGIN_REQUEST, login);
}

function* signUp(action) {
    const {user, history} = action.payload;
    try {
        yield call(api.signup, user);
        yield put({
            type: types.SET_ERROR,
            error: ''
        });
        history.push('/');
    } catch (error) {
        if(error.response) {
            yield put({
                type: types.SET_ERROR,
                error: error.response.data.error
            });
        }
    }
}

function* watchSignupRequest() {
    yield takeLatest(types.SIGNUP_REQUEST, signUp);
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchLoginRequest),
    fork(watchSignupRequest),
    fork(watchGetUserDetailsRequest),
    fork(watchDeleteUserRequest)
];

export default userSagas;