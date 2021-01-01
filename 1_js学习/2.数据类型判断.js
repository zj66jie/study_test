var func = function func() {
  console.log(func === func); //true
};
func();

let arr = [1, "fsf", 5, "fsg"];
console.log(Object.prototype.toString.call(arr));
let newArr = arr.filter((s) => {
  return s.constructor === Number;
});
for (const iterator of arr) {
  console.log(typeof iterator); //number string number string
}
console.log(newArr); //[1,5]

console.log(typeof ""); //string
console.log(typeof 1); //number
console.log(typeof true); //boolean
console.log(typeof null); //1.html:82
console.log(typeof undefined); //undefined
console.log(typeof []); //object
console.log(typeof function () {}); //function
console.log(typeof {}); //object

console.log("fen");
console.log("1" instanceof String); //false
console.log(1 instanceof Number); //false
console.log(true instanceof Boolean); //false
// console.log(null instanceof Null);
// console.log(undefined instanceof Undefined);
console.log([] instanceof Array); //true
console.log(function () {} instanceof Function); //true
// console.log({} instanceof Object); //true
console.log((1).constructor === Number); //true
var m = Object.prototype.toString;
console.log(m.call("aaa") === "[object String]"); //true
function parse(str) {
  return str.slice(8, -1).toLowerCase();
}
console.log(parse(m.call("aaa"))); //string
