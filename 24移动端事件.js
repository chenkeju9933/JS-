/* 
        touchstart  触摸到一个元素时

                    触摸事件对象 
                    e.touches       获取到几个手指正在触摸屏幕
                    e.targetTouches 几个手指正在触摸当前元素   //常用
                                    如果监听的是同一个元素 他们是一样的
                    changedTouches  手指状态发生了改变的列表 从无到有 从有到无变化

        touchmove   在一个元素上滑动时

        touchend    在一个元素上离开时
                    当手指离开 没有 touches 和 targetTouches列表 但是会有 changedTouches

        

*/