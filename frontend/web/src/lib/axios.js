import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
