import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.crasherltd.com/api',
    timeout: 5000,
  });

export default instance

