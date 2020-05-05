/* 
  javascript  弱类型或动态类型语言  只有在程序执行的时候 才能根据变量右边的值确定数据是什么类型
  
  变量类型  1.Number 数字  
				八进制 0-7   前面要加一个0   010 = 8;  012 = 10
				十六进制   0~9 a~f   颜色是十六进制       
						  前面加 0x  表示十六进制
						  
				Number.MAX_VALUE   表示最大值
				Number.MIN_VALUE   表示最小值
				
				Infinity 表示无穷大 -Infinity 表示无穷小  
				NaN 代表一个非数值
				isNaN() 方法用来判断是否是非数字   返回true 和 false    非数字返回true 是数字返回false
		   2.String 字符串
				字符串转义字符  用/ 开头   如:  换行输出一个字符串  /n  '我是一个/n高富帅'
															   /b 空格 /t 缩进
					
				获取字符串长度 Str.length
				
				var quest;
				var num = 1;
				let str = '只能输入\n喜欢\n和\n不喜欢';
				function sayFun () {
					if(num == 1) {
						quest = prompt("你喜欢我吗")
						num++;
						if(quest == '喜欢') {
							alert('我也喜欢你')
						} else if(quest == '不喜欢') {
							alert('我很难受')
							sayFun()
						} else {
							alert(str)
							sayFun()
						}
					} else if(num > 1) {
						quest = prompt("第" + num + "次问你喜欢我吗")
						num++
						if(quest == '喜欢') {
							alert('第'+ num +'次喜欢上了；')
						} else if(quest == '不喜欢') {
							alert('第'+ num +'次不喜欢，痛苦；')
							sayFun()
						} else {
							alert(str)
							sayFun()
						}
					}
				}
				this.sayFun();
				
		   3.Boolean 布尔
				 true = 1 ；  false = 0  参与运算的时候
		   4.Undefined 未定义
				 undefined + 数值  = NaN
				 undefined + 字符串 = 拼接字符串
		   5.Null  空值	 
				 null + 数值 = 数值本身
	--------------------------------------------------------------
	typeof()
			console.log(typeof 变量)  打印数据类型
			null  typeof null   输出的是 object 对象类型
			
			let flag = null;
			console.log(typeof flag);   // 输出为object
			
			还可以根据调试框 console.log 输出的颜色 判断 变量类型
				 null undefined 灰色
				 Number 蓝色
				 Boolean 深蓝色
				 String  黑色
*/