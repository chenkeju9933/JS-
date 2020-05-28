/* 
    :set nu     显示行号
    :wq         写入退出

    git reflog                      显示指针 移动几步
                    基于索引值操作[推荐]
                        git reset --hard 索引值（f92cf36）
                    基于^操作   只能往后
                        git reset --hard HEAD^    git reset --hard HEAD^^^  几个符号后退几步
                        
                    基于~操作   只能往后
                        git reset --hard HEAD~3  后退N步
                    
                    reset命令的三个参数
                        1 soft      仅仅移动本地库指针
                        2 mixed     本地库移动指针 重置暂存区
                        3 hard      本地库移动指针 重置暂存区 重置工作区

    git log                         显示日志
                                    空格向下翻页
                                    b 向上翻页
                                    q 退出

    git log --oneline               一行显示多个日志   

    git log --pretty=oneline        显示日志详细    

    git diff 文件名                        将工作区中的文件和暂存区进行比较
    git diff 本地库中历史版本 文件名        将工作区中的文件和本地库历史记录比较
    git diff                              比较工作区中的所有文件


    git分支    分支命名   feature_ ...规则命名
                         hot_fix   修复bug分支
            
            查看所有分支    git branch -v
            创建分支        git branch 分支名
            切换分支        git checkout 分支名
            合并分支     1 git checkout被合并分支名（要合并到哪个分支）
                        2 切换之后      git merge 有修改的分支名
            解决冲突   1  编辑文件 删除特殊符号
                       2 把文件修改满意 保存退出 :wq
                       3 git add 文件名  提交

    pull 拉取    git pull origin master
                
                相当于fetch + merge
                git fetch [远程地址别名][远程分支名]
                git merge [远程库地址别名/远程分支名]
    --------------------------------------------
    SSH
        1 ssh-keygen -t rsa -C 505355520@qq.com
        2 cat id_rsa.pub
            ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC0G6ToKC5Br40tcyCqTtqkfYg4eXxeytn1f4An1+
            urJXtxBBtA2HhjjYUo7tgs6w3O14gZo3EzT60PTTLbrWWp2mkth0CT7YSFu3bvXRcaMTdW4G0pI6q8
            LXN86BX3OoVHqwlFUexc0DEtkTAVToceVRdCb/4iT7KVdTDCzkq1yRy0nQw0F3ioFAYu8XkvOPweUv
            H0VuUXKkEbDVyYDadkkj1Brslc4JjsDKY1BF2fZy3EjS6QtDtrdwt0YiOaUtDZzFalh6Fyjz8QNzSn
            EWhhvCrPgnwI9C2PC/cJqNYU4eq2JjBH184GFRrd6uHvJ8Ul5ParweQguz5dqdS7Vvz8eSo5M5/I+G
            LVKS6F726GLCCtvwH9SX0GCNpNiy8YGNMxOJA95q/G/Lu59UawI4vBPiHgrOT7XyOcyvirCRdGUSLC
            pc5eIp68uMqwlsUAnBwu1JbPEdHM4tDe+XQNEhwJDhSXyYKBhYAd0YJ5Qp/tyZAqcNrSCBaY5FS8Is
            UnKM0= 505355520@qq.com
        3 去git设置里 复制查看ssh  添加上
        4 可以使用 注意 提交的时候 origin 替换 origin_ssh  
    --------------------------------------------
    cd Desktop                      cd到桌面
    cd c:                           cd到磁盘
*/