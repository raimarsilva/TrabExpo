import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.7:8080/api/',
});

//const gcloud = axios.create({
//    baseURLGke: 'http://34.95.237.236/80',
//});

export default api;