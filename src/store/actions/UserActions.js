import axios from "axios";
import {FETCH_STATE} from "../reducers/UserActionReducer";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const SET_FETCH_STATE= "FETCH_STATE";

export function addUserData(user){
    return {type:ADD_USER_DATA,payload:user}
}

export function setFetchState(fetchState){
    return {type:SET_FETCH_STATE,payload:fetchState}
}

export const userName = (data,history) => (dispatch) => {
    axios.post("http://localhost:8082/api/auth/login",data)
        .then((res)=> {
            dispatch(addUserData(res.data))
            dispatch(setFetchState(FETCH_STATE.FETCHED))
            console.log(res.data.name)
            history.push("/")
        })
        .catch((err) => {
            console.log(err)
        })
}