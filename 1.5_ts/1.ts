function jss() {
  let s: string = "股份2s-";
  console.log(s);
}
jss();
//普通数据类型
let a: number = 123;
let b: string = "dssd";
console.log(b);
//对象数据类型bx

// let obj: {
//   myname: string;
//   te: number;
//   toString: () => void;
// } = {
//   myname: "55",
//   te: 55,
//  toString: function () {},
// };
interface Ob {
  myname: string;
  te: number;
  toString: () => void;
}
let obj: Ob = {
  myname: "55",
  te: 55,
  toString: function () {},
};
console.log(obj.myname);
// 自动注解
let obj2 = {
  name: "323",
  number: 345,
};
console.log(obj2.number);
