//数字枚举 默认从0开始递增，可以自定义初始值
//既可以用枚举成员名字进行索引也可以用值索引
//实现原理：反向映射
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter)

//字符串枚举  不进行反向映射
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

//异构枚举 字符串和数字混合
enum Answer {
    N,
    Y = 'Yes'
}

//枚举成员
enum Char {
    //const 常量枚举 3种情况
    // 1.没有初始值 2.成员的引用 3.常量的表达式
    a,
    b = Char.a,
    c = 1 + 3, 
    //computed 需要被计算的枚举成员 在运行时才会被计算
    //需要初始值
    d = Math.random(),
    e = '123'.length,
}

// 常量枚举  会在编译阶段被移除，作用：不需要对象，只需要对象的值，简洁代码
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan,Month.Feb,Month.Mar]

//枚举类型
enum E {a,b} //枚举成员没有初始值
enum F {a = 0, b = 1} //所有成员都是数字枚举
enum G {a = 'apple', b = 'banana'}//所有成员都是字符串枚举

//两种不同的枚举类型不可以比较
let e: E = 3
let f: F = 3
// e === f 编辑器报错

//相同的枚举成员类型可以比较
let e1: E.a = 1
let e2: E.a = 1
let e3: E.b = 1
e1 === e2 
// e1 === e3

// 字符串枚举 只能是枚举成员的类型
let g1: G  = G.a //可以为G.a或G.b
let g2: G.a = G.a //这样只能为G.a
