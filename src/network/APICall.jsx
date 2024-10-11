import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const tempConfig = config;
    const token = localStorage.getItem("token");
    if (token) {
      tempConfig.headers.Authorization = `Bearer ${token || ""}`;
    }
    return tempConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    return formData.append(key, object[key]);
  });
  return formData;
};

const APICall = async (
  method,
  body,
  url = null,
  headers = null,
  formData = false
) => {
  const config = {
    method,
  };
  if (url) {
    config.url = url;
  }
  if (body && method === "get") {
    config.params = body;
  } else if (body && method === "post" && formData) {
    config.data = getFormData(body);
    config.headers = { "Content-Type": "multipart/form-data" };
  } else {
    config.data = body;
  }
  if (headers) {
    config.headers = headers;
  }
  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            reject(new Error("Session expired. Please log in again."));
            // window.location.href = "/logout";
            return;
          }
          if (error.response.data && error.response.data?.message) {
            reject(error.response.data.message);
            return;
          }
        }
        if (error.code === "ECONNABORTED") {
          reject("Request timeout. Please check your internet connection");
          return;
        }
        reject("Something went wrong, Please try again later.");
      });
  });
};

export default APICall;