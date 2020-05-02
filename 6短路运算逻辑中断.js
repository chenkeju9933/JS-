/* 
    短路运算 
            true && false     //false
                    不是布尔值  是一些运算的时候
                console.log(123 && 456)   // 456
                console.log(0 && 123)   // 123
                    如果第一个表达式为true  返回第二个表达式
                    如果第一个表达式为false  直接返回第一个表达式
            -----------------------------------------------
            ||  或
                console.log(123 || 456)  //  123
                console.log(0 || 123 || 345)  // 123 
                    如果第一个为真 返回第一个  


     逻辑中断   '' undefined null NaN 0   代表false   
     
     var num = 0
     console.log(122 || num++)
     console.log(num)   // 返回0   122判断为真 不会执行后面的num++

     var num = 0 
		console.log(NaN || num++) // 0
		console.log(num)   // 1
  */