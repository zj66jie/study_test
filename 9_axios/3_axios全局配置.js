axios.defaults.baseURL = appConfig.xhr.baseURL; // 配置axios请求的地址
axios.defaults.timeout = 5; // 配置axios响应时间
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
