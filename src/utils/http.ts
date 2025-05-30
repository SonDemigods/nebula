// 导入axios
import axios from 'axios';
// 导入axios接口
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// 导入ApiResponse接口
import type { ApiResponse } from './http.interface'; 
// 导入config文件
import { config } from '../config';
// 导入storage工具函数
import { localStorageUtil } from './storage';

// 创建axios实例
const service = axios.create({
  baseURL: config.baseURL, // 使用从config.ts导入的baseURL
  timeout: 10000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：添加token
    const token = localStorageUtil.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.statusCode !== 200) {
      // 处理非200状态码的情况
      console.error('Error:', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res.response;
    }
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default service;