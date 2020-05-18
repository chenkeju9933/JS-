/* 
    jquery      方便操作DOM的 封装的JS库
    zepto       方便操作移动端的 DOM 封装的JS库
    
    jquery对象转DOM对象 可以使用原生JS的一些功能（jquery没有封装的）
    1 $('video')[索引号].play()
    2 $('video).get(索引号).play()

    jquery设置样式      $('').css('属性','值')

    筛选选择器       $('ul li:first')        第一个li
                    $('ul li:last')         最后一个
                    $('ul li:eq(index)')    索引号 从0开始
                    $('ul li:odd')          奇数
                    $('ul li:even')         偶数

    筛选方法         $('div').parent()           查找最近的父级
                    .parents('类名')//指定父元素    
                    $('div').children('li')     查找最近的儿子级  
                    $('div').find()             查找所有后代  可跟参数指定 
                    $('div').siblings()         查找兄弟节点  
                    $('div').nextAll()          查找当前元素之后的所有同级元素  
                    $('div').prevAll()          查找当前元素之前的所有同级元素
                    $('div').hasClass('参数')   检查当前元素是否含有特定的类 返回true false                           
                    $('div').eq(index)          相当于 $('div:eq(2)')  index从0开始  
    
    $(this).index() 获取当前元素的索引号

    操作css方法      $(this).css('color')               只写属性名 返回的是属性值
                    $(this).css('color','要修改的值')   修改
                    $(this).css({                       集合修改 属性可以不用加引号
                        color: 'red',           
                        width: 200
                    })   
                    
                    $(this).addClass('类名')        添加类
                    $(this).removeClass('类名')     删除类
                    $(this).toggleClass('类名')     切换类

    show()
    hide()
    toggle()        显示 隐藏 切换

    slideDown()
    slideUp()
    slideToggle()   下拉 上拉 切换 

    fadeIn()
    fadeOut()
    fadeTaggle()    淡入淡出效果
    fadeTo(时间，透明度)

    animate({},1000,easing,回调函数)

    hover()         事件切换  就是鼠标经过和离开的复合写法，参数是一个函数配合slideToggle 或2个函数参数
    stop()          只执行一次切换  必须写在slideToggle的前面  .stop().slideToggle()

    prop('属性值')          获取元素的固有属性
    prop('属性','属性值')   设置属性值
    attr()                  获取或者设置自定义属性  
    data()                  可以获取H5 data-index 属性  设置或获取元素缓存属性 看不到  
    
    .html()
    .text()            获取元素的内容 或者跟参数 修改内容
    .val()

    遍历元素
            $('div').each(function(index,element) {})
                    element参数遍历出来的是DOM对象
            $.each(arr||obj,function(i,ele) {})
                    用于遍历数据 可以遍历数组 或 对象

    创建元素         var li = $('<li>...</li>')
    内部添加         $('div').append(li)         尾部添加           父子关系
                    $('div').prepend(li)        头部添加
    外部添加         $('div').after(li)         目标元素后面        兄弟关系
                    $('div').before(li)         前面
    删除元素        $('div').remove()         删除匹配的元素
                    $('div').empty(li)          删除匹配的元素的所有子元素 不删除本身
                    $('div').html('')    
                    
    $('div').on({
        ...                         // 可以写多个监听事件
    })
    $('div').on('click mouseover', function() {
        $(this).toggleClass('类名')
    })                              
                                    //多个事件做相同操作

    事件解绑  解除所有事件          $('div').off('事件名')  解除指定事件

    事件委托
        $('ul').on('click','li', function(){})
                                    这种写法的触发对象是ul下的li
                                    on可以给未来创建的动态元素绑定事件
    解除事件委托
        $('ul').off('click','li')

    one()           相当于on()        只会触发一次

    自动触发事件
        1 $('div').click()
        2 $('div').trigger('click')
        3 $('div').triggerHandler('click')   不会触发元素的默认行为(input的光标闪动)

    事件对象  同原生JS的阻止冒泡 
                                e.stopPropagation()
                    阻止默认行为
                                e.preventDefault()

    拷贝对象
            $.extend(等待拷贝的对象,目标对象)    //如果有相同属性会替换覆盖
            第一个参数false 浅拷贝把原来对象里面的复杂数据类型地址拷贝给目标对象 修改一个对象里指针指向的数据 2个都会修改
            第一个参数为true 深拷贝不会影响原来的数据

    多库共存    改变$指向     1 var suibian = jQuery.noConfilict()  //释放$的控制权
                            2  把$ 替换为 jQuery
        
    jQuery尺寸  
            width() / height()              取得匹配元素的宽度和高度值
            innerWidth() / innerHeight()    包含padding
            outerWidth() / outerHeight()    包含padding border
            outerWidth(true) / outerHeight(true)    包含padding border margin
    
    jQuery位置
            offset() / offset({top:value,left:value})   获取或设置距离文档的位置 跟父级没有关系
            position()              距离父级的距离 只能获取 不能设置
            scrollTop() / scrollLeft()  设置或获取元素被卷曲的头部和左侧
            $("html,body").stop().animate({
                scrollTop: 0
            })

*/