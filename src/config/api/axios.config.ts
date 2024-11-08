import axios from "axios";

/* use axios for client side request */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // handle bearer token (token based) here
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err?.response?.status === 401) {
      return setTimeout(() => {
        localStorage.clear();
        window.location.href = "/login";
      }, 1 * 1000);
    }

    if (err?.code === "ECONNABORTED") {
    } else {
      // swal({
      //   text: "An error occurred: " + err?.message,
      //   icon: "error"
      // });
    }
    return Promise.reject(err);
  }
);
