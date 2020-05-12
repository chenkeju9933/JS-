/* 
    事件监听 注册事件       同一个事件可以添加多个相同的事件处理程序 都会执行
            .addEventListenner('click',function() {

            })
            IE9以上支持    IE9以下 使用 attachEvent 
            .attachEvent('onclick',function() {
                
            })
            移除 .detachEvent('onclick',fn)

    解绑事件 removeEventListener('click',函数名 不加括号)
            1  .onclick = null
            2  .addEventListener('click',fn)
               fn() {
                   .removeEventListener('click',fn)
               }

    事件流   捕获阶段  事件阶段  冒泡阶段
            事件流有网景公司首先提出的事件捕获阶段 和 IE首先提出的 事件冒泡阶段
            .addEventListener('click',fn,boolean)  //布尔值为true 执行捕获阶段
                                                    不写或者false 执行顺序是冒泡阶段

                                        onblur onfocus onmouseenter onmouseover事件没有冒泡

    事件对象 
            .addEventListener('click',function(e){
                console.log(e)
            })   //  IE 6 7 8    必须用window.event  // console.log(window.event) 
            兼容写法 e = e || window.event

            e.target 返回的是触发事件的对象(具体到那一个)   this 是返回的绑定事件的对象(元素) e.currentTarget跟this相似
            IE678 兼容   var target = e.target || e.srcElement

    阻止事件(阻止默认行为) 跳转 提交等    e.preventDefault()      dom标准写法  方法
                                    e.returnValue;          IE6 7 8      属性
                                    也可以用 return false  阻止默认行为  没有兼容性问题 但是无法阻止后面的代码
            contextmenu 禁用右键菜单
            document.addEventListener('contextmenu',function() {
                e.preventDefault()
            })
            selectstart 禁止选中文字
            document.addEventListener('selectstart ',function() {
                e.preventDefault()
            })

    阻止冒泡    e.stopPropagation()
                IE 6 7 8  if(e && e.stopPropagation) {
                    e.stopPropagation()
                } else {
                    window.event.cancelBubble = true
                }

    事件委托    原理：不是给每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点
    
    e.clientX e.clientY    鼠标在可视区的X Y坐标
    e.pageX   e.pageY      鼠标在页面文档(整个区域)的X Y坐标  IE9+支持
    e.screenX e.screenY     鼠标在电脑屏幕的X Y坐标
    
*/