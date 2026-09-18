import axios from "axios";

const api = axios.create({
    baseURL: "https://apistore.cybersoft.edu.vn/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
// gửi đi
api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const accessToken = localStorage.getItem("accessToken");
        // console.log(config.url, accessToken);

        // console.log({ config });
        config.headers.Authorization = accessToken

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
// nhận kết qủa từ api
api.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default api;
