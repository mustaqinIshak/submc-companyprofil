import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amakbars.com/api',
    timeout: 1000,
  });

export default instance

