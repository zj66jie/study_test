// var arr = [
//   { age: "30", name: "z" },
//   { age: "20", name: "k" },
//   { age: "10", name: "l" },
// ];
// let arr2 = arr.map(function (item) {
//   console.log(item);
//   console.log(item["name"]);
//   return item.age * item.age;
// });
// arr.map(function (item) {
//   item.age = item.age + 1;
// });

// console.log(arr); //0: {age: "301", name: "z"}1: {age: "201", name: "k"}2: {age: "101", name: "l"}
// console.log(arr2); //[900,400, 100]

let arr = [1, 3, 5, 5, 2, 8];
// // 求含有求最大值
// let arr3 = arr.reduce((pre, cur) => {
//   //初始pre为1，cur为3
//   // console.log(pre) 1
//   return pre > cur ? pre : cur;
// });
// 求含有num数字的数量
function arrCount(arr, num) {
  return arr.reduce((pre, cur) => {
    // console.log(pre)  0
    pre += cur == num ? 1 : 0;
    return pre;
  }, 0); //当加上0时。初始pre为0，cur为1
}
// console.log(arrCount(arr, 5)); //2
// console.log(arr3); // 8
var values = [1, 2, 3, 4, 5];
var sum = values.reducer(function (prev, cur, index, array) {
  console.log(cur); //1,2,3,4,5
  return prev + cur;
}, 10);
