import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.amakbars.com/api',
    timeout: 5000,
  });

export default instance

