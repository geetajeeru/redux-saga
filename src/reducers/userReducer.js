import {types} from '../actions/types';

const initialState = {
    users: [],
    user: {},
    username: '',
    isAuthenticated: false,
    error: '',
    isLoading: false

}

export default function(state=initialState, action) {
    switch(action.type) {
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users
            };
        case types.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            };
        case types.LOGIN_SUCCESS:
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: !!action.token
            };
        case types.SET_USERNAME:
            return {
                ...state,
                username: action.payload.name
            };
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            };
        case types.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}