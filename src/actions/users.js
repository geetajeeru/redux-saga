import {types} from './types';

export const getUsersRequest = (pagenumber) => ({
    type: types.GET_USERS_REQUEST,
    payload: {
        pagenumber
    }
});

export const getUsersRequestSucess = ({users}) => {
    return {
    type: types.GET_USERS_SUCCESS,
    payload: {users}
}};

export const login = (user, history) => ({
    type: types.LOGIN_REQUEST,
    payload: {user,
    history}
});

export const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    token
});

export const signup = (user, history) => ({
    type: types.SIGNUP_REQUEST,
    payload: {user, history}
});

export const getUserDetails = (id) => ({
    type: types.GET_USER_DETAILS_REQUEST,
    payload: {id}
});

export const getUserDetailsSuccess = ({user}) => ({
    type: types.GET_USER_DETAILS_SUCCESS,
    payload: {
        user
    }
});

export const setUsername = (name) => ({
    type: types.SET_USERNAME,
    payload: {name}
});


export const deleteUser = (id, history) => ({
    type: types.DELETE_USER_REQUEST,
    payload: {
        id,
        history
    }
});

export const logout = () => ({
    type: types.LOGOUT_REQUEST,
    token: ''
});

export const setLoading = (isLoading) => ({
    type: types.SET_LOADING,
    isLoading
});