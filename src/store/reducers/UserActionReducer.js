import {ADD_USER_DATA, SET_FETCH_STATE} from "../actions/UserActions";

export const FETCH_STATE = {
    NOT_FETCHED: "Not Fetched",
    FETCHING: "Fetching",
    FETCHED: "FETCHED",
    FAILED: "FAILED",
};


const initialUserState = {
    name: "",
    fetchState: FETCH_STATE.NOT_FETCHED
}
export function userReducer(state= initialUserState,action){
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                ...state,
                name: action.payload.name
            }
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload
            }
        default:
            return state;
    }
}