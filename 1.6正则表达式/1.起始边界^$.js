// 匹配全部为数字
let hd = "33336";
console.log(/^\d+$/.test(hd)); //true范围内全是数字

let hd2 = `
张三:010-99999999,李四:020-88888888`;

//[^a-z]	负值字符范围。匹配任何不在指定范围内的任意字符。
// 例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符
let res = hd2.match(/[^:\d-,]+/g);
console.log(res);

let hd3 = `
	张三:010-99999999,李四:020-85888588
`;

let res3 = hd3.match(/\d{3}-\d{7,8}/g);
console.log(res3);
