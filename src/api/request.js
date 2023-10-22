import axios from "axios";
import { ElMessage } from "element-plus";
import { useStorage } from '@/hooks/localStorage';


const { superStorage } = useStorage();


const service = axios.create({
  baseURL: '/',
  timeout: 30000, // request timeout
});

service.interceptors.request.use((config) => {
  const configT = config;
  const { headers } = config;
  configT.headers = {
    "Content-Type": "application/json;charset=utf-8",
    ...headers,
  };
  const token = superStorage.get("token");
  if (token) {
    configT.headers.Authorization = `Bearer ${token}`;
  }
  return configT;
});

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res?.data;
  },
  (error) => Promise.reject(error)
);

const request = (params, dealErr = false) =>
  new Promise((resolve, reject) => {
    service(params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err.message);
        if (dealErr) {
          reject(err);
        } else {
          ElMessage({
            message: err.message,
            type: "error",
          });
        }
      });
  });

export default request;
