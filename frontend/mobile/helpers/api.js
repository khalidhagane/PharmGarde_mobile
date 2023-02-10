import axios from "axios"

const api = axios.create({
    baseURL: "http://172.16.10.9:5000/api",
})

export default api
