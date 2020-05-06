/* 
    函数声明     1. function 函数名() {     //命名函数
                    函数体
                }

                2. var 变量名 = function () {}     //调用方法 变量名()   也叫匿名函数
                函数只声明不调用 不会执行    
                 
                return  可以返回一个值
                return  会终止函数里后面的代码
                return  只能返回一个值 返回的结果是最后一个值
                return  不同于 break continue 只针对for等循环  还可以用在函数里


        arguments   当前函数的内置对象 储存了函数传递的所有实参  
                    只有函数才有arguments对象，内置
                    arguments 伪数组 没有真正数组的一些方法  如 pop() push()等等
                    function fn() {
                        console.log(arguments)
                        console.log(arguments.length)  //实参的个数
                        遍历所有的实参
                        for(let i=0;i<arguments.length;i++) {
                            console.log(arguments[i])
                        }
                    }
                    fn(1,2,3,4)
        
        数组翻转    
                    function reverse(arr) {
                        var newarr = []
                        for(let i=arr.length - 1;i >= 0; i++) {
                            newarr[newarr.length] = arr[i]
                        }
                        return newarr
                    }
                    console.log(reverse([1,2,3,4,5]))
*/