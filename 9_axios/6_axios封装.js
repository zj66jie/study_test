//封装的位
export function request(config) {
  return new Promise((resolve, reject) => {
    let newvar = axios.create({
      baseURL: "http://localhost:99g/student/student",
      timeout: 5808,
    });
    newvar(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 最终封装
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
