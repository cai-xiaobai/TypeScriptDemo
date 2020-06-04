interface List {
    readonly id: number;
    name: string;
    //[x: string]: any //用任意的字符串索引List,可以得到任意结果
    age?: number //可选属性
}
interface Result {
    data: List[]
}
function render(result: Result){
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if(value.age){
            console.log(value.age)
        }
    })
}
//传入的对象满足接口的必要条件，那么就是被允许的

let result = {
    data:[
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B',age: 10}
    ]
}
render(result)

//如果直接传入自变量的话就会对额外字段进行检查
// render({
//     data:[
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// })
//绕过这种检查有三种办法
//1.把对象自变量赋值给一个变量
//2.类型断言 ：明确的告诉编译器,我们知道这个对象类型就是Result
// render({
//         data:[
//             {id: 1, name: 'A', sex: 'male'},
//             {id: 2, name: 'B'}
//         ]
//     } as Result)

// render(<Result>{
//     data:[
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// })//建议第一种，这种在React中会产生歧义

//3.使用字符串索引签名


//索引接口
interface StringArray {
    [index: number]: string //用任意的数字去索引stringArray都可以得到一个string；相当于声明了一个字符串类型的数组
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string;//用任意的字符串去索引Names得到的结果都是string；这样声明之后就不能声明一个number成员
    // y: number;
    [z: number]: string
    //既可以用数字去索引Names，也可以使用字符串去索引;注意数字索引的返回值一定要是字符串索引的返回值的子类型，这是因为JS会类型转换，相当于number 转换成 string 这样就能保持类型兼容性
}