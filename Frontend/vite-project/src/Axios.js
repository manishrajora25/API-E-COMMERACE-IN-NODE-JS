// axiosConfig.js
import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api-e-commerace-in-node-js.onrender.com", // ✅ remove `/all`
});

export default Instance;
