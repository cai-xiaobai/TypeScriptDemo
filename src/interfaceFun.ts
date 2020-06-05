// let add1: (x: number, y: number) => number

// interface Add1 {
//     (x:number, y:number):number
// }
// 这两种定义方式是等价的
//更简洁的定义方式是类型别名

type Add = (x: number, y: number) => number

// let add1:Add = (a, b) => a + b //具体函数

//混合类型接口,既可以定义一个函数，也可以像对象一样拥有属性和方法
//下面我们就用混合类型接口定义一个类库

interface Lib {
    ():void;
    version:string;
    doSomething():void
} 
//这样对全部暴露了一个变量lib,它是个单例，如果我们想创建多个lib,需要用函数封装一下
// let lib:Lib = (() => {}) as Lib
// lib.version = '1.0'
// lib.doSomething = () => {}

function getLib() {
    let lib:Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();