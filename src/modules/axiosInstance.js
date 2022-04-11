import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 60000,
});

let token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.token = token;
}

export default axiosInstance;
