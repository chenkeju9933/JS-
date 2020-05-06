/* 
        作用域 提高程序的可靠性 减少命名冲突


        全局变量   浏览器关闭时才会销毁  占内存
        局部变量   程序或方法执行完毕就会销毁  节约内存资源

        作用域链   内部函数访问外部函数的变量采用链式（就近）查找方式，这种结构就是作用域链


        var a = b = c = 9      //  var a=9, b=9, c=9  b和c 没有var

        function params() {
		var a = b = c = 9
		}
        params()    //     如果不执行params函数   abc 都是is not defined
        console.log(b,c) 
        console.log(a);    执行后 a是 not defined    bc输出9

  */