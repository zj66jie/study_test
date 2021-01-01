class Test {
  constructor(name, num) {
    //constructor是一个原生方法
    this.name = name;
    this.num = num;
  }
  testLog() {
    console.log(this.name, this.num);
  }
}
class Test2 extends Test {
  constructor(name, num, str) {
    super(name, num); //用super继承了 Test中的this.name = name; this.num = num;
    this.str = str;
  }
  // test(name, num, str) {
  //   super(name, num); //获得弗雷Test的this
  //   this.str = str;
  //
  ret;
}
const MyComponent = resolveComponent("MyComponent");
export const tt = new Test();
export const tt2 = new Test2();
export const cc = "dd";
