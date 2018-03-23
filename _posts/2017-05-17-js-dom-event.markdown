---
layout: post
title: JS基础之DOM
date: '2017-05-17 07:00:00'
categories: [JS]
tags: [DOM, 事件]
---

# JS操作DOM树
  * 创建新元素：`document.createElement(elementTagName)`
  * 添加：`appendChild(newElement)`和`insertBefore(newElement,beforeWhichElement)`
  * 删除：`removeChild(element)` 先找到父元素，然后删除子元素
  * 移动
    
    ![move](/assets/images/2017/d1.jpg)
    
    ![move](/assets/images/2017/d2.jpg)

  * 复制：`cloneNode(cloneChildNodes)`
  * 查找
    
    ![move](/assets/images/2017/d3.jpg)

---
# 事件流
  * 捕获型：事件的传播是从最不特定的事件目标到最特定的事件目标。即从DOM树的根到叶子。事件捕获的思想就是不太具体的节点应该更早接收到事件，而最具体的节点最后接收到事件。
  
  * 冒泡型：事件的传播是从最特定的事件目标到最不特定的事件目标。即从DOM树的叶子到根。

# DOM事件流
  * 三个阶段：事件捕获阶段+处于目标阶段+事件冒泡阶段
  * 事件绑定的写法
  * `document.getElementById("test").onclick = function(e){}`，后续添加的事件会覆盖前面的，无法绑定多个事件；
  * `addEventListener`和`removeEventListener`，最后一个参数是布尔型，`true`代表捕获事件，`false`代表冒泡事件。
    
    ![](/assets/images/2017/d4.jpg)

 
