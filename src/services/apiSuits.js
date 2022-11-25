import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const apiSuits = axios.create({
  baseURL: "http://192.168.1.7:8080/api",
});

apiSuits.interceptors.request.use(
  async (config) => {
    const storagedToken = await AsyncStorage.getItem("@TrabExpo:auth");
    if (storagedToken)
      config.headers["Authorization"] = `Bearer ${storagedToken}`;

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
