import {ADD_USER_DATA, SET_FETCH_STATE, SET_LOG_OUT} from "../actions/UserActions";

export const FETCH_STATE = {
    NOT_FETCHED: "Not Fetched",
    FETCHING: "Fetching",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
};


const initialUserState = {
    user:{},
    fetchState: FETCH_STATE.NOT_FETCHED
}
export function userReducer(state= initialUserState,action){
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload
            }
        case SET_LOG_OUT:
            return {
                ...state,
                user:state.user
            }
        default:
            return state;
    }
}