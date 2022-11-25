import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWltYXIiLCJleHAiOjE2NjkzNDAyNzZ9.YxgE3vElB_JyHe2UoEEsisRRZSKpINUYGd4o31kDSGc";

const apiSuits = axios.create({
    baseURL: 'http://192.168.1.15:8080/api',
    headers: {'Authorization': 'Bearer '+token}
});

export default apiSuits;