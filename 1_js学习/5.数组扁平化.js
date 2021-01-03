let arr = [1, 3, [3, 4], 5];
console.log(Array.isArray(arr)); //true
console.log(arr.some(Array.isArray));
// 1.es6方法
ary = arr.flat(Infinity);
console.log(ary);
// 2.
// let str = JSON.stringify(arr);
// ary = str.replace(/(\[|\])/g, "").split(",");
// console.log(ary); //["1", "3", "3", "4", "5"]

// ary = str.replace(/(\[|\])/g, "").split(",");
// console.log(ary);
