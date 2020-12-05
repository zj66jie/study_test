const newInstance = axios.creat({
  baseURL: "url",
  timeout: 5000,
});
newInstance({
  url: "",
  method: "post",
}).then((res) => {});

// vue axios 实例
import axios from "axios";
//axios内部自带promise方法
export function request(confing) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 2000,
  });
  //发送真正的网络请求
  return instance(confing);
}
