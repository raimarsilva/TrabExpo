import axios from 'axios';

const apiSuits = axios.create({
    baseURL: 'https://aplicacao7.tst.jus.br/pautaws/rest/processospauta/tst?sessao=405-2022-6-O'
});

export default apiSuits;