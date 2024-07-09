import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.crasherltd.com/api',
    timeout: 10000,
  });

export default instance

