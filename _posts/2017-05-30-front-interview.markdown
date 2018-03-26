---
layout: post
title: 前端面试
date: '2017-05-30 07:00:00'
categories: [Front-end]
tags: [Interview]
---

# RegExp
  * `var expression = /pattern /flags`
  * 特殊标志（flag）：g 全局模式；i 不区分大小写；m 多行模式；
  * 匹配模式（pattern） 
   
    ![]({{site.baseurl}}/assets/images/2017/mian1.jpg)

  * 去掉空格、回车、制表符
   * `str.replace(/(^\s*)|(\s*$)/g, "")`：`(\s*)`表示连续空格的字符串、`^`表示以开始、`$`表示以结尾；
   * 使用`jquery`的`$.trim()`方法

---
# JQuery
  * Ready
  * 插件

---
# 跨域处理

# HTTP请求、状态码

# 性能优化

# JSON

# 兼容性问题

---
# 图片延迟加载
  * 原理：页面可见区域以下的图片先不加载，等到用户向下滚动到图片位置时，再进行加载。
  * Js原生方法

    ``` javascript 
        <script>
            var imgs = document.getElementsByTagName('img');
            // 获取视口高度与滚动条的偏移量
            function lazyload(){
                var scrollTop = window.pageYOffset 
                    || document.documentElement.scrollTop 
                    || document.body.scrollTop;
                var viewportSize = window.innerHeight 
                    || document.documentElement.clientHeight 
                    || document.body.clientHeight;
                for(var i=0; i<imgs.length; i++) {
                    var x =scrollTop+viewportSize-imgs[i].offsetTop;
                    if(x>0){
                        imgs[i].src = imgs[i].getAttribute('loadpic'); }}}
                setInterval(lazyload,1000);
        </script>
    ```

  * jQuery插件lazyload

    ``` javascript 
        $("img.lazy").lazyload({
            placeholder : "img/grey.gif", // placeholder值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
            effect: "fadeIn", // 载入使用何种效show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            threshold: 200, // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
            event: 'click',  // 事件触发时才加载，值click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载
            container: $("#container"),  // 对某容器中的图片实现效果,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
            failurelimit : 10 //值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
        });
    ```

---
# 二维码扫描后跳转
  * 微信登录的二维码实际上是将一个URL转换成二维码的形式，而通过微信客户端扫码后，无非就是打开了这个url, 我捕捉到的微信二维码的url为`https://login.weixin.qq.com/l/YdmTu30I5A==` ，这个url里的`YdmTu30I5A==`代表的是本次会话的唯一ID, 这个有点儿类似浏览器里的session id，通过这个ID,微信就能定向将确认结果反馈到网页上。
  * 服务器收到了登录信息和sessionID后就可以确认两件事：一是用来确认登录的客户端的用户是验证过的；二是通过session ID服务器知道将反馈结果推送到哪个网页。
  * web实时推送技术，使用推送技术可以节约服务器端和客户端的资源，可以稳定地推送和接收任何消息。

---
# 前端路由
  * 路由是根据不同的 url 地址展示不同的内容或页面，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。
  * 优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户
  * 缺点：使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存；单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置。
  * 原理：当 url 的 hash 发生变化时，触发 hashchange 注册的回调，回调中去进行不同的操作，进行不同的内容的展示。
  * 后端路由：每跳转到不同的URL，都是重新访问服务端，然后服务端返回页面，页面也可以是服务端获取数据，然后和模板组合，返回HTML，也可以是直接返回模板HTML，然后由前端JS再去请求数据，使用前端模板和数据进行组合，生成想要的HTML。

---
# 函数声明
  * var aaa=function(){...}：var 方式定义的函数，不能先调用函数，后声明，只能先声明函数，然后调用。
  * function aaa(){...}：function方式定义函数可以先调用，后声明。

---
# 手写盒子模型中
  * 获取盒子内子节点的class样式，盒子内节点的类型不可知![]({{site.baseurl}}/assets/images/2017/mian2.jpg)

---
# JS底层实现原理
  * ECMAScript（核心）：JavaScript 语言基础；规定了 JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等，它不属于任何浏览器。
  * DOM（文档对象模型）：规定了访问HTML和XML的接口；“ Document Object Model ”的缩写，简称“ 文件对象模型 ”，由W3C制定规范。定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及操作方法。
  * BOM（浏览器对象模型）：提供了独立于内容而在浏览器窗口之间进行交互的对象和方法。Browser Object Model ”的缩写，简称“ 浏览器对象模型 ”。BOM 定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法。

