import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    const token = localStorage.getItem("token");
    resolve(token ? `Bearer ${token}` : null);
  });
};
// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://partysync-5fbbda6a7756.herokuapp.com"
//       : "http://localhost:3000",
// });

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_API_BASE_URL
    : "http://localhost:3000",
});

api.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;