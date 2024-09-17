import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.crasherltd.com/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    timeout: 10000,
  });

export default instance

