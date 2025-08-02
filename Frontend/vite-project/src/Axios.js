// axiosConfig.js
import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:3000", // ✅ remove `/all`
});

export default Instance;
