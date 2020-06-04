//原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

//数组
let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3]

//元组
let tuple: [number,string] = [0 , '1']
// tuple.push(2)
// console.log(tuple)

//函数
let add = (x:number,y:number) => x + y
let compute: (x:number,y:number) => number //函数类型
compute = (a,b) => a+b;

//对象
let obj: {x:number,y:number} = {x:1,y:2}
obj.x = 3

//symbol 唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

//undefined , null
let un: undefined = undefined
let nu: null = null
// num = undefined

//void 没有任何返回值的类型
let noReturn = () => {}

//any
let x 
x = 1
x = []
x = () => {}

//never 永远不会有返回值的类型
let error = () =>{
    throw new Error('error')
}

let endless = () =>{
    while(true){}
}