/*
        对象
                    必须是一个具体的事物   不能是泛指的对象
                    例如 明星不是对象  周星驰是对象    一个与远程服务器的连接  也是对象

                    在JS中 对象指 一组无序的相关属性和方法的集合  所有事物都是对象


        创建对象
                    1 字面量创建
                        var obj = {
                            uname: asd,
                            age: 18
                            say: function () {
                                console.log('1111')
                            }
                        }  // 创建了一个空的对象

                        调用属性  obj.uname  或  obj['uname']
                        调用方法  obj.say()

                    2 new Object 创建
                        var obj = new Object()
                        obj.uname = 'asd'
                        obj.age = 18
                        obj.say = function() {
                            console.log('1111')
                        }

                    3 构造函数
                        以上2种方法创建对象局限在 一次只能创建一个对象

                        构造函数
                                    1 首字母必须大写
                                    2 不需要return  就可以返回值
                                    3 调用构造函数 必须用new
                                    
                        function Star(uname,age) {
                            this.uname = uname
                            this.age = age
                            this.say = function(res) {
                                console(res)
                            }
                        }
                        var result =  new Star('asd',18)
                        result.say('1111')
                        console.log(type of result)  // object

                        -----------------------
                        function Star(name,age) {
                            this.uname = name
                            this.age = age
                            this.say = function(asd) {
                                alert(asd)
                            }
	                    }
                        var result = new Star('zhang san',200)
                        result.say('11111111111')
*/