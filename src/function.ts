//函数定义
function add1(x: number,y:number){
    return x + y
} 

let add2: (x: number,y: number) => number

type add3 = (x: number,y: number) => number

interface add4 {
    (x: number,y: number): number
}
//后三种是函数类型的定义，并没有具体实现 
// add1(1,2,3)

function add5(x: number,y?: number){
    return y? x+ y: x;
}

//像ES6一样，为函数参数定一个默认值

function add6(x: number, y = 0, z: number, q = 1){
    return x + y + z + q; 
}
//在必选参数前，默认参数是不可省略的，必须明确传入undefined来获取默认值
console.log(add6(1, undefined, 3) ,"---function")//如果第二个参数不传的话，就会把3赋值给y
//在必选参数后的默认参数是可以不传的。

//当参数不确定的时候我们就可以使用剩余参数
function add7(x: number, ...rest: number[]){
    return x + rest.reduce((pre,cur) => pre + cur)
}
console.log(add7(1, 2, 3, 4, 5) ,"---function")

//函数重载： 两个函数名称相同，参数个数或者参数类型不同那么就实现了一个函数重载。好处是为了相似功能的函数，使用不同的函数名称,增强了可读性。
//在TS中函数重载的定义有些不同，TS要求我们定义一系列名称相同的函数声明,比如：
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
//在类型最宽泛的版本中实现这个函数的重载
function add8(...rest: any[]): any {
    //先判断第一个元素类型
    let first = rest[0]; 
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur) => pre + cur)
    }
}
//到此函数重载就定义完了，接下来我们执行一下
console.log(add8(1,2,3))
console.log(add8('a','b','c'))