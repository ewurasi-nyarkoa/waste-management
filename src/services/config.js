import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem("token")

if (token) {
    axios.defaults.headers.common["Authorization"]= `bearer ${token}`
    console.log(token)
}else{
console.log("no token found")}

export const apiClient = axios.create({
    baseURL: baseURL, 
})

