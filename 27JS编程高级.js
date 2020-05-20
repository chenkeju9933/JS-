/*
    类和对象
            创建类      class Star {
                            constructor(uname) {
                                this.uname = uname
                                this.age = age
                            }
                            sing(song) {
                                console.log(song)
                            }
                        }
            利用类创建对象
                        var ldh = new Star('刘德华',18)
                        ldh.song('冰雨')
------------------------------------------
    类的继承     继承中的查找原则是就近原则   1 JS中 class 没有变量提升的概念 必须先有类 才能进行实例化
                                           2  类里面共有的属性和方法必须加this
                    class Father {
                        constructor(x,y) {
                            this.x = x
                            this.y = y
                        }
                        sum() {
                            return this.x + this.y
                        }
                    }
                    class Son extends Father {
                        constructor(x,y) {
                            super(x,y)  //调用了父类中的构造函数 需要写在this前面
                            this.x = x
                            this.y = y
                        }
                        subtract() {
                            rerurn this.x - this.y
                        }
                    }
                    var son = new Son(2,5)
                    console.log(son.sum())
------------------------------------------
    构造函数     特点 1 首字母大写
                     2 使用时必须new
                     3 不需要写return  
                     4 通过this添加的都是实例成员
                     5 在构造函数本身上添加的的成员 是 静态成员   
                     6 每一个构造函数都有一个原型对象 可以共享方法 节约内存资源
                     7 实例对象身上系统自己添加一个__proto__  指向构造函数的原型对象
                     8 对象原型__proto__和构造函数prototype原型对象里面都有constructor属性 指向构造函数本身

                在构造函数中的this指向的是 对象实例
                    function Star(uname,age) {
                        this.uname = uname
                        this.age = age
                    }
                    Star.prototype = {
                        constructor: Satr  // 手动利用constructor指回原来的构造函数
                        sing: function() {

                        }
                        eat: function() {

                        }
                    }
                    var ldh = new Star('刘德华',18)
                    console.log(ldh);
    call()      1 call()可以调用函数
                2 call()可以改变函数的this指向  // call(o,1,2)

                function fn(x,y) {
                    console.log(this)
                    console.log(x + y)
                }
                var o = {
                    name: xixi
                }

    子构造函数继承父构造函数
                function Father(uname,age) {
                    this.uname = uname
                    this.age = age
                }
                Father.prototype.money = function() {
                    console.log(10000000);
                    
                }
                function Son(uname,age,score) {
                    Father.call(this,uname,age)
                    this.score = score
                }
                
                Son.prototype = new Father()
                Son.prototype.consturctor = Son
                Son.prototype.exam = function() {
                    console.log('我要考试');
                }
                var ldh = new Son('liudeh',18,100)
                console.log(ldh);
                console.log(Father.prototype);
                console.log(Son.prototype.consturctor);
------------------------------------------
    ES5中新增方法
            map()   map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
                    map() 方法按照原始数组元素顺序依次处理元素。
                    注意： map() 不会对空数组进行检测。
                    注意： map() 不会改变原始数组。
                    function statistics(arr) {
                    let obj = {}
                    arr.map((item) => {
                        if(obj[item]) {
                            obj[item] = obj[item] + 1
                        } else {
                            obj[item] = 1  
                        }
                    })
                    return obj
                    }
                    console.log(statistics(['111','aa','b','111','aa']));

            arr.forEach(function(每一个数组元素value,下标index,数组本身arr) {

            })  
            var newArr = arr.filter(function(每一个数组元素value,下标index,数组本身arr) {
                return arr.indexOf(value) === index
            })    
            some()  返回true 或 false   招到第一个符合的 终止循环 效率更高
            every()   

            字符串方法 str.trim() 去字符串2端的空白   // 并不影响字符串本身 返回一个新的字符串

            对象方法 
            1 Object.keys() 获取对象自身所有的属性 效果类似for in  返回的是一个由属性值组成的数组
            2 Object.defineProperty(目标对象obj,prop需要修改的属性名字,目标特性 {
                value:要修改的值,
                writable: false,   // 不允许修改属性值 true可以修改
                enumerable: false // 目标属性是否可以被枚举 不会被遍历出来  不写默认都是false
                configurable：false  // 目标属性是否可以被删除或是否可以再次被修改特性 
              })
------------------------------------------
    改变this指向
        1 bind()        同call 但是不会调用函数  返回的是原函数改变this指向之后产生的新函数
        2 call()        call(o,参数1,参数2)
        3 apply()       apply(指向谁,数组)
                        var max = Math.max.apply(null,arr)

    为脚本或函数开启严格模式 第一行写上 'use strict'
              
------------------------------------------
    闭包    一个有权访问函数作用域中变量的函数
            闭包的主要作用就是延伸了变量的作用范围

            var car = (function () {
                var start = 13
                var total = 0
                return {
                    price : function(a) {
                        if(a <= 3){
                            total = start
                        } else {
                            total = start + (a - 3) * 5
                        }
                        return total
                    },
                    yd : function(flag) {
                        return flag ? total + 10 : total
                    }
                }
            })()
            console.log(car.price(10));
            console.log(car.yd(true));
------------------------------------------
    递归    一个函数在内部可以调用其本身 这个函数就是一个递归函数  注意return暴露出口 避免栈内存溢出 死循环
            function fn(n) {
                if(n == 1) return 1
                return n * fn(n - 1)
            }
            console.log(fn(3));
------------------------------------------
    浅拷贝  Object.assign(要拷贝的空对象，拷贝目标)  只会拷贝最外成数据 且一个改变 2个都会变
    深拷贝  可以随意改变 不会影响另外一个对象
            function deepCopy(new,old) {
                for(var k in old) {
                    var item = old[k]
                    if(item instanceof Array) {
                        new[k] = []
                        deepCopy(new[k],item)
                    } else if(item instanceof Object) {
                        new[k] = {}
                        deepCopy(new[k],item)
                    } else {
                        new[k] = item
                    }
                }
            }
            deepCopy(o,oldObj)
------------------------------------------
    ES6     1 let 块级作用域 不存在变量提升
            2 const  值不可变 具有块级作用域  声明时必须赋值
            3 解构赋值
                      数组解构  let[a,b,c] = [1,2,3]  // a=1 b=2 c=3
                      对象解构  let {name,age,sex} = {name:'1221',age: 18,sex:'nan'}
                                console.log(name,age,sex); //1221 18 nan

            4 箭头函数       赋值给一个变量 通过变量调用箭头函数
                            如果形参只有一个 () 也可以省略
                            没有自己的this关键字 箭头函数中的this指向 定义中函数的this
            5 剩余参数   function sum(first,...secounds) {
                            console.log(first)      // 10
                            console.log(secounds)  // [20,30]
                        }
                        sum(10,20,30)

                        let students = [1,2,3,4,5,6]
                        let [...s] = students
                        console.log(s)  //123456
                        
                        扩展运算符
                        let hallArr = [...this.data.hallTables];
                        扩展运算符可以用于合并数组
                        let arr3 = [...arr1,...arr2]
                        arr1.push(..arr2)
                        可以将伪数组转换为真正的数组
                        1 var btns = document.quersele('.btn')
                          btns = [...btns]
                    Array.from()      var arr =  Array.from(arr1)   可以将伪数组转换为真正的数组
                    Array.find((item,index) => item.id == 2)   // 返回第一个id=2的数组元素 找不到返回undefined
                    findIndex() 找出第一个符合条件的数组元素的索引，找不到返回-1
                    includes()  表示某个数组是否包含给定的值  返回布尔值  arr.includes(2)

            6 模板字符串   ` &{name}`
                          模板字符串可以换行
                          模板字符串中可以调用函数 `&{fn()}`

                    startWith()  字符串头部是否以参数开头 返回 true false
                    endsWith()   字符串头部是否以参数结尾 返回 true false
                    
                    repeat()  表示将原字符串重复n次  返回新字符串 参数为数字

                    Set数据结构  可以做数组去重
                    const s1 = new Set(['a','b','a'])
                    console.log(s1.size) // 2
                    var arr = [...s1]
                    实例方法 1   add(value)      添加某个值  返回Set结构本身  s1.add(a).add(b)
                            2   delete(value)   删除某个值 返回true false 表示删除是否成功
                            3   has(value)      返回true false  表示该值是否为Set成员
                            4   clear()         清除所有成员 没有返回值
                    Set遍历
                        s1.forEach((value) => {
                            console.log(value)
                        })

            7  
            8
            9
            10
------------------------------------------
------------------------------------------
------------------------------------------
*/