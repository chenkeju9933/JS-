/* 
   浮点数 算术运算 会有问题  不精确 后面很多小数
				var num = 0.1 + 0.3
				console.log(num == 0.3)  //false
				
			只要一个数 余数 是0   他就一定能被整除	   % 取余运算符
	
	
	++num  --num  递增 和 递减    单独使用  效果一样  num += 1  
			前置递增(递减)   变量先加1  然后返回值 参与运算   
			后置递增(递减)   先返回值  后加1   先运算 然后变量+1
			
			var [a,b,c] = [10,10,10];
			console.log(a,b,c)
			++a
			console.log(++a + 2) //14
			b++
			console.log(b++ + 2) //13
			console.log(c++ + ++c) //22
			
	==    console.log(18 == '18')  // true    默认转换数据类型


	num += 3
	num -= 3
	num *= 3  num = num * 3

	运算符优先级
			权重优先级    () 小括号
						 ++ -- ！ 一元运算符   逻辑非 优先级此层最高
						 *\/ +-   先乘除 后加减
						 > >= < <=  关系运算符 
						 == != === !==  相等运算符
						 && ||   先&& 后||  逻辑运算符
						 =  赋值运算符
						 ， 逗号运算符

			console.log(4 >= 6 || '人' != '阿凡达' && !(12 * 2 == 144) && true)
				 4>=6 false  ||  true && true && true
				 false||true  输出 true
			var num = 10
			console.log(5 == num/2 && (2+2*num).toString() == '22') // 输出true

 */