import axios from 'axios';

let config = {
  baseURL: process.env.baseUrl || '', // api的base_url
  timeout: 60 * 1000 // 请求超时时间
};

const _axios = axios.create(config);
// const CancelToken = axios.CancelToken;
// let flag = false;

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // 防止重复提交
    /*if (flag) {
      config.cancelToken = new CancelToken(cancel => {
        cancel("请勿重复提交，保持至少一秒的间隔");
      });
    }
    flag = true;
    setTimeout(() => {
      flag = false;
    }, 1000);*/
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = '连接到服务器失败';
    }
    // message.error(error.message);
    return Promise.reject(error);
  }
);

export default _axios;
