/* 
    数组对象 
                var arr = new Array(2)   //输出Array(2)  创建了一个空数组 长度为2
                var arr = new Array(2,3)  //  等价于  arr = [2,3]

                1 instanceof  运算符 检测是否为数组 
                            用法    var arr = []
                                    var obj = {}
                                    console.log(arr instanceof Array)  //true
                                    console.log(obj instanceof Array)  //false
                2 Array.isArray(arr)   //输出为true 检测是否是数组
                                        H5新增方法 IE9+支持 优先于instanceof

            添加 删除 数组元素
                push()      末尾添加一个或者多个 原数组发生变化 
                            console.log(arr.push(3,4))  //返回新数组长度
                unshift()   在数组开头添加一个或者多个
                pop()       删除数组的最后一个元素 一次只能删除1个  
                            没有参数  返回的是删除的元素   console.log(arr.pop()) 
                            原数组  也会发生变化 
                shift()     删除数组的第一个元素  只能删除一个  同pop()性质 没有参数

            数组排序  
                arr.sort()  可以对个位数 进行升序排序
                            arr.sort(function(a,b) {
                                return a - b  //或者是b-a
                            })
                            arr.sort((a,b) => b - a)   //重大到小排序
            翻转数组
                arr.reverse()

            indexOf()       indexOf('查找值',index起始位置)
                            返回指定数组或字符串元素的下标 从前往后
                            var arr = ['1','sad','as','f','das','j','f','s','9','s','a','f','g']
                            var num = 0
                            var index = arr.indexOf('f')
                            while(index !== -1) {
                                console.log(index);
                                index = arr.indexOf('f',index+1)
                                num++
                            }
                            console.log(num)
            lastIndexOf()                               // 查找不到的话 返回-1
                            返回指定数组或字符串元素的下标 从后往前  查找
                            数组去重
                            function unique(arr) {
                                var newArr = []
                                for(let i=0;i<arr.length;i++) {
                                    if(newArr.indexOf() === -1) {
                                        newArr.push(arr[i])
                                    }
                                }
                                return newArr
                            }
                
            数组转字符串
                1 toString()    arr.toString()
                2 join()        arr.join('-')  分隔符转字符串  
            
            splice(index,howmany,item1,.....,itemX)     index	必需。规定从何处添加/删除元素。
                    方法用于添加或删除数组中的元素         该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
                                                        howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
                                                        如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
                                                        item1, ..., itemX	可选。要添加到数组的新元素
            slice()
                            slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
                            var arr1 = arr.slice(1,3)
                            var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                            var myBest = fruits.slice(-3,-1);    //Lemon,Apple

            concat()        用于连接两个或多个字符串
                            var str1="Hello ";
                            var str2="world!";
                            var str3=" Have a nice day!";
                            var n = str1.concat(str2,str3); //Hello world! Have a nice day!

    --------------------  
    字符串对象  字符串具有不可变性，尽量不要大量拼接字符串，会占内存，只是指针变了，原内存的字符串并没有销毁
            
            charAt()        根据位置返回字符      
                            var str = 'hello'
                            for(let i=0;i<str.length;i++) {
                                console.log(str[i])
                            }
            chatCodeAt(index)   返回键盘阿斯码   判断用户按了哪个键

            str[index]      // H5新增

            concat()        用于连接两个或多个字符串
                            该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串
            
            slice()         var str="www.runoob.com!";
                            document.write(str.slice(4)+"<br>"); // 从第 5 个字符开始截取到末尾
                            document.write(str.slice(4,10)); // 从第 5 个字符开始截取到第10个字符
            
            substr('截取的位置','截取几个字符')

            substring()     substring() 方法用于提取字符串中介于两个指定下标之间的字符。
                            substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符
                            var str="Hello world!"
                            str.substring(3)        //lo world!
                            str.substring(3,7)      //lo w

            replace('被替换的字符串','替换为的字符串')    替换字符串   只会替换第一个匹配的
            
            split('分隔符') 字符串转数组  

            toLowerCase()   方法用于把字符串转换为小写

            toUpperCase()   把字符串转换为大写
            
                            var arr = 'asdasdaskjhdkjhasjkhd'
                            var obj = {}
                            for(let i=0;i<arr.length;i++) {
                                var chars = arr.charAt(i)
                                if(obj[chars]) {
                                    obj[chars]++
                                }else {
                                    obj[chars] = 1
                                }
                            }
                            console.log(obj);
                            var max = 0
                            var ch = ''
                            for(key in obj) {
                                if(obj[key] > max){
                                    max = obj[key]
                                    ch = key
                                }
                            }
                            console.log(ch);
     --------------------                         
    Math        // 求两个整数之间的数字
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
                }

                function getRandomIntInclusive(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
                }

    Date        获取时间戳的4种方法
                            var date = new Date()
                            1   date.valueOf()
                            2   date.getTime()
                            3   var date1 = +new Date()
                            4   var date2 = Date.now()   //  H5新增的

                var date = new Date('2020-5-7 19:8:8')
                console.log(date)   //输出  可以获得这个指定的时间

                js将毫秒数转化为时间
                var date = new Date(1499996760000);
                dateTime = date.toLocaleString();

                let weektime = "0123456".charAt(new Date().getDay()); // 最简单的判断今天是星期几

                var date = new Date('2020-5-7 22:50:8')    //获取指定时间的时间戳
                console.log(date);
                var date1 = date.getTime()
                var date2 = new Date().getTime()
                console.log(date1,date2)
        ------------------------------------------------------------------------
                // 重写方法，自定义格式化日期
                Date.prototype.toLocaleString = function() {
                    // 补0   例如 2018/7/10 14:7:2  补完后为 2018/07/10 14:07:02
                    function addZero(num) {
                        if(num<10)
                            return "0" + num;
                        return num;
                    }
                    // 按自定义拼接格式返回
                    return this.getFullYear() + "/" + addZero(this.getMonth() + 1) + "/" + addZero(this.getDate()) + " " +
                        addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
                };
                // 根据毫秒数构建 Date 对象
                var date = new Date(1499996760000);
                // 按重写的自定义格式，格式化日期
                dateTime = date.toLocaleString();
        -----------------------------------------------------------------------------
                Date.prototype.Format = function (fmt) { //author: meizz 
                var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
                };
                
                if (/(y+)/.test(fmt)) 
                {
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
        ----------------------------------------------------------
                时间戳 秒数 计算成现实时间
                d = parseInt(总秒数 / 60 / 60 / 24)
                h = parseInt(总秒数 / 60 / 60 % 24)
                m = parseInt(总秒数 / 60 % 60)
                s = parseInt(总秒数 % 60)
*/