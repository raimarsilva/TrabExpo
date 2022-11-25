import axios from "axios";

const apiSuits = axios.create({
  baseURL: "http://192.168.1.7:8080/api",
});

apiSuits.interceptors.request.use(
  (config) => {
    // TODO: get token from async storage
    config.headers[
      "Authorization"
    ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWltYXIiLCJleHAiOjE2NjkzNDAyNzZ9.YxgE3vElB_JyHe2UoEEsisRRZSKpINUYGd4o31kDSGc`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiSuits.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiSuits;
