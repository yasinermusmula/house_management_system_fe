import axios from "axios";

export const createAxiosInstance = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL:"http://localhost:8082/api",
        headers: token ?
            {
                Authorization:token,
            }
            : {}
    })
}

export let API = createAxiosInstance();