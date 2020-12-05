// 配置响应拦截器
axios.interceptors.response.use(
  (res) => {
    loadingInstance.close();
    //这里面写所需要的代码
    if (res.data.code == "401") {
      //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
      return false;
    }
    return Promise.resolve(res);
  },
  (error) => {
    loadingInstance.close();
    return Promise.reject(error);
  }
);
// 配置请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers["X-Auth-Token"] = cookieVue; //cookie设置在头部信息里面
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    alert("请求超时，请稍后重试！");
    return Promise.reject(error);
  }
);
