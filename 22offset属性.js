/* 
    element.offsetParent        返回最近的带有定位的父亲元素 没有定位返回body
    element.offsetTop           父级有position定位 返回距离父级的距离 没有定位返回距离body的像素
    element.offsetLeft          动态返回距离像素 
    element.offsetWidth         返回盒子的大小 包括padding  border 不包括margin 返回数值不带单位
    element.offsetHeight
                                .style.    可以修改属性 上面的不可以

    element.clientTop           返回元素上边框的大小
    element.clientLeft
    element.clientWidth         返回自身包括 padding 内容区   不含 边框margin  数值不带单位
    element.clientHeigth
            区别 offset 包含边框   client 不包含边框

    element.scrollTop           
    element.scrollLeft          被超出的距离 ，滚动条之外的距离 被卷去的距离
    element.scrollWidth
    element.scrollHeight        返回自身实际高度 含padding 不含边框  数值不带单位  实际内容的高度
            onscroll 滚动事件 .addEventListener('scroll',function() {})
            window.pageYOffset   // 页面文档被卷去的头部距离

*/