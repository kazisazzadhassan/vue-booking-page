import axios from 'axios'
import store from '@/store'

const baseUrl = 'https://product--app.herokuapp.com/api/'

const axiosInstance = axios.create({
  headers:{
    'Content-Type': 'application/json'
  }
})

// axiosInstance.interceptors.request.use(
//   config => {
//     let token = store.getters['USER/token']
//     if(token) config.headers["Authorization"] = 'Bearer ' + token
//     return config
//   },
//   error => Promise.reject(error)
// )

export default {
  reqApi: url => ({
    post: data => axiosInstance.post(baseUrl + url, data),
    postWithCustomHeader: (data, options) => axiosInstance.post(baseUrl + url, data, options),
    get: () => axiosInstance.get(baseUrl + url),
    put: data => axiosInstance.put(baseUrl + url, data),
    patch: data => axiosInstance.patch(baseUrl + url, data),
    delete: data => axiosInstance.delete(baseUrl + url, {data}),
  }),
}