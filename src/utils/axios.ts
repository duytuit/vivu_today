import axios from "axios";
import { toast } from "react-toastify";
export const clientApi = axios.create({
    // axios Cấu hình yêu cầu được cấu hình với tùy chọn BaseURL, cho biết rằng phần công khai URL yêu cầu
    baseURL: '/',
    // hết giờ
    timeout: 10000,

    headers: {'Accept': 'application/json'},
})

// Add a request interceptor
clientApi.interceptors.request.use(

    config => {
        // config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInB2IjoxLCJpYXQiOjE2ODg1NzQxNTgsImV4cCI6MTY4OTE3ODk1OH0.IW4PikV9HtCioapP0aE0qL5R0YbASfv7PO0fUYgNnRY`;
        return config;
    },
    error => {
        return Promise.reject(error);
    });

//Add a response interceptor
clientApi.interceptors.response.use(
    async function (res) {
        if (res.data.mess === "token-expired") {
            localStorage.removeItem('userInfo');
            localStorage.removeItem('token');
        };
        return res
    },
    async function (error) {
        let { name, message, ...e } = error
        if (name === 'AxiosError' && message === 'Network Error') {
            message = 'lỗi kết nối AxiosNetworkError';
        } else if (error.response) {
            if (error.response.status >= 500) message = 'server error '
            if (error.response.status >= 400) message = 'client error'
        } else if (error?.message.startsWith('timeout of'))
            message = 'Server timeout';
            console.log('dfgdfggdfg');
            
            //toast(error.response.data.msg, { hideProgressBar: true, autoClose: 2000, type: 'warning' })
        return { data: {}, status: false, mess: 'Đường truyền không ổn định, vui lòng thử lại sau!' }
    },
);