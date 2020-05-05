/*
    while 书写格式   表达式为TRUE  继续执行循环体

                    var num = 1
                    while(num <= 100) {
                        console.log('hello world!')
                        num++
                    }

                    var message = prompt('你爱我吗')
                    while(message !== '我爱你') {
                        message = prompt('你爱我吗')
                    }
                    alert('上当了！')
        
    do while 书写格式  至少执行一次循环代码

                    do{ 执行代码 } while(表达式)   先执行一次代码  然后判断 符合继续执行 不符合会跳出循环
                                                
                    var index = 0
                    do {
                        console.log('index')
                        index++
                    } while(index <= 10)

    wihle() {}  先判断 后执行
    do{} while()   先执行一次  后判断

    continue   跳出本次循环 继续执行下一次循环
    break      跳出后续所有循环 

                    var i = 1
                    var sum = 0
                    do {
                        if( i % 6 == 0) {
                            i++
                            continue
                        }
                        sum += i
                        i++
                    } while (i <= 100)
                    console.log(sum)
*/