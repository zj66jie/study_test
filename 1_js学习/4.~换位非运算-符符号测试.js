function test() {
  const filters = ["weixin", "qq", "sinaweibo"];
  console.log(filters.indexOf("jkl")); //-1，不存在对应值indexOf值为-1
  console.log(~filters.indexOf("jkl")); //0
  if (~filters.indexOf("jkl")) {
    //加上~符号，当为0时不触发
    console.log(~filters.indexOf("jkl"));
    console.log("333");
  }
  if (1) {
    console.log("111");
  }
  if (-1) {
    console.log("222");
  }
  if (0) {
    //不触发
    console.log("555");
  }
}
test();
console.log(fsf);
