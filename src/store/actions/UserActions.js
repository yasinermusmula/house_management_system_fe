import axios, {Axios} from "axios";
import {FETCH_STATE} from "../reducers/UserActionReducer";
import {API} from "../../api/api";
import {useSelector} from "react-redux";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const SET_FETCH_STATE= "FETCH_STATE";
export const SET_LOG_OUT = "SET_LOG_OUT";

export function addUserData(user){
    return {type:ADD_USER_DATA,payload:user}
}

export function setFetchState(fetchState){
    return {type:SET_FETCH_STATE,payload:fetchState}
}

export function setLogOut(){
    return {type: SET_LOG_OUT}
}
export const userName = (data,history) => (dispatch) => {
    API.post("/auth/login",data)
        .then((res)=> {
            dispatch(addUserData(res.data))
            dispatch(setFetchState(FETCH_STATE.FETCHED))
            console.log(res.data.name)
            localStorage.setItem("token",res.data.password)
            history.push("/")
        })
        .catch((err) => {
            console.log(err)
        })
}

export const userVerify = (email) =>(dispatch)=> {
    API.get(`/auth/verify?email=${email}`)
        .then((res)=> {
        localStorage.setItem("token",res.data.password);
        dispatch(addUserData(res.data))
        dispatch(setFetchState(FETCH_STATE.FETCHED))
    })
        .catch((err) =>{
            console.log(err);
            localStorage.removeItem("token")
        })
}

export const logOutAction = () => (dispatch) => {
    dispatch(setLogOut())
    dispatch(setFetchState(FETCH_STATE.NOT_FETCHED))
    localStorage.removeItem("token");
    console.log("logout oldu");
}