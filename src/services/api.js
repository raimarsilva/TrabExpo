import axios from 'axios';

const baseURL = 'https://aplicacao7.tst.jus.br/pautaws/rest'

const api = axios.create({
    baseURL,
});

//const gcloud = axios.create({
//    baseURLGke: 'http://34.95.237.236/80',
//});

export default api;