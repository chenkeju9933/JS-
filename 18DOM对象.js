/* 
    console.dir()   打印获取到的 元素对象 返回的所有属性和方法
            var sec = document.getElementById('sec').getElementsByTagName('li')
            var lisec = document.getElementsByClassName('lisec')
            var box = document.querySelector('.box')   //返回选中的第一个对象
            var nav = document.querySelectorAll('.box')

            var bodyEle = document.body                 //获取页面body标签
            var htmlELe = document.documentElement      //获取HTML标签

    事件三要素   事件源  事件类型   事件处理程序

    innerText   不识别标签   非标准  IE定   去除空格和换行
    innerHTML   识别标签<></>   W3C标准     保留空格和换行

    element.style.     修改样式                                         // 修改比较少用style
    element.className = 'css类名'   新增 或者 替换  元素的class 类名      // 修改比较多用className

    onfocus  获得焦点
    onblur   失去焦点

    onkeyup     键盘按键被松开 
    onkeydown   键盘按键被按下
    onkeypress  键盘按键被按下 不识别功能键  ctrl shift 箭头等
                3个事件的执行顺序  down press up

    onkeypress  可以识别用户按下按键的大小写
                e.keyCode的值  判断用户按了哪个键

    onmouseover     鼠标经过
    onmouseout      鼠标离开
    onmousemove     鼠标移动  
    contextmenu 禁用右键菜单
            document.addEventListener('contextmenu',function() {
                e.preventDefault()
            })
    selectstart 禁止选中文字
            document.addEventListener('selectstart ',function() {
                e.preventDefault()
            })

    element.dataset    H5新增获取 自定义属性的集合  只能获取data- 开头的  IE11才开始支持
                        如果自定义属性有多个 - - 连结的话  
                        <div data-list-name = 'andy'><div/>
                        用dataset.listName 或  dataset['listName']  驼峰命名法
    
    getAttribute('属性')        获得属性的值      1 element.属性  
                                                2 element.getAttribute('属性')

    setAttribute('属性','值')   更改 设置 属性值

    removeAttribute()           移除 某个属性

    .classList.add('类名')      添加类名
    .classList.remove('类名')   移除类名    
    .classList.toggle('类名')   切换类名  如果有这个类就删除  如果没有 就添加

*/