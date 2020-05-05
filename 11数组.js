/* 
  数组   一组数据的集合  把一组数据存储在单个变量名下

        创建数组  1  new关键字创建
                        var array = new Array()
                 2  字面量创建
                        var array = []
        
        数组遍历
                var arr = [1,2,3,4,5,6,7,8,98,12]
                var max = arr[0]
                for(let i=0;i<arr.length;i++) {
                    if(max > arr[i]) {
                        max = arr[i]
                    }
                }
                alert(max)

*/