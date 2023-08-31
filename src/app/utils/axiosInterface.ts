import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: ' https://learn-with-me-develop.up.railway.app/Api-learn-with-Me',
    headers: {
        'Content-Type': 'applicacion/json'
    }
})

export default axiosInstance