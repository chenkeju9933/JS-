/* 
    节点操作 
        nodeType    节点类型
                            元素节点 值为1
                            属性节点 值为2
                            文本节点 值为3
        nodeName    节点名称
        nodeValue   节点值

    .parentNode     获取元素的父节点  
                    得到是离它最近的父级节点  没有就返回null

    .childNodes     获取元素的所有子节点  包含元素节点  文本节点等等
    .children       获取所有的子元素节点   只有元素节点           //这个比较常用
    .firstChild     第一个子节点    所有节点
    .lastChild      最后一个子节点  所有节点
    .firstElementChild        第一个子元素节点                IE9才支持
    .lastElementChild         最后一个子元素节点

    .nextSibling    下一个兄弟节点    包含元素节点和文本节点    找不到返回 null 
    .previousSibling     上一个兄弟节点    包含元素节点和文本节点
    .nextElementSibling    下一个兄弟节点           只包含元素节点
    .previousElementSibling     上一个兄弟节点      只包含元素节点
            IE9才支持 可以封装函数解决       function getNextElementSilbing(element) {
                                                var el = element
                                                while(el = el.nextSibling) {
                                                    if(el.nodeType == 1) return el
                                                }
                                                return null
                                            }

    document.createElement('li')                创建节点
    .appendChild(li)                            尾部追加节点
    insertBefore(插入的元素，指定插入的位置)       前面添加节点  
    
    removeChild(ul.children[0])           删除元素节点

    .cloneNode()            克隆节点 
                            括号为空 或（false） 只克隆复制节点本身 不复制节点里面的内容
                            .cloneNode(true)  都会复制 内容也会复制  
                            
---------------------------------
innerHTML  比  createElement   效率要高
*/