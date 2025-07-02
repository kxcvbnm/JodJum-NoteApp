import axios from "axios"

// make this dynamic cause in production there's no localhost
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL
})

export default api;