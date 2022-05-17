import axios from "axios";
import { message, notification } from "antd";
import { logOut } from "../store/reducers/AuthReducer";
import store from "../store/store";

export const ACCESS_TOKEN = "access_token";

// export const baseHost = window.location.host;

export const baseHost = "192.168.1.147:8082";
// export const baseHost = "192.168.1.146:8080";

export const axiosInstance = axios.create({
  baseURL: `http://${baseHost}/api`,
});

export const privateAxiosInstance = axios.create({
  baseURL: `http://${baseHost}/api`,
});

const controller = new AbortController();

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Error",
    description: "You have no rights to see this content.",
  });
};

privateAxiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

privateAxiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },

  function (error) {
    if (
      error.response.status === 401 &&
      window.location.pathname !== "/" &&
      !error.config.is_retry
    ) {
      error.config.is_retry = true;

      privateAxiosInstance
        .get("/user/refresh/token")
        .then((res) => {
          localStorage.removeItem(ACCESS_TOKEN);
          localStorage.setItem(ACCESS_TOKEN, res.data.token);

          error.config.headers["Authorization"] = "Bearer " + res.data.token;

          return axiosInstance.request(error.config);
        })
        .catch((e) => {
          controller.abort();
          store.dispatch(logOut());
          message.error("Authorize token was expired, please login again");

          return Promise.reject(error);
        });
    }

    if (error.response.status === 403) {
      openNotificationWithIcon("error");
    }

    if (window.location.pathname === "/") {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
