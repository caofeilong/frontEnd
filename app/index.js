import  route  from  './route';

console.info("我是 index 你是谁");


class Cfl {
    constructor() {
        console.info("我是cfl构造器");
    }

    sayHello() {
        console.info("我说SayHello");
    }
}
var cfl = new Cfl();
cfl.sayHello();
