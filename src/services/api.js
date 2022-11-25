import axios from 'axios';

const baseURL = 'http://aplicacao7.tst.jus.br/pautaws/rest/pautas'

const api = axios.create({
    baseURL,
});

export default api;