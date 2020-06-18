import axios from 'axios';
import * as env from '../../enviroment';

const { API_URL } = env[process.env.NODE_ENV];

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: API_URL + url,
    data,
    headers
});   