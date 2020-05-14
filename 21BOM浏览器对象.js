/* 
        绑定多个事件不冲突   window.addEventListener('load, function() {

                            })
        DOMContentLoaded    document.addEventListener('DOMContentLoaded', function() {

                            })              
                            //load等页面  全部加载完毕
                            // DOMContentLoaded 是DOM加载完毕 不包含图片 falsh css等  加载速度 比load快

        window.resize       监听浏览器窗口大小发生改变   
        window.innerWidth   当前屏幕的宽度     
        
        setTimeout('fun()',2000)   //一般不提倡这种写法 （大多是直接写函数名 不要括号）
        定时器中的this 指向的是 window    // 因为window.setTimeout()

        location
                            location.herf       整个URL
                            location.host       返回域名
                            location.prot       返回端口
                            loacation.pathname  返回路径
                            location.search     返回参数
                            location.hash       返回片段 #后内容 常见于链接 锚点

                            location.assign('url')   重定向页面  可以后退
                            location.replace()  替换当前页面 不能后退
                            location.reload()   重新加载页面 相当于刷新页面  如果参数为true 强制刷新CTRL+F5
         
        navigator.userAgent 
                            可以获得客户机发送给服务器的值 判断用户是移动端 还是 PC端打开
        
        history             history.back()      根据用户浏览记录 后退
                            history.forward()   前进
                            go(参数)             1 前进1页   -1  后退一页   
*/