class Dog {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() {}
}
//与ES6不同的是，我们为成员属性添加了类型注解，也为构造函数的参数添加了类型注解

//注意：
//1.无论ES或者TS中，类的成员的属性都是实例属性而不是原型属性，而类成员的方法都是实例方法
//2.与ES6不同的是实例的属性必须要有初始值，或者在构造函数中被初始化
console.log(Dog.prototype ,"---class")//是不包含name属性的
let dog = new Dog('wangwang')
console.log(dog ,"---class")

class Husky extends Dog {
    constructor(name: string,color: string){
        super(name)
        this.color = color;//this一定要在super之后调用
    }
    color: string
}

//public 公有成员 类的所有属性默认都是public
//private 私有成员 只能在类本身被调用，不能被类的实例调用，也不能被子类调用；也可以在构造函数加入私有属性，即这个类既不能被实例化也不能继承
//protected 受保护成员 只能在类或者子类访问，不能在实例中访问；构造函数也能使用代表这个类不能被实例化，只能被继承，相当于声明了一个基类
//readonly 只读  只读属性是不可更改的，一定要初始化，实例属性也是一样的
class monster{
    private constructor(name:string){
        this.name = name
    }
    public name: string = 'monster'
    private pri() {}
}

class animal{
    protected constructor(name:string){
        this.name = name
    }
    name: string
    readonly legs: number = 4
}
//构造函数的参数也可以添加修饰符，作用是将参数自动变成实例的属性，这样我们就能省略在类中的定义
//比如： 
class Wancai extends Dog{
    constructor(name: string, public color: string){
        super(name)
        this.color = color;
    }
    // color: string 这里代码就可以注释掉了，代码更简洁一些
}

//static 静态成员 类的静态成员只能通过类名调用，不能通过子类调用
class Cat {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() {}
    static food: string = 'fish'
}
class Kitty extends Cat{
    constructor(name: string){
        super(name)
    }
}
console.log(Cat.food,Kitty.food)