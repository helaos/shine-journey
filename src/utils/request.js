import axios from 'axios'

// TODO pinia 状态数据管理

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  request => {
    // 请求成功
    // TODO 增加请求头信息

    return request
  },
  error => {
    // 请求失败
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 响应成功
    // TODO 判断响应code进行相关处理
    
    return response.data;
  },
  error => {
    // 响应失败
    return Promise.reject(error);
  }
)

export default service
