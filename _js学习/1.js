   //1. 输入登录内容检测一致
// console.clear();
// var passcode = prompt("输入密码","fsf");
// if (passcode === "456") {
//     alert("denglu")
// }

// else {
//     alert("degnmsjfl");
// }
   //2.计算和简单 的 调用
// function sumNum(a, b) {
//     return a * b;
// }
// var a = sumNum(20, 2);
// console.log(a);
// console.log(sumNum(10, 10));
   //3.简单数组
// function log()
// {
//     for(let i=0;i<arguments.length;i++)
//     {
//         console.log(arguments[i]);
//     }
// }
// log("a","b");

   //4.柯里化调用
// var a1= function AddNumThree(a, b, c) {

//     return a + b + c+"fa";
// }

var a1= (a, b, c)=>{
  return a + b + c +"fs";
}
 function AddNumThree(a, b, c) {

  return a + b + c +"fsf";
}

function AddNumThreeCurry(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };

    };

}
console.log(a1(1, 2, 3),"mkmg");
console.log(AddNumThree(1, 2, 3));
console.log(AddNumThreeCurry(1)(3)(7));
var currySum = AddNumThreeCurry(1)(2);
console.log(currySum(9));

   //5.自执行函数
var num1 = 10;
(function () {
    var num1 = 20;
    console.log(num1);
})();
console.log(num1);


//6.回调调函数

function request(cb) {
    console.log("请求数据");
    cb("233");
    console.log("请求结束");
}
/*1.
function callback(result) {
    console.log("执行回调");
    console.log("执行结果是:"+result);
}
request(callback);
*/
//2.
request(result => {
    console.log("执行回调");
    console.log("执行结果是:" + result);


});

/*数组
var ary = [1, 2, 3];
var arr = new Array(); //创建一个空数组[]
var arr = new Array(3); //创建一个长度为3的数组（数组项都为undefined）
var arr = new Array('小鸣', 18, '男'); //创建数组并写入数组元素 ['小鸣',18,'男']
*/
